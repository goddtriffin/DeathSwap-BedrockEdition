import { Gamemode, System } from '../minecraft-bedrock-edition/index';
import { commandCallback, log } from '../shared/utils';
import { PlayerState } from './enums';

export class Player {
    data: any;
    state: PlayerState = PlayerState.LOBBY;

	constructor(public system: System, playerData: any) {
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

	setGamemode(gamemode: Gamemode): void {
		this.system.executeCommand(`/gamemode ${gamemode} "${this.getName()}"`, (commandResultData: any) => commandCallback(this.system, commandResultData));
	}

	emptyInventory(): void {
		this.system.executeCommand(`/clear "${this.getName()}"`, (commandResultData: any) => commandCallback(this.system, commandResultData));
	}

	resetInventory(): void {
		this.emptyInventory();

		this.system.executeCommand(`/give "${this.getName()}" deathswap:blood_chalice_full`, (commandResultData: any) => commandCallback(this.system, commandResultData));
	}
}
