const systemClient = client.registerSystem(0, 0);

const debug = true;

systemClient.initialize = function() {
    if (debug) {
        const scriptLoggerConfig = this.createEventData("minecraft:script_logger_config");
        scriptLoggerConfig.data.log_errors = true;
        scriptLoggerConfig.data.log_information = true;
        scriptLoggerConfig.data.log_warnings = true;
        this.broadcastEvent("minecraft:script_logger_config", scriptLoggerConfig);
    }

    // register event data
    this.registerEventData("DeathSwap:client_entered_world", {});

    // listen for events
    this.listenForEvent("minecraft:client_entered_world", (eventData) => this.onClientEnteredWorld(eventData));
};

systemClient.update = function() {};

systemClient.shutdown = function() {};

systemClient.onClientEnteredWorld = function(eventData) {
    const playerData = this.createEventData("DeathSwap:client_entered_world");
    playerData.data = eventData.data;
    this.broadcastEvent("DeathSwap:client_entered_world", playerData);
};

systemClient.log = function(...items) {
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
