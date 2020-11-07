import { Client, System } from '../minecraft-bedrock-edition/index';
import { debug } from '../shared/base';

declare const client: Client;
const systemClient: System = client.registerSystem(0, 0);

systemClient.initialize = function(): void {
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
    this.listenForEvent("minecraft:client_entered_world", (eventData: any) => onClientEnteredWorld(eventData));
};

systemClient.update = function(): void {};

systemClient.shutdown = function(): void {};

function onClientEnteredWorld(eventData: any): void {
    const playerData = systemClient.createEventData("DeathSwap:client_entered_world");
    playerData.data = eventData.data;
    systemClient.broadcastEvent("DeathSwap:client_entered_world", playerData);
};
