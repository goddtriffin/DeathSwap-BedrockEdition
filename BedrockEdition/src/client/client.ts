import { DeathSwapClient, DeathSwapEventIdentifier } from "../death-swap/index";
import {
  Client,
  EventData,
  EventIdentifier,
  ScriptLoggerConfig,
  System,
} from "../minecraft-bedrock-edition/index";
import { debug } from "../settings";

// attach scripting system to the client threads
declare const client: Client;
const systemClient: System = client.registerSystem(0, 0);

let deathSwapClient: DeathSwapClient;

systemClient.initialize = function (): void {
  if (debug) {
    const scriptLoggerConfig: EventData = this.createEventData(
      EventIdentifier.ScriptLoggerConfig
    ) as EventData;
    (scriptLoggerConfig.data as ScriptLoggerConfig).log_errors = true;
    (scriptLoggerConfig.data as ScriptLoggerConfig).log_information = true;
    (scriptLoggerConfig.data as ScriptLoggerConfig).log_warnings = true;
    this.broadcastEvent(EventIdentifier.ScriptLoggerConfig, scriptLoggerConfig);
  }

  // init vars
  deathSwapClient = new DeathSwapClient(this);

  // register event data
  this.registerEventData(DeathSwapEventIdentifier.ClientEnteredWorld, {});

  // listen for events
  this.listenForEvent(
    EventIdentifier.ClientEnteredWorld,
    (eventData: EventData) => deathSwapClient.onClientEnteredWorld(eventData)
  );
};
