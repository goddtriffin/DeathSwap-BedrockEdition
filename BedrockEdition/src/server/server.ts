'use strict';

import { debug } from '../shared/base';
import { DeathSwap } from '../shared/deathswap';

declare var server: any;

const systemServer = server.registerSystem(0, 0);

systemServer.initialize = function() {
    if (debug) {
        const scriptLoggerConfig = this.createEventData("minecraft:script_logger_config");
        scriptLoggerConfig.data.log_errors = true;
        scriptLoggerConfig.data.log_information = true;
        scriptLoggerConfig.data.log_warnings = true;
        this.broadcastEvent("minecraft:script_logger_config", scriptLoggerConfig);
	}
	
	// init vars
	this.deathSwap = new DeathSwap(this);

    // listen for events
	this.listenForEvent("DeathSwap:client_entered_world", (eventData: any) => this.onClientEnteredWorld(eventData));
	this.listenForEvent("minecraft:entity_use_item", (eventData: any) => this.onEntityUseItem(eventData));
};

systemServer.update = function() {};

systemServer.shutdown = function() {};

systemServer.onClientEnteredWorld = function(eventData: any) {
    this.deathSwap.addPlayer(eventData.data.player);
}

systemServer.onEntityUseItem = function(eventData: any) {
	if (eventData.data.use_method === "eat") {
		if (eventData.data.item_stack.item === "deathswap:blood_chalice_full") {
			this.deathSwap.readyPlayer(eventData.data.entity.id);
		}
	}
}

systemServer.commandCallback = function(eventData: any) {
	if (debug) {
		this.log(`Callback called! Command: ${eventData.command} Data: ${JSON.stringify(eventData.data, null, "    ")}`);
	}
}

systemServer.log = function(...items: any[]) {
	const toString = (item: any) => {
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
