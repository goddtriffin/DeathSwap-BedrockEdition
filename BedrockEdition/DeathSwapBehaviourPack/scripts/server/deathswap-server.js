const systemServer = server.registerSystem(0, 0);

const debug = true;

systemServer.initialize = function() {
    if (debug) {
        const scriptLoggerConfig = this.createEventData("minecraft:script_logger_config");
        scriptLoggerConfig.data.log_errors = true;
        scriptLoggerConfig.data.log_information = true;
        scriptLoggerConfig.data.log_warnings = true;
        this.broadcastEvent("minecraft:script_logger_config", scriptLoggerConfig);
    }

    // listen for events
    this.listenForEvent("DeathSwap:client_entered_world", (eventData) => this.onClientEnteredWorld(eventData));
};

systemServer.update = function() {};

systemServer.shutdown = function() {};

systemServer.onClientEnteredWorld = function(eventData) {
    const clientNameable = this.getComponent(eventData.data.player, "minecraft:nameable");
    this.log(`${clientNameable.data.name} joined the game!`);

    const clientPosition = this.getComponent(eventData.data.player, "minecraft:position");
    this.log(`${clientNameable.data.name} is at position x=${clientPosition.data.x} y=${clientPosition.data.y} z=${clientPosition.data.z}`);
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
