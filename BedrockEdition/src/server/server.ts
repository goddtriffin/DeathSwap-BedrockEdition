import { EventData, EventIdentifier, Server, System } from '../minecraft-bedrock-edition/index';
import { debug } from '../settings';
import { DeathSwapEventIdentifier, DeathSwapServer } from '../death-swap/index';

// attach scripting system to the server threads
declare var server: Server;
const systemServer: System = server.registerSystem(0, 0);

let deathSwapServer: DeathSwapServer;

systemServer.initialize = function(): void {
    if (debug) {
        const scriptLoggerConfig = this.createEventData(EventIdentifier.ScriptLoggerConfig);
        scriptLoggerConfig.data.log_errors = true;
        scriptLoggerConfig.data.log_information = true;
        scriptLoggerConfig.data.log_warnings = true;
        this.broadcastEvent(EventIdentifier.ScriptLoggerConfig, scriptLoggerConfig);
	}

	// init vars
	deathSwapServer = new DeathSwapServer(this);

    // listen for events
	this.listenForEvent(DeathSwapEventIdentifier.ClientEnteredWorld, (eventData: EventData) => deathSwapServer.onClientEnteredWorld(eventData));
	this.listenForEvent(EventIdentifier.EntityUseItem, (eventData: EventData) => deathSwapServer.onEntityUseItem(eventData));
};

systemServer.update = function(): void {};

systemServer.shutdown = function(): void {};
