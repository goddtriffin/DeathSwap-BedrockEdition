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
import { debug, GameRuleSetting } from "../settings";

export class DeathSwapServer {
  players: { [id: number]: Player };
  state: DeathSwapState = DeathSwapState.Lobby;

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
  setState(state: DeathSwapState): void {
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
  checkState(): void {
    if (this.state === DeathSwapState.Lobby) {
      let ready = true;

      for (const id in this.players) {
        const player = this.players[id];
        if (player.state !== PlayerState.Ready) {
          ready = false;
        }
      }

      if (ready) {
        this.setState(DeathSwapState.DeathSwap);
      }
    } else if (this.state === DeathSwapState.DeathSwap) {
      // TODO
    } else if (this.state === DeathSwapState.GameOver) {
      // TODO
    }
  }

  /**
   * `toggleLobbyState` handles prepping the player for the Lobby state.
   */
  toggleLobbyState(): void {
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
  toggleDeathSwapState(): void {
    // check that we came from the previous state
    if (!this.isState(DeathSwapState.Lobby)) {
      return;
    }

    this.setAllPlayersState(PlayerState.DeathSwap);
    this.displayTitle("Death Swap... BEGINS!!");
  }

  /**
   * `toggleGameOverState` handles prepping the player for the Game Over state.
   */
  toggleGameOverState(): void {
    // check that we came from the previous state
    if (!this.isState(DeathSwapState.DeathSwap)) {
      return;
    }
  }

  /**
   * `isState` returns true if the player's state matches the given state; false otherwise.
   */
  isState(state: DeathSwapState): boolean {
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
  addPlayer(playerData: Entity): void {
    const player = new Player(this.system, playerData);
    this.players[player.getID()] = player;

    log(this.system, `${player.getName()} joined the game!`);
  }

  /**
   * `removePlayer` removes the given player from Death Swap.
   *
   * @param {number} id - The ID of the player to remove from the game.
   */
  removePlayer(id: number): void {
    delete this.players[id];
  }

  /**
   * `setPlayerState` sets a player state by ID.
   *
   * @param {number} id - The ID of the player to set the state of.
   */
  setPlayerState(id: number, state: PlayerState): void {
    this.players[id].setState(state);
    this.checkState();
  }

  /**
   * `setAllPlayersState` sets all players to a given state.
   */
  setAllPlayersState(state: PlayerState): void {
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
  setDifficulty(difficulty: Difficulty): void {
    this.system.executeCommand(
      `/difficulty ${difficulty}`,
      (commandResult: CommandResult) =>
        commandCallback(this.system, commandResult)
    );
  }

  /**
   * `setGamerules` overwrites the Minecraft world settings to the values necessary to run a clean, cheat-free, smooth Death Swap game.
   */
  setGamerules(): void {
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
  setGamerule(rule: GameRule, value: GameRuleSetting): void {
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
  displayTitle(title: string): void {
    this.system.executeCommand(
      `/title ${TargetSelector.EveryPlayer} title ${title}`,
      (commandResult: CommandResult) =>
        commandCallback(this.system, commandResult)
    );
  }

  /**
   * `onClientEnteredWorld` handles the 'DeathSwap:client_entered_world' event.
   *
   * @param {EventData} eventData - The event data.
   */
  onClientEnteredWorld(eventData: EventData): void {
    // TODO check the actual value of eventData.data here and create a type/interface for it if it doesn't exist
    const player: Entity = (eventData.data as { player: Entity }).player;
    this.addPlayer(player);
  }

  /**
   * `onEntityUseItem` handles the 'minecraft:entity_use_item' event.
   *
   * @param {EventData} eventData - The event data.
   */
  onEntityUseItem(eventData: EventData): void {
    const entityUseItem: EntityUseItem = eventData.data as EntityUseItem;
    if (entityUseItem.use_method === UseMethod.Eat) {
      if (entityUseItem.item_stack.item === DeathSwapItem.BloodChaliceFull) {
        this.setPlayerState(entityUseItem.entity.id, PlayerState.Ready);
      }
    }
  }
}
