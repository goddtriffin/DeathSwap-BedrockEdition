/**
 * `DeathSwapState` defines the possible game states.
 */
export enum DeathSwapState {
  Lobby = "lobby",
  DeathSwap = "deathswap",
  GameOver = "gameover",
}

/**
 * `PlayerState` defines the possible players states.
 */
export enum PlayerState {
  Lobby = "lobby",
  Ready = "ready",
  DeathSwap = "deathswap",
  Spectating = "spectating",
}

/**
 * `DeathSwapEventIdentifier` defines the possible events that can be sent between client and server.
 */
export enum DeathSwapEventIdentifier {
  ClientEnteredWorld = "DeathSwap:client_entered_world",
}

/**
 * `DeathSwapItem` defines all possible items.
 */
export enum DeathSwapItem {
  BloodChaliceFull = "deathswap:blood_chalice_full",
  BloodChaliceEmpty = "deathswap:blood_chalice_empty",
}
