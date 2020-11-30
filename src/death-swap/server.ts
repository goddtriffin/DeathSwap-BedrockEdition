import {
  CommandResult,
  Difficulty,
  Entity,
  EntityUseItem,
  EventData,
  GameRule,
  System,
  UseMethod,
  TargetSelector,
  Integer,
  EntityDeath,
  EntityCreated,
  GameRuleValue,
  Command,
} from "../minecraft-bedrock-edition/index";
import { commandCallback, log, shuffleArray } from "./utils";
import { DeathSwapItem, DeathSwapState, PlayerState } from "./enums";
import { Player } from "./player";
import { debug } from "../settings";
import { DeathSwapSettings } from "./settings";

export class DeathSwapServer {
  /**
   * `players` contains all players that have joined the world.
   */
  private players: { [id: number]: Player };

  /**
   * `state` stores the current game state.
   */
  private state: DeathSwapState = DeathSwapState.Lobby;

  private settings: DeathSwapSettings = new DeathSwapSettings();

  /**
   * `tickCounter` tracks number of ticks.
   * It is used to help trigger things that need to happen once per second.
   */
  private tickCounter: Integer = 0;

  /**
   * `secondsCounter` track number of seconds.
   * It is used to help trigger the swap and the swap countdown.
   */
  private secondsCounter: Integer = 0;

  /**
   * `isSwapTimerOn` defines whether or not the swap timer is on.
   */
  private isSwapTimerOn = false;

  /**
   * @param {System} system - Minecraft server/client system.
   */
  constructor(public system: System) {
    this.players = {};

    this.setGamerules();
    this.setDifficulty(Difficulty.Hard);

    // need to set this again so that state is set properly
    this.setState(DeathSwapState.Lobby);
  }

  /**
   * `setState` sets the game state.
   *
   * @param {DeathSwapState} state - The state you want the game to switch to.
   */
  private setState(state: DeathSwapState): void {
    switch (state) {
      case DeathSwapState.Lobby:
        this.toggleLobbyState();
        break;
      case DeathSwapState.DeathSwap:
        this.toggleDeathSwapState();
        break;
      case DeathSwapState.GameOver:
        this.toggleGameOverState();
        break;
    }

    this.state = state;
  }

  /**
   * `checkState` handles switching between states depending on current game state and related data.
   */
  private checkState(): void {
    if (this.state === DeathSwapState.Lobby) {
      this.checkLobbyState();
    } else if (this.state === DeathSwapState.DeathSwap) {
      this.checkDeathSwapState();
    }
  }

  /**
   * `checkLobbyState` checks the current state/data, and decides whether or not to promote the game to the Death Swap state.
   */
  private checkLobbyState(): void {
    let ready = true;

    for (const id in this.players) {
      const player = this.players[id];
      if (player.getState() !== PlayerState.Ready) {
        ready = false;
      }
    }

    if (ready) {
      this.setState(DeathSwapState.DeathSwap);
    }
  }

  /**
   * `checkDeathSwapState` checks the current state/data, and decides whether or not to promote the game to the Game Over state.
   */
  private checkDeathSwapState(): void {
    /**
     * `survivingPlayers` contains a list of IDs of the players that have survived all swaps so far
     */
    const survivingPlayers: Array<Integer> = [];

    for (const id in this.players) {
      const player = this.players[id];
      if (player.getState() === PlayerState.DeathSwap) {
        survivingPlayers.push(player.getID());
      }
    }

    // if there's only one player left, they won!
    if (survivingPlayers.length === 1) {
      this.setState(DeathSwapState.GameOver);

      const winningPlayer: Player = this.players[survivingPlayers[0]];
      winningPlayer.setState(PlayerState.Spectating);
      this.displayTitle(`${winningPlayer.getName()} wins the game!`);
    }

    if (survivingPlayers.length === 0) {
      this.displayTitle(`Everyone died... no winner!`);
    }
  }

