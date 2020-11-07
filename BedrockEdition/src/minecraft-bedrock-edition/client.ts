import { System } from 'system';

export interface Client {
    registerSystem(majorVersion: number, minorVersion: number): System;

    /**
     * Logging Bindings
     */

    log(message: string): void;
}
