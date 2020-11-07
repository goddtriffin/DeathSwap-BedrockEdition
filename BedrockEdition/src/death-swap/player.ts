import { Gamemode, Rotation, System } from '../minecraft-bedrock-edition/index';
import { commandCallback, log } from './utils';
import { PlayerState } from './enums';

export class Player {
    data: any;
    state: PlayerState = PlayerState.LOBBY;

	/**
     * @param {System} system - Minecraft server/client system.
	 * @param {any} playerData - An object that defines the player.
	 */
	constructor(public system: System, playerData: any) {
        this.data = playerData;
        
        // need to set this again so that state is set properly
        this.setState(PlayerState.LOBBY);
	}

	/**
	 * `getID` returns the ID of the player.
	 * 
     * @return {any}
	 */
	getID(): any {
		return this.data.id;
	}

	/**
	 * `getName` returns the name of the player.
	 * 
     * @return {string}
	 */
	getName(): string {
		return this.system.getComponent(this.data, "minecraft:nameable").data.name;
	}

	/**
	 * `getPosition` returns the position of the player.
	 * 
     * @return {Position}
	 */
	getPosition(): Position {
		return this.system.getComponent(this.data, "minecraft:position").data;
	}

	/**
	 * `getRotation` returns the rotation of the player.
	 * 
     * @return {Rotation}
	 */
	getRotation(): Rotation {
		return this.system.getComponent(this.data, "minecraft:rotation").data;
	}

	/**
	 * `setState` sets the state of the player.
	 * 
     * @param {PlayerState} state - The state you want the player to switch to.
	 */
	setState(state: PlayerState): void {
		this.state = state;

		switch (state) {
			case PlayerState.LOBBY:
				this.setGamemode(Gamemode.ADVENTURE);
				this.resetInventory();
				break;
			case PlayerState.READY:
				log(this.system, `${this.getName()} readied up!`);
				break;
			case PlayerState.DEATHSWAP:
				this.setGamemode(Gamemode.SURVIVAL);
				this.emptyInventory();
				break;
			case PlayerState.SPECTATING:
				this.setGamemode(Gamemode.CREATIVE);
				this.emptyInventory();
				break;
		}
	}

	/**
	 * `setGamemode` sets the gamemode of the player.
	 * 
     * @param {Gamemode} gamemode - The gamemode you want the player to switch to.
	 */
	setGamemode(gamemode: Gamemode): void {
		this.system.executeCommand(`/gamemode ${gamemode} "${this.getName()}"`, (commandResultData: any) => commandCallback(this.system, commandResultData));
	}

	/**
	 * `emptyInventory` clears the player's inventory.
	 */
	emptyInventory(): void {
		this.system.executeCommand(`/clear "${this.getName()}"`, (commandResultData: any) => commandCallback(this.system, commandResultData));
	}

	/**
	 * `resetInventory` clears the player's inventory and gives them a single, filled blood chalice.
	 */
	resetInventory(): void {
		this.emptyInventory();

		this.system.executeCommand(`/give "${this.getName()}" deathswap:blood_chalice_full`, (commandResultData: any) => commandCallback(this.system, commandResultData));
	}
}
