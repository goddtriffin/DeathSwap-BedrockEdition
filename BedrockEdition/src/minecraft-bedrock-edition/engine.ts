export interface Engine {
  /**
   * `on` is used to get events from the UI Engine.
   * These events can be originally sent from client scripts using `send_ui_event`, or created by the game and passed along by the UI Engine.
   * The data sent from scripts to this function must be a string.
   *
   * @param {string} eventIdentifier - Specifies the event that function will react to.
   * @param {{(eventData: object): void;}} callback - The callback that will be called when the event happens.
   */
  on(eventIdentifier: string, callback: { (eventData: any): void }): void;

  /**
   * `trigger` is used to send events to the UI Engine.
   *
   * @param {string} eventIdentifier - Specifies the event that function will react to.
   * @param {any} args - The arguments passed to the callback.
   */
  trigger(eventIdentifier: string, args: any): void;

  /**
   * `triggerEvent` triggers the minecraft:ui_event on client scripts with the provided data.
   *
   * @param {string} data - This string will be sent to "minecraft:ui_event" event in client scripts.
   */
  triggerEvent(data: string): void;
}