  /**
   * `toggleLobbyState` handles prepping the player for the Lobby state.
   */
  private toggleLobbyState(): void {
    // check that we came from the previous state
    if (
      !this.isState(DeathSwapState.GameOver) &&
      !this.isState(DeathSwapState.Lobby) // this is needed because the default Death Swap state when first spawned is Lobby
    ) {
      return;
    }
  }

  /**
   * `toggleDeathSwapState` handles prepping the player for the Death Swap state.
   */
  private toggleDeathSwapState(): void {
    // check that we came from the previous state
    if (!this.isState(DeathSwapState.Lobby)) {
      return;
    }

    this.setAllPlayersState(PlayerState.DeathSwap);
    this.startSwapTimer();
    this.displayTitle("Death Swap... BEGINS!!");
  }

  /**
   * `toggleGameOverState` handles prepping the player for the Game Over state.
   */
  private toggleGameOverState(): void {
    // check that we came from the previous state
    if (!this.isState(DeathSwapState.DeathSwap)) {
      return;
    }

    this.stopSwapTimer();
    this.displayTitle("GAME OVER");
  }

  /**
   * `isState` returns true if the player's state matches the given state; false otherwise.
   *
   * @param {DeathSwapState} state - The state that the game should currently be in.
   */
  private isState(state: DeathSwapState): boolean {
    if (this.state === state) {
      return true;
    }

    if (debug) {
      log(
        this.system,
        `Incorrect Death Swap State - Expected: ${state} - Got: ${this.state}`
      );
    }
    return false;
  }

  /**
   * `addPlayer` adds a newly joined player to Death Swap.
   *
   * @param {Entity} playerData - The data that defines the incoming player.
   */
  private addPlayer(playerData: Entity): void {
    const player = new Player(this.system, playerData);
    this.players[player.getID()] = player;

    log(this.system, `${player.getName()} joined the game!`);
  }

  /**
   * `removePlayer` removes the given player from Death Swap.
   *
   * @param {Integer} id - The ID of the player to remove from the game.
   */
  private removePlayer(id: Integer): void {
    delete this.players[id];
  }

  /**
   * `playerExists` returns true if player exists.
   *
   * @param {Integer} id - The player ID to check.
   * @return {boolean}
   */
  private playerExists(id: Integer): boolean {
    return Object.prototype.hasOwnProperty.call(this.players, id);
  }

  /**
   * `setPlayerState` sets a player state by ID.
   *
   * @param {Integer} id - The ID of the player to set the state of.
   * @param {PlayerState} state - The state to set the player to.
   */
  private setPlayerState(id: Integer, state: PlayerState): void {
    this.players[id].setState(state);
    this.checkState();
  }

  /**
   * `setAllPlayersState` sets all players to a given state.
   * @param {PlayerState} state - The state to set the players to.
   */
  private setAllPlayersState(state: PlayerState): void {
    for (const id in this.players) {
      this.players[id].setState(state);
    }
    this.checkState();
  }

  /**
   * `swapTwoPlayerPositions` swaps the positions of two players.
   *
   * @param {Integer} id1 - The ID of the player to swap.
   * @param {Integer} id2 - The ID of the player that the `id1` player will swap to.
   */
  private swapTwoPlayerPositions(id1: Integer, id2: Integer): void {
    const playerToSwap = this.players[id1];
    const destinationPlayer = this.players[id2];

    playerToSwap.teleport(
      destinationPlayer.getCachedPosition(),
      destinationPlayer.getCachedRotation()
    );
  }

  /**
   * `setDifficulty` sets the game's difficulty.
   *
   * @param {Difficulty} difficulty - The difficulty to set the game to.
   */
  private setDifficulty(difficulty: Difficulty): void {
    this.system.executeCommand(
      `${Command.Difficulty} ${difficulty}`,
      (commandResult: CommandResult) =>
        commandCallback(this.system, commandResult)
    );
  }

