'use strict';

import { GamemodeStates, PlayerStates } from '../shared/base';

class Player {
    data: any;
    state: any;

	constructor(public system: any, playerData: any) {
        this.system = system;
		this.data = playerData;

		this.setState(PlayerStates.LOBBY);
	}

	getID() {
		return this.data.id;
	}

	getName() {
		return this.system.getComponent(this.data, "minecraft:nameable").data.name;
	}

	getPosition() {
		return this.system.getComponent(this.data, "minecraft:position").data;
	}

	getRotation() {
		this.system.log(this.system.getComponent(this.data, "minecraft:rotation"));
		return this.system.getComponent(this.data, "minecraft:rotation").data;
	}

	setState(state: any) {
		this.state = state;

		switch (state) {
			case PlayerStates.LOBBY:
				this.setGamemode(GamemodeStates.ADVENTURE);
				this.resetInventory();
				break;
			case PlayerStates.READY:
				this.system.log(`${this.getName()} readied up!`);
				break;
			case PlayerStates.DEATHSWAP:
				this.setGamemode(GamemodeStates.SURVIVAL);
				this.emptyInventory();
				break;
			case PlayerStates.SPECTATING:
				this.setGamemode(GamemodeStates.CREATIVE);
				this.emptyInventory();
				break;
		}
	}

	setGamemode(gamemode: any) {
		this.system.executeCommand(`/gamemode ${gamemode} "${this.getName()}"`, (commandResultData: any) => this.system.commandCallback(commandResultData));
	}

	emptyInventory() {
		this.system.executeCommand(`/clear "${this.getName()}"`, (commandResultData: any) => this.system.commandCallback(commandResultData));
	}

	resetInventory() {
		this.emptyInventory();

		this.system.executeCommand(`/give "${this.getName()}" deathswap:blood_chalice_full`, (commandResultData: any) => this.system.commandCallback(commandResultData));
	}
}

export {
    Player
};
