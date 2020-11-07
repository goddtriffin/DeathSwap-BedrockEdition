import { DeathSwapClient } from '../death-swap/index';
import { Client, System } from '../minecraft-bedrock-edition/index';
import { debug } from '../settings';

// attach scripting system to the client threads
declare var client: Client;
const systemClient: System = client.registerSystem(0, 0);

let deathSwapClient: DeathSwapClient;

systemClient.initialize = function(): void {
    if (debug) {
        const scriptLoggerConfig = this.createEventData("minecraft:script_logger_config");
        scriptLoggerConfig.data.log_errors = true;
        scriptLoggerConfig.data.log_information = true;
        scriptLoggerConfig.data.log_warnings = true;
        this.broadcastEvent("minecraft:script_logger_config", scriptLoggerConfig);
    }

    // init vars
	deathSwapClient = new DeathSwapClient(this);

    // register event data
    this.registerEventData("DeathSwap:client_entered_world", {});

    // listen for events
    this.listenForEvent("minecraft:client_entered_world", (eventData: any) => deathSwapClient.onClientEnteredWorld(eventData));
};

systemClient.update = function(): void {};

systemClient.shutdown = function(): void {};