  /**
   * `setGamerules` overwrites the Minecraft world settings to the values necessary to run a clean, cheat-free, smooth Death Swap game.
   */
  private setGamerules(): void {
    const gamerules: Array<{ rule: GameRule; value: GameRuleValue }> = [
      {
        rule: GameRule.CommandBlocksEnabled,
        value: this.settings.CommandBlocksEnabled,
      },
      {
        rule: GameRule.CommandBlockOutput,
        value: this.settings.CommandBlockOutput,
      },
      {
        rule: GameRule.DoDaylightCycle,
        value: this.settings.DoDaylightCycle,
      },
      {
        rule: GameRule.DoEntityDrops,
        value: this.settings.DoEntityDrops,
      },
      {
        rule: GameRule.DoFireTick,
        value: this.settings.DoFireTick,
      },
      {
        rule: GameRule.DoInsomnia,
        value: this.settings.DoInsomnia,
      },
      {
        rule: GameRule.DoImmediateRespawn,
        value: this.settings.DoImmediateRespawn,
      },
      {
        rule: GameRule.DoMobLoot,
        value: this.settings.DoMobLoot,
      },
      {
        rule: GameRule.DoMobSpawning,
        value: this.settings.DoMobSpawning,
      },
      {
        rule: GameRule.DoTileDrops,
        value: this.settings.DoTileDrops,
      },
      {
        rule: GameRule.DoWeatherCycle,
        value: this.settings.DoWeatherCycle,
      },
      {
        rule: GameRule.DrowningDamage,
        value: this.settings.DrowningDamage,
      },
      {
        rule: GameRule.FallDamage,
        value: this.settings.FallDamage,
      },
      {
        rule: GameRule.FireDamage,
        value: this.settings.FireDamage,
      },
      {
        rule: GameRule.KeepInventory,
        value: this.settings.KeepInventory,
      },
      {
        rule: GameRule.MaxCommandChainLength,
        value: this.settings.MaxCommandChainLength,
      },
      {
        rule: GameRule.MobGriefing,
        value: this.settings.MobGriefing,
      },
      {
        rule: GameRule.NaturalRegeneration,
        value: this.settings.NaturalRegeneration,
      },
      {
        rule: GameRule.Pvp,
        value: this.settings.Pvp,
      },
      {
        rule: GameRule.RandomTickSpeed,
        value: this.settings.RandomTickSpeed,
      },
      {
        rule: GameRule.SendCommandFeedback,
        value: this.settings.SendCommandFeedback,
      },
      {
        rule: GameRule.ShowCoordinates,
        value: this.settings.ShowCoordinates,
      },
      {
        rule: GameRule.ShowDeathMessages,
        value: this.settings.ShowDeathMessages,
      },
      {
        rule: GameRule.SpawnRadius,
        value: this.settings.SpawnRadius,
      },
      {
        rule: GameRule.TntExplodes,
        value: this.settings.TntExplodes,
      },
      {
        rule: GameRule.ShowTags,
        value: this.settings.ShowTags,
      },
    ];

    for (let i: Integer = 0; i < gamerules.length; i++) {
      this.setGamerule(gamerules[i].rule, gamerules[i].value.toString());
    }
  }

  /**
   * `setGamerule` sets a gamerule.
   */
  private setGamerule(rule: GameRule, value: string): void {
    this.system.executeCommand(
      `${Command.Gamerule} ${rule} ${value}`,
      (commandResult: CommandResult) =>
        commandCallback(this.system, commandResult)
    );
  }

  /**
   * `displayTitle` displays a large message across every player's screen.
   *
   * @param {string} title - The message to display.
   */
  private displayTitle(title: string): void {
    this.system.executeCommand(
      `${Command.Title} ${TargetSelector.EveryPlayer} title ${title}`,
      (commandResult: CommandResult) =>
        commandCallback(this.system, commandResult)
    );
  }

  /**
   * `startSwapTimer` starts the timer that triggers the next swap.
   */
  private startSwapTimer(): void {
    this.isSwapTimerOn = true;
    this.secondsCounter = 0;
  }

  /**
   * `stopSwapTimer` stops the timer that triggers the next swap.
   */
  private stopSwapTimer(): void {
    this.isSwapTimerOn = false;
    this.secondsCounter = 0;
  }

