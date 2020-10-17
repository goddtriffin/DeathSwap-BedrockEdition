const systemServer = server.registerSystem(0, 0);

const debug = false;

const PlayerStates = Object.freeze({"LOBBY":0, "READY":1, "DEATHSWAP":2, "SPECTATING":3});
const GamemodeStates = Object.freeze({"SURVIVAL":0,"CREATIVE":1,"ADVENTURE":2});

class Player {
	constructor(playerData) {
		this.data = playerData;

		this.setState(PlayerStates.LOBBY);
	}

	getID() {
		return this.data.id;
	}

	getName() {
		return systemServer.getComponent(this.data, "minecraft:nameable").data.name;
	}

	getPosition() {
		return systemServer.getComponent(this.data, "minecraft:position").data;
	}

	getRotation() {
		systemServer.log(systemServer.getComponent(this.data, "minecraft:rotation"));
		return systemServer.getComponent(this.data, "minecraft:rotation").data;
	}

	setState(state) {
		this.state = state;

		switch (state) {
			case PlayerStates.LOBBY:
				this.setGamemode(GamemodeStates.ADVENTURE);
				this.resetInventory();
				break;
			case PlayerStates.READY:
				systemServer.log(`${this.getName()} readied up!`);
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

	setGamemode(gamemode) {
		systemServer.executeCommand(`/gamemode ${gamemode} "${this.getName()}"`, (commandResultData) => systemServer.commandCallback(commandResultData));
	}

	emptyInventory() {
		systemServer.executeCommand(`/clear "${this.getName()}"`, (commandResultData) => systemServer.commandCallback(commandResultData));
	}

	resetInventory() {
		this.emptyInventory();

		systemServer.executeCommand(`/give "${this.getName()}" deathswap:blood_chalice_full`, (commandResultData) => systemServer.commandCallback(commandResultData));
	}
}

const DeathSwapStates = Object.freeze({"LOBBY":0, "DEATHSWAP":1, "GAMEOVER":2});
const DifficultyStates = Object.freeze({"PEACEFUL":0,"EASY":1,"NORMAL":2,"HARD":3});

class DeathSwap {
	constructor() {
		this.players = {};

		this.setGamerules();
		this.setDifficulty(DifficultyStates.HARD);

		this.setState(DeathSwapStates.LOBBY);
	}

	setState(state) {
		this.state = state;

		switch (state) {
			case DeathSwapStates.LOBBY:
				this.setPvP(false);
				break;
			case DeathSwapStates.DEATHSWAP:
				this.setPvP(true);
				this.displayTitle("Death Swap... BEGINS!!");
				break;
			case DeathSwapStates.GAMEOVER:
				this.setPvP(true);
				break;
		}
	}

	checkState() {
		if (this.state === DeathSwapStates.LOBBY) {
			let ready = true;
			for (const [id, player] of Object.entries(this.players)) {
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

	addPlayer(playerData) {
		const player = new Player(playerData);
		this.players[player.getID()] = player;

		systemServer.log(`${player.getName()} joined the game!`);
	}

	removePlayer(id) {
		delete this.players[id];
	}

	readyPlayer(id) {
		this.players[id].setState(PlayerStates.READY);

		this.checkState();
	}

	setDifficulty(difficulty) {
		systemServer.executeCommand(`/difficulty ${difficulty}`, (commandResultData) => systemServer.commandCallback(commandResultData));
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
			`/gamerule sendCommandFeedback false`,
			`/gamerule showCoordinates false`,
			`/gamerule showDeathMessages true`,
			`/gamerule tntExplodes true`,
		];

		gamerules.forEach(function(gamerule) {
			systemServer.executeCommand(gamerule, (commandResultData) => systemServer.commandCallback(commandResultData));
		});
	}

	setPvP(state) {
		systemServer.executeCommand(`/gamerule pvp ${state}`, (commandResultData) => systemServer.commandCallback(commandResultData));
	}

	displayTitle(title) {
		systemServer.executeCommand(`/title @a title ${title}`, (commandResultData) => systemServer.commandCallback(commandResultData));
	}
}

systemServer.initialize = function() {
    if (debug) {
        const scriptLoggerConfig = this.createEventData("minecraft:script_logger_config");
        scriptLoggerConfig.data.log_errors = true;
        scriptLoggerConfig.data.log_information = true;
        scriptLoggerConfig.data.log_warnings = true;
        this.broadcastEvent("minecraft:script_logger_config", scriptLoggerConfig);
	}
	
	// init vars
	this.deathSwap = new DeathSwap();

    // listen for events
	this.listenForEvent("DeathSwap:client_entered_world", (eventData) => this.onClientEnteredWorld(eventData));
	this.listenForEvent("minecraft:entity_use_item", (eventData) => this.onEntityUseItem(eventData));
};

systemServer.update = function() {};

systemServer.shutdown = function() {};

systemServer.onClientEnteredWorld = function(eventData) {
    this.deathSwap.addPlayer(eventData.data.player);
}

systemServer.onEntityUseItem = function(eventData) {
	if (eventData.data.use_method === "eat") {
		if (eventData.data.item_stack.item === "deathswap:blood_chalice_full") {
			this.deathSwap.readyPlayer(eventData.data.entity.id);
		}
	}
}

systemServer.commandCallback = function(eventData) {
	if (debug) {
		this.log(`Callback called! Command: ${eventData.command} Data: ${JSON.stringify(eventData.data, null, "    ")}`);
	}
}

systemServer.log = function(...items) {
	const toString = item => {
		switch(Object.prototype.toString.call(item)) {
			case '[object Undefined]':
				return 'undefined';
			case '[object Null]':
				return 'null';
			case '[object String]':
				return `"${item}"`;
			case '[object Array]':
				const array = item.map(toString);
				return `[${array.join(', ')}]`;
			case '[object Object]':
				return JSON.stringify(item, null, "    ");
			case '[object Function]':
				return item.toString();
			default:
				return item;
		}
    }
    
    const chatEvent = this.createEventData("minecraft:display_chat_event");
    chatEvent.data.message = items.map(toString).join(' ');
    this.broadcastEvent("minecraft:display_chat_event", chatEvent);
}
