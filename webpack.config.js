module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname,
        filename: "./output/bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            }
        ]
    }
}