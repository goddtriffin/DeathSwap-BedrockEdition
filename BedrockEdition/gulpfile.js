const gulp = require("gulp");
const { watch, series, parallel } = require("gulp");
const zip = require("gulp-zip");
const webpack = require("webpack-stream");
var compiler = require("webpack");
const del = require("del");
const eslint = require("gulp-eslint");

const devBehaviourPackPath = "./DeathSwapBehaviourPack/**/*";
const devResourcePackPath = "./DeathSwapResourcePack/**/*";

const minecraftDevBehaviourPackPath =
  "C:/Users/goddt/AppData/Local/Packages/Microsoft.MinecraftUWP_8wekyb3d8bbwe/LocalState/games/com.mojang/development_behavior_packs/DeathSwapBehaviourPack";
const minecraftDevResourcePackPath =
  "C:/Users/goddt/AppData/Local/Packages/Microsoft.MinecraftUWP_8wekyb3d8bbwe/LocalState/games/com.mojang/development_resource_packs/DeathSwapResourcePack";

const prodBehaviourPackName = "DeathSwapBehaviourPack.mcpack";
const prodResourcePackName = "DeathSwapResourcePack.mcpack";
const prodAddonName = "DeathSwap-BE-v0.0.0.mcaddon";

const javascriptTypescript = [
  "./src/**/*.ts",
  ".eslintrc.js",
  "gulpfile.js",
  "./webpack.config.js",
];

// lints all Javscript, Typescript (including config files) via ESLint
function lintWithEslint() {
  return gulp
    .src(javascriptTypescript)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

// bundles the server and client javascript code into bundles via webpack
function compile() {
  return gulp
    .src(["./src/server/server.ts"])
    .pipe(
      webpack(require("./webpack.config.js"), compiler, function (err) {
        if (err) {
          console.log("err:", err);
        }
      })
    )
    .pipe(gulp.dest("DeathSwapBehaviourPack/scripts"));
}

// moves the behaviour pack to the Minecraft behaviour pack test directory
function transferBehaviourPack() {
  return gulp
    .src(devBehaviourPackPath)
    .pipe(gulp.dest(minecraftDevBehaviourPackPath));
}

// moves resource pack to the Minecraft resource pack test directory
function transferResourcePack() {
  return gulp
    .src(devResourcePackPath)
    .pipe(gulp.dest(minecraftDevResourcePackPath));
}

// removes the bundled js files inside the internal behaviour pack's scripts folder
function cleanInternalPackJavascript() {
  return del(
    [
      "./DeathSwapBehaviourPack/scripts/server/**",
      "./DeathSwapBehaviourPack/scripts/client/**",
    ],
    { force: true }
  );
}

// removes behaviour pack from Minecraft's dev location
function cleanMinecraftDevBehaviourPack() {
  return del(minecraftDevBehaviourPackPath + "/**", { force: true });
}

// removes resource pack from Minecraft's dev location
function cleanMinecraftDevResourcePack() {
  return del(minecraftDevResourcePackPath + "/**", { force: true });
}

// removes the compiled .mcpacks and .mcaddons from bin/
function cleanBin() {
  return del("./bin/**", { force: true });
}

// zips behaviour pack dev folder into a .mcpack
function zipBehaviourPack() {
  return gulp
    .src(devBehaviourPackPath)
    .pipe(zip(prodBehaviourPackName))
    .pipe(gulp.dest("./bin"));
}

// zips resource pack dev folder into a .mcpack
function zipResourcePack() {
  return gulp
    .src(devResourcePackPath)
    .pipe(zip(prodResourcePackName))
    .pipe(gulp.dest("./bin"));
}

// zips both the behaviour/resource .mcpack into a single .mcaddon
function zipAddon() {
  return gulp
    .src(["./bin/" + prodBehaviourPackName, "./bin/" + prodResourcePackName])
    .pipe(zip(prodAddonName))
    .pipe(gulp.dest("./bin"));
}

// the steps to run to hot-reload the behaviour pack
const handleBehaviourPackChanges = series(
  cleanMinecraftDevBehaviourPack,
  transferBehaviourPack
);

// the steps to run to hot-reload the resource pack
const handleResourcePackChanges = series(
  cleanMinecraftDevResourcePack,
  transferResourcePack
);

// the steps to run to hot-reload the Javascript/Typescript
const handleJavascriptTypescriptChanges = series(
  lintWithEslint,
  cleanInternalPackJavascript,
  compile
);

// the steps to take to create the production behaviour pack
const createProdBehaviourPack = series(
  lintWithEslint,
  cleanInternalPackJavascript,
  compile,
  zipBehaviourPack
);

// the steps to take to create the production .mcaddon
const creatProdAddon = series(
  cleanBin,
  parallel(createProdBehaviourPack, zipResourcePack),
  zipAddon
);

// the steps to take to build the entire pack locally
// this doesn't create the .mcaddon, it instead refreshs the version stored in the Bedrock dev pack folders
const buildlocal = parallel(
  handleResourcePackChanges,
  series(handleJavascriptTypescriptChanges, handleBehaviourPackChanges)
);

// hot reload dev packs on save
exports.development = function () {
  // watch behaviour pack changes
  watch(devBehaviourPackPath, { events: "all" }, handleBehaviourPackChanges);

  // watch resource pack changes
  watch(
    devResourcePackPath,
    { events: "all", ignoreInitial: false },
    handleResourcePackChanges
  );

  // watch javascript/typescript changes
  watch(
    javascriptTypescript,
    { events: "all", ignoreInitial: false },
    handleJavascriptTypescriptChanges
  );
};

// builds the resource/behaviour packs and places them in the Bedrock dev pack folders
exports.buildlocal = buildlocal;

// create zipped .mcpack for distribution
exports.production = creatProdAddon;

// tests the linting and compilation of the Javascript/Typescript
exports.testLintAndCompilation = handleJavascriptTypescriptChanges;
