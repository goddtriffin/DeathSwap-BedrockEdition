'use strict';

import { DifficultyStates, DeathSwapStates, PlayerStates } from '../shared/base';
import { Player } from '../shared/player';

class DeathSwap {
    players: { [key: string]: Player };
    state: any;

	constructor(public system: any) {
        this.system = system;
        this.players = {};

		this.setGamerules();
		this.setDifficulty(DifficultyStates.HARD);

		this.setState(DeathSwapStates.LOBBY);
	}

	setState(state: any) {
		this.state = state;

		switch (state) {
			case DeathSwapStates.LOBBY:
				break;
			case DeathSwapStates.DEATHSWAP:
				this.displayTitle("Death Swap... BEGINS!!");
				break;
			case DeathSwapStates.GAMEOVER:
				break;
		}
	}

	checkState() {
		if (this.state === DeathSwapStates.LOBBY) {
            let ready = true;

            for (const id in this.players) {
                const player = this.players[id];
                if (player.state !== PlayerStates.READY) {
					ready = false;
				}
            }

			if (ready) {
				this.setState(DeathSwapStates.DEATHSWAP);
			}
		} else if (this.state === DeathSwapStates.DEATHSWAP) {

		} else if (this.state === DeathSwapStates.GAMEOVER) {

		}
	}

	addPlayer(playerData: any) {
		const player = new Player(this.system, playerData);
		this.players[player.getID()] = player;

		this.system.log(`${player.getName()} joined the game!`);
	}

	removePlayer(id: any) {
		delete this.players[id];
	}

	readyPlayer(id: any) {
		this.players[id].setState(PlayerStates.READY);

		this.checkState();
	}

	setDifficulty(difficulty: any) {
		this.system.executeCommand(`/difficulty ${difficulty}`, (commandResultData: any) => this.system.commandCallback(commandResultData));
	}

	setGamerules() {
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

	displayTitle(title: string) {
		this.system.executeCommand(`/title @a title ${title}`, (commandResultData: any) => this.system.commandCallback(commandResultData));
	}
}

export {
    DeathSwap
};
