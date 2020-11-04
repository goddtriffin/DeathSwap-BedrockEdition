const gulp = require("gulp");
const { watch, series, parallel } = require("gulp");
const zip = require('gulp-zip');
const webpack = require("webpack-stream");
var compiler = require("webpack");
const del = require('del');

const gulpOptions = {
    events: 'all',
    ignoreInitial: false
};

const devJavascriptPath = ["./src/*", "./webpack.config.js"];
const devBehaviourPackPath = "./DeathSwapBehaviourPack/**/*";
const devResourcePackPath = "./DeathSwapResourcePack/**/*";

const minecraftDevBehaviourPackPath = "C:/Users/goddt/AppData/Local/Packages/Microsoft.MinecraftUWP_8wekyb3d8bbwe/LocalState/games/com.mojang/development_behavior_packs/DeathSwapBehaviourPack";
const minecraftDevResourcePackPath = "C:/Users/goddt/AppData/Local/Packages/Microsoft.MinecraftUWP_8wekyb3d8bbwe/LocalState/games/com.mojang/development_resource_packs/DeathSwapResourcePack";

const prodBehaviourPackName = "DeathSwapBehaviourPack.mcpack";
const prodResourcePackName = "DeathSwapResourcePack.mcpack";
const prodAddonName = "DeathSwap-BE-v0.0.0.mcaddon";

// bundles the server and client javascript code into bundles via webpack
function compileJavascript() {
    return gulp.src(["./src/server/server.ts", "./src/client/client.ts"])
        .pipe(
            webpack(require("./webpack.config.js"),
            compiler,
            function(err, stats) {
                if (!!err) {
                    console.log("err:", err);
                }
            }
        ))
        .pipe(gulp.dest("DeathSwapBehaviourPack/scripts"));
}

// moves the behaviour pack to the Minecraft behaviour pack test directory
function transferBehaviourPack() {
    return gulp.src(devBehaviourPackPath)
        .pipe(gulp.dest(minecraftDevBehaviourPackPath));
}

// moves resource pack to the Minecraft resource pack test directory
function transferResourcePack() {
    return gulp.src(devResourcePackPath)
        .pipe(gulp.dest(minecraftDevResourcePackPath));
}

// removes the bundled js files inside the internal behaviour pack's scripts folder
function cleanInternalPackJavascript() {
    return del(["./DeathSwapBehaviourPack/scripts/server/**", "./DeathSwapBehaviourPack/scripts/client/**"], {force:true});
}

// removes behaviour pack from Minecraft's dev location
function cleanMinecraftDevBehaviourPack() {
    return del(minecraftDevBehaviourPackPath + "/**", {force:true});
}

// removes resource pack from Minecraft's dev location
function cleanMinecraftDevResourcePack() {
    return del(minecraftDevResourcePackPath + "/**", {force:true});
}

// zips behaviour pack dev folder into a .mcpack
function zipBehaviourPack() {
    return gulp.src(devBehaviourPackPath)
        .pipe(zip(prodBehaviourPackName))
        .pipe(gulp.dest("./bin"));
}

// zips resource pack dev folder into a .mcpack
function zipResourcePack() {
    return gulp.src(devResourcePackPath)
        .pipe(zip(prodResourcePackName))
        .pipe(gulp.dest('./bin'));
}

// zips both the behaviour/resource .mcpack into a single .mcaddon
function zipAddon() {
    return gulp.src(["./bin/" + prodBehaviourPackName, "./bin/" + prodResourcePackName])
        .pipe(zip(prodAddonName))
        .pipe(gulp.dest("./bin"));
}

// hot reload dev packs on save
exports.development = function() {
    // watch behaviour pack changes
    watch(devBehaviourPackPath, {events: 'all'}, series(cleanMinecraftDevBehaviourPack, transferBehaviourPack));

    // watch resource pack changes
    watch(devResourcePackPath, {events: 'all', ignoreInitial: false}, series(cleanMinecraftDevResourcePack, transferResourcePack));

    // watch javascript changes
    watch(devJavascriptPath, {events: 'all', ignoreInitial: false}, series(cleanInternalPackJavascript, compileJavascript));
};

// create zipped .mcpack for distribution
exports.production = series(
    parallel(
        series(compileJavascript, zipBehaviourPack),
        zipResourcePack
    ),
    zipAddon
);
