import { Server, System } from '../minecraft-bedrock-edition/index';
import { debug } from '../settings';
import { DeathSwapServer } from '../death-swap/index';

// attach scripting system to the server threads
declare var server: Server;
const systemServer: System = server.registerSystem(0, 0);

let deathSwapServer: DeathSwapServer;

systemServer.initialize = function(): void {
    if (debug) {
        const scriptLoggerConfig = this.createEventData("minecraft:script_logger_config");
        scriptLoggerConfig.data.log_errors = true;
        scriptLoggerConfig.data.log_information = true;
        scriptLoggerConfig.data.log_warnings = true;
        this.broadcastEvent("minecraft:script_logger_config", scriptLoggerConfig);
	}
	
	// init vars
	deathSwapServer = new DeathSwapServer(this);

    // listen for events
	this.listenForEvent("DeathSwap:client_entered_world", (eventData: any) => deathSwapServer.onClientEnteredWorld(eventData));
	this.listenForEvent("minecraft:entity_use_item", (eventData: any) => deathSwapServer.onEntityUseItem(eventData));
};

systemServer.update = function(): void {};

systemServer.shutdown = function(): void {};
