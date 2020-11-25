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
} from "../minecraft-bedrock-edition/index";
import { commandCallback, log } from "./utils";
import { DeathSwapItem, DeathSwapState, PlayerState } from "./enums";
import { Player } from "./player";
import { debug, GameRuleSetting, secondsBetweenSwap } from "../settings";

export class DeathSwapServer {
  private players: { [id: number]: Player };
  private state: DeathSwapState = DeathSwapState.Lobby;

  /**
   * `tickCounter` tracks number of ticks.
   * It is used to help trigger things that need to happen once per second.
   */
  private tickCounter = 0;

  /**
   * `secondsCounter` track number of seconds.
   * It is used to help trigger the swap and the swap countdown.
   */
  private secondsCounter = 0;

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
    } else if (this.state === DeathSwapState.DeathSwap) {
      let numberOfPlayersAlive = 0;

      for (const id in this.players) {
        const player = this.players[id];
        if (player.getState() !== PlayerState.DeathSwap) {
          numberOfPlayersAlive++;
        }
      }

      if (numberOfPlayersAlive === 1) {
        this.setState(DeathSwapState.GameOver);
      }
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
   * @param {number} id - The ID of the player to remove from the game.
   */
  private removePlayer(id: number): void {
    delete this.players[id];
  }

  /**
   * `setPlayerState` sets a player state by ID.
   *
   * @param {number} id - The ID of the player to set the state of.
   */
  private setPlayerState(id: number, state: PlayerState): void {
    this.players[id].setState(state);
    this.checkState();
  }

  /**
   * `setAllPlayersState` sets all players to a given state.
   */
  private setAllPlayersState(state: PlayerState): void {
    for (const id in this.players) {
      this.players[id].setState(state);
    }
    this.checkState();
  }

  /**
   * `setDifficulty` sets the game's difficulty.
   *
   * @param {Difficulty} difficulty - The difficulty to set the game to.
   */
  private setDifficulty(difficulty: Difficulty): void {
    this.system.executeCommand(
      `/difficulty ${difficulty}`,
      (commandResult: CommandResult) =>
        commandCallback(this.system, commandResult)
    );
  }

  /**
   * `setGamerules` overwrites the Minecraft world settings to the values necessary to run a clean, cheat-free, smooth Death Swap game.
   */
  private setGamerules(): void {
    const gamerules = [
      {
        rule: GameRule.CommandBlocksEnabled,
        value: GameRuleSetting.CommandBlocksEnabled,
      },
      {
        rule: GameRule.CommandBlockOutput,
        value: GameRuleSetting.CommandBlockOutput,
      },
      {
        rule: GameRule.DoDaylightCycle,
        value: GameRuleSetting.DoDaylightCycle,
      },
      {
        rule: GameRule.DoEntityDrops,
        value: GameRuleSetting.DoEntityDrops,
      },
      {
        rule: GameRule.DoFireTick,
        value: GameRuleSetting.DoFireTick,
      },
      {
        rule: GameRule.DoInsomnia,
        value: GameRuleSetting.DoInsomnia,
      },
      {
        rule: GameRule.DoImmediateRespawn,
        value: GameRuleSetting.DoImmediateRespawn,
      },
      {
        rule: GameRule.DoMobLoot,
        value: GameRuleSetting.DoMobLoot,
      },
      {
        rule: GameRule.DoMobSpawning,
        value: GameRuleSetting.DoMobSpawning,
      },
      {
        rule: GameRule.DoTileDrops,
        value: GameRuleSetting.DoTileDrops,
      },
      {
        rule: GameRule.DoWeatherCycle,
        value: GameRuleSetting.DoWeatherCycle,
      },
      {
        rule: GameRule.DrowningDamage,
        value: GameRuleSetting.DrowningDamage,
      },
      {
        rule: GameRule.FallDamage,
        value: GameRuleSetting.FallDamage,
      },
      {
        rule: GameRule.FireDamage,
        value: GameRuleSetting.FireDamage,
      },
      {
        rule: GameRule.KeepInventory,
        value: GameRuleSetting.KeepInventory,
      },
      {
        rule: GameRule.MaxCommandChainLength,
        value: GameRuleSetting.MaxCommandChainLength,
      },
      {
        rule: GameRule.MobGriefing,
        value: GameRuleSetting.MobGriefing,
      },
      {
        rule: GameRule.NaturalRegeneration,
        value: GameRuleSetting.NaturalRegeneration,
      },
      {
        rule: GameRule.Pvp,
        value: GameRuleSetting.Pvp,
      },
      {
        rule: GameRule.RandomTickSpeed,
        value: GameRuleSetting.RandomTickSpeed,
      },
      {
        rule: GameRule.SendCommandFeedback,
        value: GameRuleSetting.SendCommandFeedback,
      },
      {
        rule: GameRule.ShowCoordinates,
        value: GameRuleSetting.ShowCoordinates,
      },
      {
        rule: GameRule.ShowDeathMessages,
        value: GameRuleSetting.ShowDeathMessages,
      },
      {
        rule: GameRule.SpawnRadius,
        value: GameRuleSetting.SpawnRadius,
      },
      {
        rule: GameRule.TntExplodes,
        value: GameRuleSetting.TntExplodes,
      },
      {
        rule: GameRule.ShowTags,
        value: GameRuleSetting.ShowTags,
      },
    ];

    for (let i = 0; i < gamerules.length; i++) {
      this.setGamerule(gamerules[i].rule, gamerules[i].value);
    }
  }

  /**
   * `setGamerule` sets a gamerule.
   */
  private setGamerule(rule: GameRule, value: GameRuleSetting): void {
    this.system.executeCommand(
      `/gamerule ${rule} ${value}`,
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
      `/title ${TargetSelector.EveryPlayer} title ${title}`,
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
    log(this.system, "swap");
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
   * `updateOncePerSecond` ticks once per second.
   */
  public updateOncePerSecond(): void {
    // handles the death swap
    if (this.isSwapTimerOn) {
      this.secondsCounter++;

      // should only trigger every so often
      if (this.secondsCounter === secondsBetweenSwap) {
        this.secondsCounter = 0;

        this.swap();
      }
    }
  }

  /**
   * `onClientEnteredWorld` handles the 'DeathSwap:client_entered_world' event.
   *
   * @param {EventData} eventData - The event data.
   */
  public onClientEnteredWorld(eventData: EventData): void {
    // TODO check the actual value of eventData.data here and create a type/interface for it if it doesn't exist
    const player: Entity = (eventData.data as { player: Entity }).player;
    this.addPlayer(player);
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
}
