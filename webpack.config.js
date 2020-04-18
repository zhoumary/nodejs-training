const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/tests/specs.js',
    target: 'node',
    mode: 'production',
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'specs.bundle.js',
        libraryTarget: 'commonjs2'
    },
    node: {
        global: false,
        __filename: true,
        __dirname: true,
    }
};