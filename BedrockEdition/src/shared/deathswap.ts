'use strict';

import { Difficulty } from '../shared/minecraft-bedrock-edition'
import { DeathSwapState, PlayerState } from '../shared/base';
import { Player } from '../shared/player';

class DeathSwap {
    players: { [id: string]: Player };
    state: DeathSwapState = DeathSwapState.LOBBY;

	constructor(public system: any) {
        this.players = {};

		this.setGamerules();
        this.setDifficulty(Difficulty.HARD);
        
        // need to set this again so that state is set properly
        this.setState(DeathSwapState.LOBBY);
	}

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

	addPlayer(playerData: any): void {
		const player = new Player(this.system, playerData);
		this.players[player.getID()] = player;

		this.system.log(`${player.getName()} joined the game!`);
	}

	removePlayer(id: any): void {
		delete this.players[id];
	}

	readyPlayer(id: any): void {
		this.players[id].setState(PlayerState.READY);

		this.checkState();
	}

	setDifficulty(difficulty: Difficulty): void {
		this.system.executeCommand(`/difficulty ${difficulty}`, (commandResultData: any) => this.system.commandCallback(commandResultData));
	}

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
            this.system.executeCommand(gamerule, (commandResultData: any) => this.system.commandCallback(commandResultData));
        }
	}

	displayTitle(title: string): void {
		this.system.executeCommand(`/title @a title ${title}`, (commandResultData: any) => this.system.commandCallback(commandResultData));
	}
}

export {
    DeathSwap
};
