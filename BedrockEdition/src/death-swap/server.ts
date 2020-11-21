import { Difficulty, System } from '../minecraft-bedrock-edition/index';
import { commandCallback, log } from './utils';
import { DeathSwapState, PlayerState } from './enums';
import { Player } from './player';

export class DeathSwapServer {
    players: { [id: string]: Player };
    state: DeathSwapState = DeathSwapState.LOBBY;

	/**
   * @param {System} system - Minecraft server/client system.
	 */
	constructor(public system: System) {
        this.players = {};

				this.setGamerules();
        this.setDifficulty(Difficulty.HARD);

        // need to set this again so that state is set properly
        this.setState(DeathSwapState.LOBBY);
	}

	/**
	 * `setState` sets the game state.
	 *
   * @param {DeathSwapState} state - The state you want the game to switch to.
	 */
	setState(state: DeathSwapState): void {
		this.state = state;

		switch (state) {
			case DeathSwapState.LOBBY:
				break;
			case DeathSwapState.DEATHSWAP:
				this.displayTitle("Death Swap... BEGINS!!");
				break;
			case DeathSwapState.GAMEOVER:
				break;
		}
	}

	/**
	 * `checkState` handles switching between states depending on current game state and related data.
	 */
	checkState(): void {
		if (this.state === DeathSwapState.LOBBY) {
            let ready = true;

            for (const id in this.players) {
                const player = this.players[id];
                if (player.state !== PlayerState.READY) {
					ready = false;
				}
            }

			if (ready) {
				this.setState(DeathSwapState.DEATHSWAP);
			}
		} else if (this.state === DeathSwapState.DEATHSWAP) {

		} else if (this.state === DeathSwapState.GAMEOVER) {

		}
	}

	/**
	 * `addPlayer` adds a newly joined player to Death Swap.
	 *
     * @param {any} playerData - The data that defines the incoming player.
	 */
	addPlayer(playerData: any): void {
		const player = new Player(this.system, playerData);
		this.players[player.getID()] = player;

		log(this.system, `${player.getName()} joined the game!`);
	}

	/**
	 * `removePlayer` removes the given player from Death Swap.
	 *
     * @param {any} id - The ID of the player to remove from the game.
	 */
	removePlayer(id: any): void {
		delete this.players[id];
	}

	/**
	 * `readyPlayer` switches a player's state from LOBBY to READY.
	 *
     * @param {any} id - The ID of the player to ready up.
	 */
	readyPlayer(id: any): void {
		if (this.players[id].state != PlayerState.LOBBY) {
			return;
		}

		this.players[id].setState(PlayerState.READY);
		this.checkState();
	}

	/**
	 * `setDifficulty` sets the game's difficulty.
	 *
     * @param {Difficulty} difficulty - The difficulty to set the game to.
	 */
	setDifficulty(difficulty: Difficulty): void {
		this.system.executeCommand(`/difficulty ${difficulty}`, (commandResultData: any) => commandCallback(this.system, commandResultData));
	}

	/**
	 * `setGamerules` overwrites the Minecraft world settings to the values necessary to run a clean, cheat-free, smooth Death Swap game.
	 */
	setGamerules(): void {
		const gamerules = [
			`/gamerule commandBlocksEnabled false`,
			`/gamerule doDaylightCycle true`,
			`/gamerule doInsomnia false`,
			`/gamerule doImmediateRespawn false`,
			`/gamerule doWeatherCycle true`,
			`/gamerule keepInventory false`,
			`/gamerule mobGriefing true`,
            `/gamerule naturalRegeneration true`,
            `/gamerule pvp false`,
			`/gamerule sendCommandFeedback false`,
			`/gamerule showCoordinates false`,
			`/gamerule showDeathMessages true`,
			`/gamerule tntExplodes true`,
        ];

        for (let i=0; i<gamerules.length; i++) {
            const gamerule = gamerules[i];
            this.system.executeCommand(gamerule, (commandResultData: any) => commandCallback(this.system, commandResultData));
        }
	}

	/**
	 * `displayTitle` displays a large message across every player's screen.
	 *
     * @param {string} title - The message to display.
	 */
	displayTitle(title: string): void {
		this.system.executeCommand(`/title @a title ${title}`, (commandResultData: any) => commandCallback(this.system, commandResultData));
	}

	/**
	 * `onClientEnteredWorld` handles the 'DeathSwap:client_entered_world' event.
	 *
     * @param {any} eventData - The event data.
	 */
	onClientEnteredWorld(eventData: any): void {
		this.addPlayer(eventData.data.player);
	}

	/**
	 * `onEntityUseItem` handles the 'minecraft:entity_use_item' event.
	 *
     * @param {any} eventData - The event data.
	 */
	onEntityUseItem(eventData: any): void {
		if (eventData.data.use_method === "eat") {
			if (eventData.data.item_stack.item === "deathswap:blood_chalice_full") {
				this.readyPlayer(eventData.data.entity.id);
			}
		}
	}
}
