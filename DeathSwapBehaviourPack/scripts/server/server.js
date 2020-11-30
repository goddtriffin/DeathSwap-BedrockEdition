/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var _death_swap_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30);



const systemServer = server.registerSystem(0, 0);
let deathSwapServer;
systemServer.initialize = function () {
    const scriptLoggerConfig = this.createEventData(_minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["EventIdentifier"].ScriptLoggerConfig);
    scriptLoggerConfig.data.log_errors = _settings__WEBPACK_IMPORTED_MODULE_1__["debug"];
    scriptLoggerConfig.data.log_information = _settings__WEBPACK_IMPORTED_MODULE_1__["debug"];
    scriptLoggerConfig.data.log_warnings = _settings__WEBPACK_IMPORTED_MODULE_1__["debug"];
    this.broadcastEvent(_minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["EventIdentifier"].ScriptLoggerConfig, scriptLoggerConfig);
    deathSwapServer = new _death_swap_index__WEBPACK_IMPORTED_MODULE_2__["DeathSwapServer"](this);
    this.listenForEvent(_minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["EventIdentifier"].EntityCreated, (eventData) => deathSwapServer.onEntityCreated(eventData));
    this.listenForEvent(_minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["EventIdentifier"].EntityUseItem, (eventData) => deathSwapServer.onEntityUseItem(eventData));
    this.listenForEvent(_minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["EventIdentifier"].EntityDeath, (eventData) => deathSwapServer.onEntityDeath(eventData));
};
systemServer.update = function () {
    deathSwapServer.update();
};


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* empty/unused harmony star reexport *//* harmony import */ var _command_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* empty/unused harmony star reexport *//* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Command", function() { return _commands__WEBPACK_IMPORTED_MODULE_2__["Command"]; });

/* harmony import */ var _component_identifiers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentIdentifier", function() { return _component_identifiers__WEBPACK_IMPORTED_MODULE_3__["ComponentIdentifier"]; });

/* harmony import */ var _components_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* empty/unused harmony star reexport *//* harmony import */ var _components_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* empty/unused harmony star reexport *//* harmony import */ var _components_level__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* empty/unused harmony star reexport *//* harmony import */ var _components_server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9);
/* empty/unused harmony star reexport *//* harmony import */ var _damage_sources__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DamageSource", function() { return _damage_sources__WEBPACK_IMPORTED_MODULE_8__["DamageSource"]; });

/* harmony import */ var _difficulty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Difficulty", function() { return _difficulty__WEBPACK_IMPORTED_MODULE_9__["Difficulty"]; });

/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12);
/* empty/unused harmony star reexport *//* harmony import */ var _event_data_listenable_and_triggerable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(13);
/* empty/unused harmony star reexport *//* harmony import */ var _event_data_listenable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(14);
/* empty/unused harmony star reexport *//* harmony import */ var _event_data_triggerable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(15);
/* empty/unused harmony star reexport *//* harmony import */ var _event_identifiers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventIdentifier", function() { return _event_identifiers__WEBPACK_IMPORTED_MODULE_14__["EventIdentifier"]; });

/* harmony import */ var _gamemode__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(17);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Gamemode", function() { return _gamemode__WEBPACK_IMPORTED_MODULE_15__["Gamemode"]; });

/* harmony import */ var _gamerules__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(18);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GameRule", function() { return _gamerules__WEBPACK_IMPORTED_MODULE_16__["GameRule"]; });

/* harmony import */ var _manifest__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(19);
/* empty/unused harmony star reexport *//* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(20);
/* empty/unused harmony star reexport *//* harmony import */ var _player_ability__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(21);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayerAbility", function() { return _player_ability__WEBPACK_IMPORTED_MODULE_19__["PlayerAbility"]; });

/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(22);
/* empty/unused harmony star reexport *//* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(23);
/* empty/unused harmony star reexport *//* harmony import */ var _target_selector__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(24);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TargetSelector", function() { return _target_selector__WEBPACK_IMPORTED_MODULE_22__["TargetSelector"]; });

/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(25);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Time", function() { return _time__WEBPACK_IMPORTED_MODULE_23__["Time"]; });

/* harmony import */ var _use_method__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(26);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UseMethod", function() { return _use_method__WEBPACK_IMPORTED_MODULE_24__["UseMethod"]; });

/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(27);
/* empty/unused harmony star reexport */



























