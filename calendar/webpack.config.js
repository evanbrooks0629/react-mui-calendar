var path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/Calendar.js",
    output: {
        path: path.resolve("build"),
        filename: "Calendar.js",
        libraryTarget: "commonjs2"
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/, exclude: /node_modules/, loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    externals: {
        react: "react"
    }
};