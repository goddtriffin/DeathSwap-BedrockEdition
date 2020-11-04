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
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        path: path.resolve(__dirname, `DeathSwapBehaviourPack/scripts`),
        filename: '[name]/[name].js'
    },
    optimization: {
        minimize: false
    }
};
