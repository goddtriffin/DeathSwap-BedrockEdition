'use strict';

const debug: boolean = true;

enum DeathSwapState {
    LOBBY,
    DEATHSWAP,
    GAMEOVER
}

enum PlayerState {
    LOBBY,
    READY,
    DEATHSWAP,
    SPECTATING
}

export {
    debug,

    DeathSwapState,
    PlayerState
};