/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Command", function() { return Command; });
var Command;
(function (Command) {
    Command["Ability"] = "/ability";
    Command["CameraShake"] = "/camerashake";
    Command["Clear"] = "/clear";
    Command["ClearSpawnPoint"] = "/clearspawnpoint";
    Command["Clone"] = "/clone";
    Command["Deop"] = "/deop";
    Command["Difficulty"] = "/difficulty";
    Command["Effect"] = "/effect";
    Command["Enchant"] = "/enchant";
    Command["Event"] = "/event";
    Command["Execute"] = "/execute";
    Command["Experience"] = "/experience";
    Command["Fill"] = "/fill";
    Command["Fog"] = "/fog";
    Command["Function"] = "/function";
    Command["Gamemode"] = "/gamemode";
    Command["Gamerule"] = "/gamerule";
    Command["Give"] = "/give";
    Command["Help"] = "/help";
    Command["Kick"] = "/kick";
    Command["Kill"] = "/kill";
    Command["List"] = "/list";
    Command["Locate"] = "/locate";
    Command["Me"] = "/me";
    Command["Mixer"] = "/mixer";
    Command["MobEvent"] = "/mobevent";
    Command["Msg"] = "/msg";
    Command["Music"] = "/music";
    Command["Op"] = "/op";
    Command["Particle"] = "/particle";
    Command["PlayAnimation"] = "/playanimation";
    Command["PlaySound"] = "/playsound";
    Command["Reload"] = "/reload";
    Command["ReplaceItem"] = "/replaceitem";
    Command["Ride"] = "/ride";
    Command["Save"] = "/save";
    Command["Say"] = "/say";
    Command["Scoreboard"] = "/scoreboard";
    Command["SetBlock"] = "/setblock";
    Command["SetMaxPlayers"] = "/setmaxplayers";
    Command["SetWorldSpawn"] = "/setworldspawn";
    Command["SpawnPoint"] = "/spawnpoint";
    Command["SpreadPlayers"] = "/spreadplayers";
    Command["StopSound"] = "/stopsound";
    Command["Structure"] = "/structure";
    Command["Summon"] = "/summon";
    Command["Tag"] = "/tag";
    Command["Team"] = "/team";
    Command["Teleport"] = "/teleport";
    Command["Tell"] = "/tell";
    Command["TellRaw"] = "/tellraw";
    Command["TestFor"] = "/testfor";
    Command["TestForBlock"] = "/testforblock";
    Command["TestForBlocks"] = "/testforblocks";
    Command["TickingArea"] = "/tickingarea";
    Command["Time"] = "/time";
    Command["Title"] = "/title";
    Command["ToggleDownfall"] = "/toggledownfall";
    Command["Tp"] = "/tp";
    Command["TransferServer"] = "/transferserver";
    Command["W"] = "/w";
    Command["Weather"] = "/weather";
    Command["Whitelist"] = "/whitelist";
    Command["WorldBuilder"] = "/worldbuilder";
    Command["WsServer"] = "/wsserver";
    Command["Xp"] = "/xp";
})(Command || (Command = {}));


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentIdentifier", function() { return ComponentIdentifier; });
var ComponentIdentifier;
(function (ComponentIdentifier) {
    ComponentIdentifier["Blockstate"] = "minecraft:blockstate";
    ComponentIdentifier["Molang"] = "minecraft:molang";
    ComponentIdentifier["TickingAreas"] = "minecraft:ticking_areas";
    ComponentIdentifier["Weather"] = "minecraft:weather";
    ComponentIdentifier["ArmorContainer"] = "minecraft:armor_container";
    ComponentIdentifier["Attack"] = "minecraft:attack";
    ComponentIdentifier["CollisionBox"] = "minecraft:collision_box";
    ComponentIdentifier["Container"] = "minecraft:container";
    ComponentIdentifier["DamageSensor"] = "minecraft:damage_sensor";
    ComponentIdentifier["Equipment"] = "minecraft:equipment";
    ComponentIdentifier["Equippable"] = "minecraft:equippable";
    ComponentIdentifier["Explode"] = "minecraft:explode";
    ComponentIdentifier["HandContainer"] = "minecraft:hand_container";
    ComponentIdentifier["Healable"] = "minecraft:healable";
    ComponentIdentifier["Health"] = "minecraft:health";
    ComponentIdentifier["HotbarContainer"] = "minecraft:hotbar_container";
    ComponentIdentifier["Interact"] = "minecraft:interact";
    ComponentIdentifier["Inventory"] = "minecraft:inventory";
    ComponentIdentifier["InventoryContainer"] = "minecraft:inventory_container";
    ComponentIdentifier["LookAt"] = "minecraft:lookat";
    ComponentIdentifier["Nameable"] = "minecraft:nameable";
    ComponentIdentifier["Position"] = "minecraft:position";
    ComponentIdentifier["Rotation"] = "minecraft:rotation";
    ComponentIdentifier["Shooter"] = "minecraft:shooter";
    ComponentIdentifier["SpawnEntity"] = "minecraft:spawn_entity";
    ComponentIdentifier["Tag"] = "minecraft:tag";
    ComponentIdentifier["Teleport"] = "minecraft:teleport";
    ComponentIdentifier["TickWorld"] = "minecraft:tick_world";
    ComponentIdentifier["TickingAreaDescription"] = "minecraft:ticking_area_description";
})(ComponentIdentifier || (ComponentIdentifier = {}));


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DamageSource", function() { return DamageSource; });
var DamageSource;
(function (DamageSource) {
    DamageSource["All"] = "all";
    DamageSource["Anvil"] = "anvil";
    DamageSource["BlockExplosion"] = "block_explosion";
    DamageSource["Charging"] = "charging";
    DamageSource["Contact"] = "contact";
    DamageSource["Drowning"] = "drowning";
    DamageSource["EntityAttack"] = "entity_attack";
    DamageSource["EntityExplosion"] = "entity_explosion";
    DamageSource["Fall"] = "fall";
    DamageSource["FallingBlock"] = "falling_block";
    DamageSource["Fire"] = "fire";
    DamageSource["FireTick"] = "fire_tick";
    DamageSource["Fireworks"] = "fireworks";
    DamageSource["FlyIntoWall"] = "fly_into_wall";
    DamageSource["Lava"] = "lava";
    DamageSource["Lightning"] = "lightning";
    DamageSource["Magic"] = "magic";
    DamageSource["Magma"] = "magma";
    DamageSource["None"] = "none";
    DamageSource["Override"] = "override";
    DamageSource["Piston"] = "piston";
    DamageSource["Projectile"] = "projectile";
    DamageSource["Starve"] = "starve";
    DamageSource["Suffocation"] = "suffocation";
    DamageSource["Suicide"] = "suicide";
    DamageSource["Temperature"] = "temperature";
    DamageSource["Thorns"] = "thorns";
    DamageSource["Void"] = "void";
    DamageSource["Wither"] = "wither";
})(DamageSource || (DamageSource = {}));


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Difficulty", function() { return Difficulty; });
var Difficulty;
(function (Difficulty) {
    Difficulty["Peaceful"] = "peaceful";
    Difficulty["Easy"] = "easy";
    Difficulty["Normal"] = "normal";
    Difficulty["Hard"] = "hard";
})(Difficulty || (Difficulty = {}));


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventIdentifier", function() { return EventIdentifier; });
var EventIdentifier;
(function (EventIdentifier) {
    EventIdentifier["DisplayChatEvent"] = "minecraft:display_chat_event";
    EventIdentifier["ScriptLoggerConfig"] = "minecraft:script_logger_config";
    EventIdentifier["SpawnParticleAttachedEntity"] = "minecraft:spawn_particle_attached_entity";
    EventIdentifier["SpawnParticleInWorld"] = "minecraft:spawn_particle_in_world";
    EventIdentifier["ClientEnteredWorld"] = "minecraft:client_entered_world";
    EventIdentifier["HitResultChanged"] = "minecraft:hit_result_changed";
    EventIdentifier["HitResultContinuous"] = "minecraft:hit_result_continuous";
    EventIdentifier["PickHitResultChanged"] = "minecraft:pick_hit_result_changed";
    EventIdentifier["PickHitResultContinuous"] = "minecraft:pick_hit_result_continuous";
    EventIdentifier["LoadUI"] = "minecraft:load_ui";
    EventIdentifier["SendUIEvent"] = "minecraft:send_ui_event";
    EventIdentifier["UnloadUI"] = "minecraft:unload_ui";
    EventIdentifier["BlockDestructionStarted"] = "minecraft:block_destruction_started";
    EventIdentifier["BlockDestructionStopped"] = "minecraft:block_destruction_stopped";
    EventIdentifier["BlockExploded"] = "minecraft:block_exploded";
    EventIdentifier["BlockInteractedWith"] = "minecraft:block_interacted_with";
    EventIdentifier["EntityAcquiredItem"] = "minecraft:entity_acquired_item";
    EventIdentifier["EntityAttack"] = "minecraft:entity_attack";
    EventIdentifier["EntityCarriedItemChanged"] = "minecraft:entity_carried_item_changed";
    EventIdentifier["EntityCreated"] = "minecraft:entity_created";
    EventIdentifier["EntityDeath"] = "minecraft:entity_death";
    EventIdentifier["EntityDroppedItem"] = "minecraft:entity_dropped_item";
    EventIdentifier["EntityEquippedArmor"] = "minecraft:entity_equipped_armor";
    EventIdentifier["EntityHurt"] = "minecraft:entity_hurt";
    EventIdentifier["EntitySneak"] = "minecraft:entity_sneak";
    EventIdentifier["EntityStartRiding"] = "minecraft:entity_start_riding";
    EventIdentifier["EntityStopRiding"] = "minecraft:entity_stop_riding";
    EventIdentifier["EntityTick"] = "minecraft:entity_tick";
    EventIdentifier["EntityUseItem"] = "minecraft:entity_use_item";
    EventIdentifier["PistonMovedBlock"] = "minecraft:piston_moved_block";
    EventIdentifier["PlayerAttackedEntity"] = "minecraft:player_attacked_entity";
    EventIdentifier["PlayerDestroyedBlock"] = "minecraft:player_destroyed_block";
    EventIdentifier["PlayerPlacedBlock"] = "minecraft:player_placed_block";
    EventIdentifier["ProjectileHit"] = "minecraft:projectile_hit";
    EventIdentifier["WeatherChanged"] = "minecraft:weather_changed";
    EventIdentifier["EntityDefinitionEvent"] = "minecraft:entity_definition_event";
    EventIdentifier["ExecuteCommand"] = "minecraft:execute_command";
    EventIdentifier["PlaySound"] = "minecraft:play_sound";
})(EventIdentifier || (EventIdentifier = {}));


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gamemode", function() { return Gamemode; });
var Gamemode;
(function (Gamemode) {
    Gamemode["Survival"] = "survival";
    Gamemode["Creative"] = "creative";
    Gamemode["Adventure"] = "adventure";
})(Gamemode || (Gamemode = {}));


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameRule", function() { return GameRule; });
var GameRule;
(function (GameRule) {
    GameRule["CommandBlocksEnabled"] = "commandBlocksEnabled";
    GameRule["CommandBlockOutput"] = "commandBlockOutput";
    GameRule["DoDaylightCycle"] = "doDaylightCycle";
    GameRule["DoEntityDrops"] = "doEntityDrops";
    GameRule["DoFireTick"] = "doFireTick";
    GameRule["DoInsomnia"] = "doInsomnia";
    GameRule["DoImmediateRespawn"] = "doImmediateRespawn";
    GameRule["DoMobLoot"] = "doMobLoot";
    GameRule["DoMobSpawning"] = "doMobSpawning";
    GameRule["DoTileDrops"] = "doTileDrops";
    GameRule["DoWeatherCycle"] = "doWeatherCycle";
    GameRule["DrowningDamage"] = "drowningDamage";
    GameRule["FallDamage"] = "fallDamage";
    GameRule["FireDamage"] = "fireDamage";
    GameRule["KeepInventory"] = "keepInventory";
    GameRule["MaxCommandChainLength"] = "maxCommandChainLength";
    GameRule["MobGriefing"] = "mobGriefing";
    GameRule["NaturalRegeneration"] = "naturalRegeneration";
    GameRule["Pvp"] = "pvp";
    GameRule["RandomTickSpeed"] = "randomTickSpeed";
    GameRule["SendCommandFeedback"] = "sendCommandFeedback";
    GameRule["ShowCoordinates"] = "showCoordinates";
    GameRule["ShowDeathMessages"] = "showDeathMessages";
    GameRule["SpawnRadius"] = "spawnRadius";
    GameRule["TntExplodes"] = "tntExplodes";
    GameRule["ShowTags"] = "showTags";
})(GameRule || (GameRule = {}));


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerAbility", function() { return PlayerAbility; });
var PlayerAbility;
(function (PlayerAbility) {
    PlayerAbility["WorldBuilder"] = "worldbuilder";
    PlayerAbility["MayFly"] = "mayfly";
    PlayerAbility["Mute"] = "mute";
})(PlayerAbility || (PlayerAbility = {}));


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetSelector", function() { return TargetSelector; });
var TargetSelector;
(function (TargetSelector) {
    TargetSelector["NearestPlayer"] = "@p";
    TargetSelector["RandomPlayer"] = "@r";
    TargetSelector["EveryPlayer"] = "@a";
    TargetSelector["AllAliveEntities"] = "@e";
    TargetSelector["Self"] = "@s";
})(TargetSelector || (TargetSelector = {}));


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Time", function() { return Time; });
var Time;
(function (Time) {
    Time["Day"] = "day";
    Time["Night"] = "night";
    Time["Noon"] = "noon";
    Time["Midnight"] = "midnight";
    Time["Sunrise"] = "sunrise";
    Time["Sunset"] = "sunset";
})(Time || (Time = {}));


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseMethod", function() { return UseMethod; });
var UseMethod;
(function (UseMethod) {
    UseMethod["Eat"] = "eat";
})(UseMethod || (UseMethod = {}));


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _extra_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* empty/unused harmony star reexport */


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return debug; });
const debug = true;


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeathSwapServer", function() { return _server__WEBPACK_IMPORTED_MODULE_0__["DeathSwapServer"]; });




