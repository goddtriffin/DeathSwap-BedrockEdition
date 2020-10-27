const path = require('path');

module.exports = {
    mode: "none",
    target: "web",
    entry: {
        server: './src/server.js',
        client: './src/client.js',
    },
    output: {
        path: path.resolve(__dirname, `DeathSwapBehaviourPack/scripts`),
        filename: '[name]/[name].js'
    },
    optimization: {
        minimize: false
    }
};
