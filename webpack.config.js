const path = require("path");
// import path from 'path';

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "./src/index.jsx"),
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                // Typescript loader
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    },
                },
            },
            {
                test: /\.s?css$/,
                use: ["style-loader", "css-loader", "sass-loader",],
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10000
                        }
                    }
                ]
            }
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    devServer: {
        host: 'localhost',
        port: 3000,
        historyApiFallback: true,
        open: true
    },
    output: {
        filename: "bundle.js",
        publicPath: "/",
        path: path.resolve(__dirname, "./dist"),
    },
};