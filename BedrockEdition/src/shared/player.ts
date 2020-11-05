'use strict';

import { Gamemode } from '../shared/minecraft-bedrock-edition'
import { PlayerState } from '../shared/base';

class Player {
    data: any;
    state: PlayerState = PlayerState.LOBBY;

	constructor(public system: any, playerData: any) {
        this.data = playerData;
        
        // need to set this again so that state is set properly
        this.setState(PlayerState.LOBBY);
	}

	getID(): any {
		return this.data.id;
	}

	getName(): string {
		return this.system.getComponent(this.data, "minecraft:nameable").data.name;
	}

	getPosition(): any {
		return this.system.getComponent(this.data, "minecraft:position").data;
	}

	getRotation(): any {
		this.system.log(this.system.getComponent(this.data, "minecraft:rotation"));
		return this.system.getComponent(this.data, "minecraft:rotation").data;
	}

	setState(state: PlayerState): void {
		this.state = state;

		switch (state) {
			case PlayerState.LOBBY:
				this.setGamemode(Gamemode.ADVENTURE);
				this.resetInventory();
				break;
			case PlayerState.READY:
				this.system.log(`${this.getName()} readied up!`);
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

	setGamemode(gamemode: Gamemode): void {
		this.system.executeCommand(`/gamemode ${gamemode} "${this.getName()}"`, (commandResultData: any) => this.system.commandCallback(commandResultData));
	}

	emptyInventory(): void {
		this.system.executeCommand(`/clear "${this.getName()}"`, (commandResultData: any) => this.system.commandCallback(commandResultData));
	}

	resetInventory(): void {
		this.emptyInventory();

		this.system.executeCommand(`/give "${this.getName()}" deathswap:blood_chalice_full`, (commandResultData: any) => this.system.commandCallback(commandResultData));
	}
}

export {
    Player
};
