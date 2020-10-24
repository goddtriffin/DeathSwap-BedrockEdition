const path = require('path');

module.exports = {
    entry: {
        server: './src/server.js',
        client: './src/client.js',
    },
    output: {
        path: path.resolve(__dirname, `DeathSwapBehaviourPack/scripts`),
        filename: '[name]/deathswap-[name].bundle.js'
    }
};