  /**
   * `swap` handles swapping all players still in the game.
   */
  private swap(): void {
    log(this.system, "Swapping!");

    // contains all players who have survived all death swaps
    const survivingPlayersById: Array<Integer> = [];

    for (const id in this.players) {
      const player = this.players[id];
      if (player.getState() === PlayerState.DeathSwap) {
        // store all IDs from players who have survived all death swaps
        survivingPlayersById.push(player.getID());

        // cache the player's position/rotation for later, so their swap buddy knows where to teleport to and where to look
        player.savePositionToCache();
        player.saveRotationToCache();
      }
    }

    // randomize order
    shuffleArray(survivingPlayersById);

    // teleport the players
    for (let i = 0; i < survivingPlayersById.length; i++) {
      // the index of the first ID we want to pull
      const index1 = i;

      // the index of the second ID we want to pull, but make sure it isn't outside the bounds of the array
      // if it is, make the last player in the array swap with the first player, completing the loop
      const index2 =
        index1 + 1 > survivingPlayersById.length - 1 ? 0 : index1 + 1;

      // swap them
      this.swapTwoPlayerPositions(
        survivingPlayersById[index1],
        survivingPlayersById[index2]
      );
    }
  }

  /**
   * `update` is called by this.system.update.
   * It ticks 20 times per second.
   */
  public update(): void {
    this.tickCounter++;

    if (this.tickCounter === 20) {
      this.tickCounter = 0;

      this.updateOncePerSecond();
    }
  }

  /**
   * `updateOncePerSecond` ticks once per second
   */
  public updateOncePerSecond(): void {
    // handles the death swap
    if (this.isSwapTimerOn) {
      this.secondsCounter++;

      /**
       * `secondsLeftBeforeSwap` defines how much time, in seconds, is left before the next swap occurs.
       */
      const secondsLeftBeforeSwap =
        this.settings.secondsBetweenSwap - this.secondsCounter;

      // if no time left, trigger the swap
      if (secondsLeftBeforeSwap === 0) {
        this.secondsCounter = 0;

        this.swap();
      }

      // when there's a little time left before the next swap, display a countdown timer
      if (
        secondsLeftBeforeSwap <= this.settings.countdownTime &&
        secondsLeftBeforeSwap !== 0
      ) {
        log(this.system, `Swapping in ${secondsLeftBeforeSwap} seconds!`);
      }
    }

    // update all players
    for (const id in this.players) {
      this.players[id].updateOncePerSecond();
    }
  }

  /**
   * `onEntityCreated` handles the 'minecraft:entity_created' event.
   *
   * @param {EventData} eventData - The event data.
   */
  public onEntityCreated(eventData: EventData): void {
    const entityCreated: EntityCreated = eventData.data as EntityCreated;

    if (entityCreated.entity.__identifier__ === "minecraft:player") {
      this.addPlayer(entityCreated.entity);
    }
  }

  /**
   * `onEntityUseItem` handles the 'minecraft:entity_use_item' event.
   *
   * @param {EventData} eventData - The event data.
   */
  public onEntityUseItem(eventData: EventData): void {
    const entityUseItem: EntityUseItem = eventData.data as EntityUseItem;
    if (entityUseItem.use_method === UseMethod.Eat) {
      if (entityUseItem.item_stack.item === DeathSwapItem.BloodChaliceFull) {
        this.setPlayerState(entityUseItem.entity.id, PlayerState.Ready);
      }
    }
  }

  /**
   * `onEntityDeath` handles the 'minecraft:entity_use_item' event.
   *
   * @param {EventData} eventData - The event data.
   */
  public onEntityDeath(eventData: EventData): void {
    const entityDeath: EntityDeath = eventData.data as EntityDeath;

    // if player, set them to spectate and check state to see who else is alive
    if (this.playerExists(entityDeath.entity.id)) {
      this.setPlayerState(entityDeath.entity.id, PlayerState.Spectating);
      this.checkState();
    }
  }
}