/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeathSwapServer", function() { return DeathSwapServer; });
/* harmony import */ var _minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35);






class DeathSwapServer {
    constructor(system) {
        this.system = system;
        this.state = _enums__WEBPACK_IMPORTED_MODULE_2__["DeathSwapState"].Lobby;
        this.settings = new _settings__WEBPACK_IMPORTED_MODULE_5__["DeathSwapSettings"]();
        this.tickCounter = 0;
        this.secondsCounter = 0;
        this.isSwapTimerOn = false;
        this.players = {};
        this.setGamerules();
        this.setDifficulty(_minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["Difficulty"].Hard);
        this.setState(_enums__WEBPACK_IMPORTED_MODULE_2__["DeathSwapState"].Lobby);
    }
    setState(state) {
        switch (state) {
            case _enums__WEBPACK_IMPORTED_MODULE_2__["DeathSwapState"].Lobby:
                this.toggleLobbyState();
                break;
            case _enums__WEBPACK_IMPORTED_MODULE_2__["DeathSwapState"].DeathSwap:
                this.toggleDeathSwapState();
                break;
            case _enums__WEBPACK_IMPORTED_MODULE_2__["DeathSwapState"].GameOver:
                this.toggleGameOverState();
                break;
        }
        this.state = state;
    }
    checkState() {
        if (this.state === _enums__WEBPACK_IMPORTED_MODULE_2__["DeathSwapState"].Lobby) {
            this.checkLobbyState();
        }
        else if (this.state === _enums__WEBPACK_IMPORTED_MODULE_2__["DeathSwapState"].DeathSwap) {
            this.checkDeathSwapState();
        }
    }
    checkLobbyState() {
        let ready = true;
        for (const id in this.players) {
            const player = this.players[id];
            if (player.getState() !== _enums__WEBPACK_IMPORTED_MODULE_2__["PlayerState"].Ready) {
                ready = false;
            }
        }
        if (ready) {
            this.setState(_enums__WEBPACK_IMPORTED_MODULE_2__["DeathSwapState"].DeathSwap);
        }
    }
    checkDeathSwapState() {
        const survivingPlayers = [];
        for (const id in this.players) {
            const player = this.players[id];
            if (player.getState() === _enums__WEBPACK_IMPORTED_MODULE_2__["PlayerState"].DeathSwap) {
                survivingPlayers.push(player.getID());
            }
        }
        if (survivingPlayers.length === 1) {
            this.setState(_enums__WEBPACK_IMPORTED_MODULE_2__["DeathSwapState"].GameOver);
            const winningPlayer = this.players[survivingPlayers[0]];
            winningPlayer.setState(_enums__WEBPACK_IMPORTED_MODULE_2__["PlayerState"].Spectating);
            this.displayTitle(`${winningPlayer.getName()} wins the game!`);
        }
        if (survivingPlayers.length === 0) {
            this.displayTitle(`Everyone died... no winner!`);
        }
    }
    toggleLobbyState() {
        if (!this.isState(_enums__WEBPACK_IMPORTED_MODULE_2__["DeathSwapState"].GameOver) &&
            !this.isState(_enums__WEBPACK_IMPORTED_MODULE_2__["DeathSwapState"].Lobby)) {
            return;
        }
    }
    toggleDeathSwapState() {
        if (!this.isState(_enums__WEBPACK_IMPORTED_MODULE_2__["DeathSwapState"].Lobby)) {
            return;
        }
        this.setTime(this.settings.startingTimeOfDay);
        this.setAllPlayersState(_enums__WEBPACK_IMPORTED_MODULE_2__["PlayerState"].DeathSwap);
        this.startSwapTimer();
        this.displayTitle("Death Swap... BEGINS!!");
    }
    toggleGameOverState() {
        if (!this.isState(_enums__WEBPACK_IMPORTED_MODULE_2__["DeathSwapState"].DeathSwap)) {
            return;
        }
        this.stopSwapTimer();
        this.displayTitle("GAME OVER");
    }
    isState(state) {
        if (this.state === state) {
            return true;
        }
        if (_settings__WEBPACK_IMPORTED_MODULE_4__["debug"]) {
            Object(_utils__WEBPACK_IMPORTED_MODULE_1__["log"])(this.system, `Incorrect Death Swap State - Expected: ${state} - Got: ${this.state}`);
        }
        return false;
    }
    addPlayer(playerData) {
        const player = new _player__WEBPACK_IMPORTED_MODULE_3__["Player"](this.system, playerData);
        this.players[player.getID()] = player;
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["log"])(this.system, `${player.getName()} joined the game!`);
    }
    removePlayer(id) {
        delete this.players[id];
    }
    playerExists(id) {
        return Object.prototype.hasOwnProperty.call(this.players, id);
    }
    setPlayerState(id, state) {
        this.players[id].setState(state);
        this.checkState();
    }
    setAllPlayersState(state) {
        for (const id in this.players) {
            this.players[id].setState(state);
        }
        this.checkState();
    }
    swapTwoPlayerPositions(id1, id2) {
        const playerToSwap = this.players[id1];
        const destinationPlayer = this.players[id2];
        playerToSwap.teleport(destinationPlayer.getCachedPosition(), destinationPlayer.getCachedRotation());
    }
    setDifficulty(difficulty) {
        this.system.executeCommand(`${_minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["Command"].Difficulty} ${difficulty}`, (commandResult) => Object(_utils__WEBPACK_IMPORTED_MODULE_1__["commandCallback"])(this.system, commandResult));
    }
    setTime(time) {
        this.system.executeCommand(`${_minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["Command"].Time} set ${time}`, (commandResult) => Object(_utils__WEBPACK_IMPORTED_MODULE_1__["commandCallback"])(this.system, commandResult));
    }
    setGamerules() {
        const gamerules = [
            {
                rule: _minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["GameRule"].CommandBlocksEnabled,
                value: this.settings.CommandBlocksEnabled,
            },
            {
                rule: _minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["GameRule"].CommandBlockOutput,
                value: this.settings.CommandBlockOutput,
            },
            {
                rule: _minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["GameRule"].DoDaylightCycle,
                value: this.settings.DoDaylightCycle,
            },
            {
                rule: _minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["GameRule"].DoEntityDrops,
                value: this.settings.DoEntityDrops,
            },
            {
                rule: _minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["GameRule"].DoFireTick,
                value: this.settings.DoFireTick,
            },
            {
                rule: _minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["GameRule"].DoInsomnia,
                value: this.settings.DoInsomnia,
            },
            {
                rule: _minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["GameRule"].DoImmediateRespawn,
                value: this.settings.DoImmediateRespawn,
            },
            {
                rule: _minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["GameRule"].DoMobLoot,
                value: this.settings.DoMobLoot,
            },
            {
                rule: _minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["GameRule"].DoMobSpawning,
                value: this.settings.DoMobSpawning,
            },
            {
                rule: _minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["GameRule"].DoTileDrops,
                value: this.settings.DoTileDrops,
            },
            {
                rule: _minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["GameRule"].DoWeatherCycle,
                value: this.settings.DoWeatherCycle,
            },
            {
                rule: _minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["GameRule"].DrowningDamage,
                value: this.settings.DrowningDamage,
            },
            {
                rule: _minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["GameRule"].FallDamage,
                value: this.settings.FallDamage,
            },
            {
                rule: _minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["GameRule"].FireDamage,
                value: this.settings.FireDamage,
            },
            {
                rule: _minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["GameRule"].KeepInventory,
                value: this.settings.KeepInventory,
            },
            {
                rule: _minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["GameRule"].MaxCommandChainLength,
                value: this.settings.MaxCommandChainLength,
            },
            {
                rule: _minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["GameRule"].MobGriefing,
                value: this.settings.MobGriefing,
            },
            {
                rule: _minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["GameRule"].NaturalRegeneration,
                value: this.settings.NaturalRegeneration,
            },
            {
                rule: _minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["GameRule"].Pvp,
                value: this.settings.Pvp,
            },
            {
                rule: _minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["GameRule"].RandomTickSpeed,
                value: this.settings.RandomTickSpeed,
            },
            {
                rule: _minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["GameRule"].SendCommandFeedback,
                value: this.settings.SendCommandFeedback,
            },
            {
                rule: _minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["GameRule"].ShowCoordinates,
                value: this.settings.ShowCoordinates,
            },
            {
                rule: _minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["GameRule"].ShowDeathMessages,
                value: this.settings.ShowDeathMessages,
            },
            {
                rule: _minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["GameRule"].SpawnRadius,
                value: this.settings.SpawnRadius,
            },
            {
                rule: _minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["GameRule"].TntExplodes,
                value: this.settings.TntExplodes,
            },
            {
                rule: _minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["GameRule"].ShowTags,
                value: this.settings.ShowTags,
            },
        ];
        for (let i = 0; i < gamerules.length; i++) {
            this.setGamerule(gamerules[i].rule, gamerules[i].value.toString());
        }
    }
    setGamerule(rule, value) {
        this.system.executeCommand(`${_minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["Command"].Gamerule} ${rule} ${value}`, (commandResult) => Object(_utils__WEBPACK_IMPORTED_MODULE_1__["commandCallback"])(this.system, commandResult));
    }
    displayTitle(title) {
        this.system.executeCommand(`${_minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["Command"].Title} ${_minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["TargetSelector"].EveryPlayer} title ${title}`, (commandResult) => Object(_utils__WEBPACK_IMPORTED_MODULE_1__["commandCallback"])(this.system, commandResult));
    }
    startSwapTimer() {
        this.isSwapTimerOn = true;
        this.secondsCounter = 0;
    }
    stopSwapTimer() {
        this.isSwapTimerOn = false;
        this.secondsCounter = 0;
    }
    swap() {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["log"])(this.system, "Swapping!");
        const survivingPlayersById = [];
        for (const id in this.players) {
            const player = this.players[id];
            if (player.getState() === _enums__WEBPACK_IMPORTED_MODULE_2__["PlayerState"].DeathSwap) {
                survivingPlayersById.push(player.getID());
                player.savePositionToCache();
                player.saveRotationToCache();
            }
        }
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["shuffleArray"])(survivingPlayersById);
        for (let i = 0; i < survivingPlayersById.length; i++) {
            const index1 = i;
            const index2 = index1 + 1 > survivingPlayersById.length - 1 ? 0 : index1 + 1;
            this.swapTwoPlayerPositions(survivingPlayersById[index1], survivingPlayersById[index2]);
        }
    }
    update() {
        this.tickCounter++;
        if (this.tickCounter === 20) {
            this.tickCounter = 0;
            this.updateOncePerSecond();
        }
    }
    updateOncePerSecond() {
        if (this.isSwapTimerOn) {
            this.secondsCounter++;
            const secondsLeftBeforeSwap = this.settings.secondsBetweenSwap - this.secondsCounter;
            if (secondsLeftBeforeSwap === 0) {
                this.secondsCounter = 0;
                this.swap();
            }
            if (secondsLeftBeforeSwap <= this.settings.countdownTime &&
                secondsLeftBeforeSwap !== 0) {
                Object(_utils__WEBPACK_IMPORTED_MODULE_1__["log"])(this.system, `Swapping in ${secondsLeftBeforeSwap} seconds!`);
            }
        }
        for (const id in this.players) {
            this.players[id].updateOncePerSecond();
        }
    }
    onEntityCreated(eventData) {
        const entityCreated = eventData.data;
        if (entityCreated.entity.__identifier__ === "minecraft:player") {
            this.addPlayer(entityCreated.entity);
        }
    }
    onEntityUseItem(eventData) {
        const entityUseItem = eventData.data;
        if (entityUseItem.use_method === _minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["UseMethod"].Eat) {
            if (entityUseItem.item_stack.item === _enums__WEBPACK_IMPORTED_MODULE_2__["DeathSwapItem"].BloodChaliceFull) {
                this.setPlayerState(entityUseItem.entity.id, _enums__WEBPACK_IMPORTED_MODULE_2__["PlayerState"].Ready);
            }
        }
    }
    onEntityDeath(eventData) {
        const entityDeath = eventData.data;
        if (this.playerExists(entityDeath.entity.id)) {
            this.setPlayerState(entityDeath.entity.id, _enums__WEBPACK_IMPORTED_MODULE_2__["PlayerState"].Spectating);
            this.checkState();
        }
    }
}


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commandCallback", function() { return commandCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffleArray", function() { return shuffleArray; });
/* harmony import */ var _minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);


