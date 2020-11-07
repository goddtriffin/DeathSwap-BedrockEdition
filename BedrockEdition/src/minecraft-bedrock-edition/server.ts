import { System } from 'system';

export interface Server {
    registerSystem(majorVersion: number, minorVersion: number): System;

    /**
     * Logging Bindings
     */

    log(message: string): void;
}
