'use strict';

const debug: boolean = true;

const DifficultyStates = Object.freeze({"PEACEFUL":0,"EASY":1,"NORMAL":2,"HARD":3});
const GamemodeStates = Object.freeze({"SURVIVAL":0,"CREATIVE":1,"ADVENTURE":2});

const DeathSwapStates = Object.freeze({"LOBBY":0, "DEATHSWAP":1, "GAMEOVER":2});
const PlayerStates = Object.freeze({"LOBBY":0, "READY":1, "DEATHSWAP":2, "SPECTATING":3});


export {
    debug,

    DifficultyStates,
    GamemodeStates,

    DeathSwapStates,
    PlayerStates
};