function log(system, ...items) {
    const toString = (item) => {
        switch (Object.prototype.toString.call(item)) {
            case "[object Undefined]": {
                return "undefined";
            }
            case "[object Null]": {
                return "null";
            }
            case "[object String]": {
                return `"${item}"`;
            }
            case "[object Array]": {
                const array = item.map(toString);
                return `[${array.join(", ")}]`;
            }
            case "[object Object]": {
                return JSON.stringify(item, null, "    ");
            }
            case "[object Function]": {
                return item.toString();
            }
            default: {
                return item;
            }
        }
    };
    const chatEvent = system.createEventData(_minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["EventIdentifier"].DisplayChatEvent);
    chatEvent.data.message = items.map(toString).join(" ");
    system.broadcastEvent(_minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["EventIdentifier"].DisplayChatEvent, chatEvent);
}
function commandCallback(system, commandResult) {
    if (_settings__WEBPACK_IMPORTED_MODULE_1__["debug"]) {
        log(system, `Callback called! Command: ${commandResult.command} Data: ${JSON.stringify(commandResult.data, null, "    ")}`);
    }
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeathSwapState", function() { return DeathSwapState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerState", function() { return PlayerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeathSwapItem", function() { return DeathSwapItem; });
var DeathSwapState;
(function (DeathSwapState) {
    DeathSwapState["Lobby"] = "lobby";
    DeathSwapState["DeathSwap"] = "deathswap";
    DeathSwapState["GameOver"] = "gameover";
})(DeathSwapState || (DeathSwapState = {}));
var PlayerState;
(function (PlayerState) {
    PlayerState["Lobby"] = "lobby";
    PlayerState["Ready"] = "ready";
    PlayerState["DeathSwap"] = "deathswap";
    PlayerState["Spectating"] = "spectating";
})(PlayerState || (PlayerState = {}));
var DeathSwapItem;
(function (DeathSwapItem) {
    DeathSwapItem["BloodChaliceFull"] = "deathswap:blood_chalice_full";
    DeathSwapItem["BloodChaliceEmpty"] = "deathswap:blood_chalice_empty";
})(DeathSwapItem || (DeathSwapItem = {}));


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var _minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29);




class Player {
    constructor(system, playerData) {
        this.system = system;
        this.hasActuallyJoinedTheGameForReal = false;
        this.state = _enums__WEBPACK_IMPORTED_MODULE_2__["PlayerState"].Spectating;
        this.positionCache = { x: 0, y: 0, z: 0 };
        this.rotationCache = { x: 0, y: 0 };
        this.data = playerData;
    }
    onFullyLoaded() {
        this.hasActuallyJoinedTheGameForReal = true;
        this.setState(_enums__WEBPACK_IMPORTED_MODULE_2__["PlayerState"].Lobby);
    }
    updateOncePerSecond() {
        if (!this.hasActuallyJoinedTheGameForReal) {
            this.system.executeCommand(`${_minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["Command"].Xp} 1L "${this.getName()}"`, (commandResult) => this.checkPlayerCanBeActedUpon(commandResult));
        }
    }
    checkPlayerCanBeActedUpon(commandResult) {
        if (commandResult.data.statusCode === 0) {
            this.onFullyLoaded();
        }
    }
    getState() {
        return this.state;
    }
    getID() {
        return this.data.id;
    }
    getName() {
        const nameable = this.system.getComponent(this.data, _minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["ComponentIdentifier"].Nameable).data;
        return nameable.name;
    }
    getPosition() {
        const position = this.system.getComponent(this.data, _minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["ComponentIdentifier"].Position).data;
        return position;
    }
    getCachedPosition() {
        return this.positionCache;
    }
    savePositionToCache() {
        this.positionCache = this.getPosition();
    }
    getRotation() {
        const rotation = this.system.getComponent(this.data, _minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["ComponentIdentifier"].Rotation).data;
        return rotation;
    }
    getCachedRotation() {
        return this.rotationCache;
    }
    saveRotationToCache() {
        this.rotationCache = this.getRotation();
    }
    setState(state) {
        switch (state) {
            case _enums__WEBPACK_IMPORTED_MODULE_2__["PlayerState"].Lobby:
                this.toggleLobbyState();
                break;
            case _enums__WEBPACK_IMPORTED_MODULE_2__["PlayerState"].Ready:
                this.toggleReadyState();
                break;
            case _enums__WEBPACK_IMPORTED_MODULE_2__["PlayerState"].DeathSwap:
                this.toggleDeathSwapState();
                break;
            case _enums__WEBPACK_IMPORTED_MODULE_2__["PlayerState"].Spectating:
                this.toggleSpectatorState();
                break;
        }
        this.state = state;
    }
    setGamemode(gamemode) {
        this.system.executeCommand(`${_minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["Command"].Gamemode} ${gamemode} "${this.getName()}"`, (commandResult) => Object(_utils__WEBPACK_IMPORTED_MODULE_1__["commandCallback"])(this.system, commandResult));
    }
    emptyInventory() {
        this.system.executeCommand(`${_minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["Command"].Clear} "${this.getName()}"`, (commandResult) => Object(_utils__WEBPACK_IMPORTED_MODULE_1__["commandCallback"])(this.system, commandResult));
    }
    resetInventory() {
        this.emptyInventory();
        this.system.executeCommand(`${_minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["Command"].Give} "${this.getName()}" ${_enums__WEBPACK_IMPORTED_MODULE_2__["DeathSwapItem"].BloodChaliceFull}`, (commandResult) => Object(_utils__WEBPACK_IMPORTED_MODULE_1__["commandCallback"])(this.system, commandResult));
    }
    toggleAbility(ability, toggle) {
        this.system.executeCommand(`${_minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["Command"].Ability} "${this.getName()}" ${ability} ${toggle.toString()}`, (commandResult) => Object(_utils__WEBPACK_IMPORTED_MODULE_1__["commandCallback"])(this.system, commandResult));
    }
    addExperienceLevels(levels) {
        this.system.executeCommand(`${_minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["Command"].Xp} ${levels}L "${this.getName()}"`, (commandResult) => Object(_utils__WEBPACK_IMPORTED_MODULE_1__["commandCallback"])(this.system, commandResult));
    }
    teleport(position, rotation) {
        const checkForBlocks = false;
        this.system.executeCommand(`${_minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["Command"].Teleport} "${this.getName()}" ${position.x} ${position.y} ${position.z} ${rotation.y} ${rotation.x} ${checkForBlocks.toString()}`, (commandResult) => Object(_utils__WEBPACK_IMPORTED_MODULE_1__["commandCallback"])(this.system, commandResult));
    }
    toggleLobbyState() {
        if (!this.isState(_enums__WEBPACK_IMPORTED_MODULE_2__["PlayerState"].Spectating)) {
            return;
        }
        this.setGamemode(_minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["Gamemode"].Adventure);
        this.resetInventory();
    }
    toggleReadyState() {
        if (!this.isState(_enums__WEBPACK_IMPORTED_MODULE_2__["PlayerState"].Lobby)) {
            return;
        }
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["log"])(this.system, `${this.getName()} readied up!`);
    }
    toggleDeathSwapState() {
        if (!this.isState(_enums__WEBPACK_IMPORTED_MODULE_2__["PlayerState"].Ready)) {
            return;
        }
        this.addExperienceLevels(-2147483648);
        this.emptyInventory();
        this.setGamemode(_minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["Gamemode"].Survival);
    }
    toggleSpectatorState() {
        if (!this.isState(_enums__WEBPACK_IMPORTED_MODULE_2__["PlayerState"].DeathSwap)) {
            return;
        }
        this.setGamemode(_minecraft_bedrock_edition_index__WEBPACK_IMPORTED_MODULE_0__["Gamemode"].Adventure);
        this.emptyInventory();
    }
    isState(state) {
        if (this.state === state) {
            return true;
        }
        if (_settings__WEBPACK_IMPORTED_MODULE_3__["debug"]) {
            Object(_utils__WEBPACK_IMPORTED_MODULE_1__["log"])(this.system, `Incorrect Player State (${this.getName()}) - Expected: ${state} - Got: ${this.state}`);
        }
        return false;
    }
}


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeathSwapSettings", function() { return DeathSwapSettings; });
/* harmony import */ var _minecraft_bedrock_edition_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);

class DeathSwapSettings {
    constructor() {
        this.secondsBetweenSwap = 300;
        this.countdownTime = 10;
        this.startingTimeOfDay = _minecraft_bedrock_edition_time__WEBPACK_IMPORTED_MODULE_0__["Time"].Noon;
        this.CommandBlocksEnabled = false;
        this.CommandBlockOutput = true;
        this.DoDaylightCycle = true;
        this.DoEntityDrops = true;
        this.DoFireTick = true;
        this.DoInsomnia = false;
        this.DoImmediateRespawn = false;
        this.DoMobLoot = true;
        this.DoMobSpawning = true;
        this.DoTileDrops = true;
        this.DoWeatherCycle = true;
        this.DrowningDamage = true;
        this.FallDamage = true;
        this.FireDamage = true;
        this.KeepInventory = false;
        this.MaxCommandChainLength = 65536;
        this.MobGriefing = true;
        this.NaturalRegeneration = true;
        this.Pvp = false;
        this.RandomTickSpeed = 1;
        this.SendCommandFeedback = false;
        this.ShowCoordinates = false;
        this.ShowDeathMessages = true;
        this.SpawnRadius = 5;
        this.TntExplodes = true;
        this.ShowTags = true;
    }
}


/***/ })
/******/ ]);