'use strict';

const debug: boolean = true;

enum DifficultyStates {
    PEACEFUL,
    EASY,
    NORMAL,
    HARD
}

enum GamemodeStates {
    SURVIVAL,
    CREATIVE,
    ADVENTURE
}

enum DeathSwapStates {
    LOBBY,
    DEATHSWAP,
    GAMEOVER
}

enum PlayerStates {
    LOBBY,
    READY,
    DEATHSWAP,
    SPECTATING
}

export {
    debug,

    DifficultyStates,
    GamemodeStates,

    DeathSwapStates,
    PlayerStates
};
