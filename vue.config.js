const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
// const deps = require('./package.json').dependencies;

module.exports = {
    devServer: {
        port: 8085,
    },
    publicPath: process.env.NODE_ENV === 'development' ? "/" : "https://home-wmf.vercel.app/",
    configureWebpack: {
        plugins: [
            new ModuleFederationPlugin({
                name: "home",
                filename: "remoteHomeEntry.js",
                exposes: {
                    "./Home": "./src/views/Home.vue",
                },
                // shared: {
                //     vuex: {
                //         eager: true,
                //         singleton: true,
                //         requiredVersion: deps.vuex
                //     }
                // }
            }),
        ],
    },
};