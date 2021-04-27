const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'test.ts'),
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: [/node_modules/, /dist/, /tests/],
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname),
        library: 'Libstorefront',
        libraryTarget: 'umd',
        globalObject: 'this',
        umdNamedDefine: true
    },
    devServer: {
        contentBase: path.join(__dirname),
        compress: true,
        port: 9005
    },
    plugins: []
};
