const systemServer = server.registerSystem(0, 0);

const debug = true;

class Player {
	constructor(playerData) {
		this.data = playerData;
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
}

class DeathSwap {
	constructor() {
		this.players = {};
	}

	addPlayer(playerData) {
		const player = new Player(playerData);
		this.players[player.getID()] = player;

		systemServer.log(`${player.getName()} joined the game!`);
	}

	removePerson(id) {
		delete this.players[id]
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
	this.deathSwap = new DeathSwap()

    // listen for events
    this.listenForEvent("DeathSwap:client_entered_world", (eventData) => this.onClientEnteredWorld(eventData));
};

systemServer.update = function() {};

systemServer.shutdown = function() {};

systemServer.onClientEnteredWorld = function(eventData) {
    this.deathSwap.addPlayer(eventData.data.player);
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
				const object = Object.keys(item).map(key => `${key}: ${toString(item[key])}`);
				return `{${object.join(', ')}}`;
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
