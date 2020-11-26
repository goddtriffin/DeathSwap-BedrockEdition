import {
  EventData,
  EventIdentifier,
  ScriptLoggerConfig,
  Server,
  System,
} from "../minecraft-bedrock-edition/index";
import { debug } from "../settings";
import { DeathSwapEventIdentifier, DeathSwapServer } from "../death-swap/index";

// attach scripting system to the server threads
declare const server: Server;
const systemServer: System = server.registerSystem(0, 0);

let deathSwapServer: DeathSwapServer;

systemServer.initialize = function (): void {
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
  deathSwapServer = new DeathSwapServer(this);

  // listen: client entered world
  this.listenForEvent(
    DeathSwapEventIdentifier.ClientEnteredWorld,
    (eventData: EventData) => deathSwapServer.onClientEnteredWorld(eventData)
  );

  // listen: entity used item
  this.listenForEvent(EventIdentifier.EntityUseItem, (eventData: EventData) =>
    deathSwapServer.onEntityUseItem(eventData)
  );

  // listen: entity death
  this.listenForEvent(EventIdentifier.EntityDeath, (eventData: EventData) =>
    deathSwapServer.onEntityDeath(eventData)
  );
};

systemServer.update = function (): void {
  deathSwapServer.update();
};
