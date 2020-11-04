const path = require('path');

module.exports = {
    mode: "none",
    target: "web",
    entry: {
        server: './src/server/server.ts',
        client: './src/client/client.ts',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts'],
    },
    output: {
        path: path.resolve(__dirname, `DeathSwapBehaviourPack/scripts`),
        filename: '[name]/[name].js'
    },
    optimization: {
        minimize: false
    }
};
