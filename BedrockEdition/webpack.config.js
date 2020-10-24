const path = require('path');

module.exports = {
    mode: "none",
    target: "node",
    entry: {
        server: './src/server.js',
        client: './src/client.js',
    },
    output: {
        path: path.resolve(__dirname, `DeathSwapBehaviourPack/scripts`),
        filename: '[name]/deathswap-[name].bundle.js'
    },
    optimization: {
        minimize: false
    }
};
