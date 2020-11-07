import { Server, System } from '../minecraft-bedrock-edition/index';
import { debug } from '../shared/base';
import { DeathSwap } from '../death-swap/index';
import { log } from '../shared/utils';

declare const server: Server;
const systemServer: System = server.registerSystem(0, 0);

let deathSwap: DeathSwap;

systemServer.initialize = function(): void {
    if (debug) {
        const scriptLoggerConfig = this.createEventData("minecraft:script_logger_config");
        scriptLoggerConfig.data.log_errors = true;
        scriptLoggerConfig.data.log_information = true;
        scriptLoggerConfig.data.log_warnings = true;
        this.broadcastEvent("minecraft:script_logger_config", scriptLoggerConfig);
	}
	
	// init vars
	deathSwap = new DeathSwap(this);

    // listen for events
	this.listenForEvent("DeathSwap:client_entered_world", (eventData: any) => deathSwap.onClientEnteredWorld(eventData));
	this.listenForEvent("minecraft:entity_use_item", (eventData: any) => deathSwap.onEntityUseItem(eventData));
};

systemServer.update = function(): void {};

systemServer.shutdown = function(): void {};
