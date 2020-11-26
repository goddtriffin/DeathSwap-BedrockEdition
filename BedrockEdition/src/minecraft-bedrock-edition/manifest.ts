import { Vector } from "./objects";
import { Integer } from "./utils/index";

/**
 * `Manifest` contains all the basic information about the pack that Minecraft needs to identify it.
 * This is the `manifest.json`.
 *
 * @type {Manifest}
 * @property {Integer} format_version - Defines which format version of the manifest.
 * @property {ManifestHeader} header - Defines the header of the manifest.
 * @property {ManifestModules} modules - Defines the modules of the manifest.
 * @property {ManifestDependencies} dependencies - Defines the dependencies of the manifest.
 * @property {ManifestCapabilities} capabilities - Defines the capabilities of the manifest.
 * @property {ManifestMetadata} metadata - Defines the metadata of the manifest.
 */
export interface Manifest {
  format_version: Integer;
  header: ManifestHeader;
  modules: ManifestModules;
  dependencies: ManifestDependencies;
  capabilities: ManifestCapabilities;
  metadata: ManifestMetadata;
}

/**
 * `ManifestHeader` contains the `manifest.json` header properties.
 *
 * @type {ManifestHeader}
 * @property {Vector} base_game_version - This is the version of the base game your world template requires, specified as [majorVersion, minorVersion, revision]. We use this to determine what version of the base game resource and behavior packs to apply when your content is used.
 * @property {string} description - This is a short description of the pack. It will appear in the game below the name of the pack. We recommend keeping it to 1-2 lines.
 * @property {boolean} lock_template_options - This option is required for any world templates. This will lock the player from modifying the options of the world.
 * @property {string} min_engine_version - This is the minimum version of the game that this pack was written for. This is a required field for resource and behavior packs. This helps the game identify whether any backwards compatibility is needed for your pack. You should always use the highest version currently available when creating packs.
 * @property {string} name - This is the name of the pack as it appears within Minecraft. This is a required field.
 * @property {string} uuid - This is a special type of identifier that uniquely identifies this pack from any other pack. UUIDs are written in the format xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx where each x is a hexadecimal value (0-9 or a-f). We recommend using an online service to generate this and guarantee their uniqueness (just bing UUID Generator to find some).
 * @property {Vector} version - This is the version of your pack in the format [majorVersion, minorVersion, revision]. The version number is used when importing a pack that has been imported before. The new pack will replace the old one if the version is higher, and ignored if it's the same or lower
 */
export interface ManifestHeader {
  base_game_version: Vector;
  description: string;
  lock_template_options: boolean;
  min_engine_version: string;
  name: string;
  uuid: string;
  version: Vector;
}

/**
 * `ManifestModules` contains the `manifest.json` modules properties.
 *
 * @type {ManifestModules}
 * @property {string} description - This is a short description of the module. This is not user-facing at the moment but is a good place to remind yourself why the module is defined.
 * @property {string} type - This is the type of the module. Can be any of the following: resources, data, client_data, interface, world_template.
 * @property {string} uuid - This is a unique identifier for the module in the same format as the pack's UUID in the header. This should be different from the pack's UUID, and different for every module.
 * @property {Vector} version - This is the version of the module in the same format as the pack's version in the header. This can be used to further identify changes in your pack.
 */
export interface ManifestModules {
  description: string;
  type: string;
  uuid: string;
  version: Vector;
}

/**
 * `ManifestDependencies` contains the `manifest.json` dependencies properties.
 *
 * @type {ManifestDependencies}
 * @property {string} uuid - This is the unique identifier of the pack that this pack depends on. It needs to be the exact same UUID that the pack has defined in the header section of it's manifest file.
 * @property {Vector} version - This is the specific version of the pack that your pack depends on. Should match the version the other pack has in its manifest file.
 */
export interface ManifestDependencies {
  uuid: string;
  version: Vector;
}

/**
 * `ManifestCapabilities` contains the `manifest.json` capabilities properties.
 *
 * @type {ManifestCapabilities}
 * @property {unknown} experimental_custom_ui - ?
 * @property {unknown} chemistry - ?
 * @property {unknown} raytraced - ?
 */
export interface ManifestCapabilities {
  experimental_custom_ui: unknown;
  chemistry: unknown;
  raytraced: unknown;
}

/**
 * `ManifestMetadata` contains the `manifest.json` metadata properties.
 *
 * @type {ManifestMetadata}
 * @property {Array<string>} authors - Name of the author(s) of the pack.
 * @property {string} license - The license of the pack.
 * @property {string} url - The home website of your pack.
 */
export interface ManifestMetadata {
  authors: Array<string>;
  license: string;
  url: string;
}
