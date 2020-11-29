/**
 * `Commands` are advanced features activated by typing certain strings of text.
 */
export enum Commands {
  /**
   * `Ability` grants or revokes a player ability.
   */
  Ability = "/ability",

  /**
   * `CameraShake` is used to enable a camera shaking effect.
   */
  CameraShake = "/camerashake",

  /**
   * `Clear` clears items from player inventory.
   */
  Clear = "/clear",

  /**
   * `ClearSpawnPoint` remove spawnpoints in the world.
   */
  ClearSpawnPoint = "/clearspawnpoint",

  /**
   * `Clone` copies blocks from one place to another.
   */
  Clone = "/clone",

  /**
   * `Deop` revokes operator status from a player.
   */
  Deop = "/deop",

  /**
   * `Difficulty` sets the difficulty level.
   */
  Difficulty = "/difficulty",

  /**
   * `Effect` add or remove status effects.
   */
  Effect = "/effect",

  /**
   * `Enchant` enchants a player item.
   */
  Enchant = "/enchant",

  /**
   * `Event` is used to trigger an event on an entity.
   */
  Event = "/event",

  /**
   * `Execute` executes another command.
   */
  Execute = "/execute",

  /**
   * `Experience` adds or removes player experience.
   */
  Experience = "/experience",

  /**
   * `Fill` fills a region with a specific block.
   */
  Fill = "/fill",

  /**
   * `Fog` is used for managing active fog settings for players.
   */
  Fog = "/fog",

  /**
   * `Function` runs a function.
   */
  Function = "/function",

  /**
   * `Gamemode` sets a player's game mode.
   */
  Gamemode = "/gamemode",

  /**
   * `Gamerule` sets or queries a game rule value.
   */
  Gamerule = "/gamerule",

  /**
   * `Give` gives an item to a player.
   */
  Give = "/give",

  /**
   * `Help` provides help for commands.
   */
  Help = "/help",

  /**
   * `Kick` kicks a player off a server.
   */
  Kick = "/kick",

  /**
   * `Kill` kills entities (players, mobs, items, etc.).
   */
  Kill = "/kill",

  /**
   * `List` lists players on the server.
   */
  List = "/list",

  /**
   * `Locate` locates closest structure.
   */
  Locate = "/locate",

  /**
   * `Me` displays a message about the sender.
   */
  Me = "/me",

  /**
   * `Mixer` is used for mixer interactivity control.
   */
  Mixer = "/mixer",

  /**
   * `MobEvent` enables/disables a specified mob event.
   */
  MobEvent = "/mobevent",

  /**
   * `Msg` displays a private message to other players.
   */
  Msg = "/msg",

  /**
   * `Music` allows the player to control playing music tracks.
   */
  Music = "/music",

  /**
   * `Op` grants operator status to a player.
   */
  Op = "/op",

  /**
   * `Particle` creates particles.
   */
  Particle = "/particle",

  /**
   * `PlayAnimation` is used to run a one-off animation
   */
  PlayAnimation = "/playanimation",

  /**
   * `PlaySound` plays a sound.
   */
  PlaySound = "/playsound",

  /**
   * `Reload` reloads loot tables, advancements, and functions from disk.
   */
  Reload = "/reload",

  /**
   * `ReplaceItem` replaces items in inventories.
   */
  ReplaceItem = "/replaceitem",

  /**
   * `Ride` used to make entities ride other entities, stop entities from riding, make rides evict their riders, or summon rides or riders.
   */
  Ride = "/ride",

  /**
   * `Save` prepares a backup, queries its status, or resumes.
   * Bedrock Dedicated Server only.
   */
  Save = "/save",

  /**
   * `Say` displays a message to multiple players.
   */
  Say = "/say",

  /**
   * `Scoreboard` manages scoreboard objectives and players.
   */
  Scoreboard = "/scoreboard",

  /**
   * `SetBlock` changes a block to another block.
   */
  SetBlock = "/setblock",

  /**
   * `SetMaxPlayers` sets the maximum number of players allowed to join.
   */
  SetMaxPlayers = "/setmaxplayers",

  /**
   * `SetWorldSpawn` sets the world spawn.
   */
  SetWorldSpawn = "/setworldspawn",

  /**
   * `SpawnPoint` sets the spawn point for a player.
   */
  SpawnPoint = "/spawnpoint",

  /**
   * `SpreadPlayers` teleports entities to random locations.
   */
  SpreadPlayers = "/spreadplayers",

  /**
   * `StopSound` stops a sound.
   */
  StopSound = "/stopsound",

  /**
   * `Structure` used to save and load structures without having to use structure blocks.items in inventories.
   */
  Structure = "/structure",

  /**
   * `Summon` summons an entity.
   */
  Summon = "/summon",

  /**
   * `Tag` controls entity tags.
   */
  Tag = "/tag",

  /**
   * `Team` teleports entities.
   */
  Team = "/team",

  /**
   * `Teleport` displays a private message to other players.
   */
  Teleport = "/teleport",

  /**
   * `Tell` displays a JSON message to players.
   */
  Tell = "/tell",

  /**
   * `TellRaw` displays a JSON message to players.
   */
  TellRaw = "/tellraw",

  /**
   * `TestFor` counts entities matching specified conditions.
   */
  TestFor = "/testfor",

  /**
   * `TestForBlock` tests whether a block is in a location.
   */
  TestForBlock = "/testforblock",

  /**
   * `TestForBlocks` tests whether the blocks in two regions match.
   */
  TestForBlocks = "/testforblocks",

  /**
   * `TickingArea` add, remove, or list ticking areas.
   */
  TickingArea = "/tickingarea",

  /**
   * `Time` changes or queries the world's game time.
   */
  Time = "/time",

  /**
   * `Title` manages screen titles.
   */
  Title = "/title",

  /**
   * `ToggleDownfall` toggles the weather.
   */
  ToggleDownfall = "/toggledownfall",

  /**
   * `Tp` teleports entities.
   */
  Tp = "/tp",

  /**
   * `TransferServer` transfer player to a server.
   */
  TransferServer = "/transferserver",

  /**
   * `W` displays a private message to other players.
   */
  W = "/w",

  /**
   * `Weather` sets the weather.
   */
  Weather = "/weather",

  /**
   * `Whitelist` manages server whitelist.
   */
  Whitelist = "/whitelist",

  /**
   * `WorldBuilder` ability to edit restricted blocks.
   */
  WorldBuilder = "/worldbuilder",

  /**
   * `WsServer` connects to a WebSocket server.
   */
  WsServer = "/wsserver",

  /**
   * `Xp` adds or removes player experience.
   */
  Xp = "/xp",
}
