// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // this will apply to both plain `.js` files
            // AND `<script>` blocks in `.vue` files
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            // this will apply to both plain `.css` files
            // AND `<style>` blocks in `.vue` files
            // {
            //     test: /\.s(c|a)ss$/,
            //     use: [
            //         'vue-style-loader',
            //         'css-loader',
            //         {
            //             loader: 'sass-loader',
            //             // Requires sass-loader@^7.0.0
            //             options: {
            //                 implementation: require('sass'),
            //                 fiber: require('fibers'),
            //                 indentedSyntax: true, // optional
            //                 data: `@import "@/styles.scss";`
            //             },
            //             // Requires sass-loader@^8.0.0
            //             options: {
            //                 implementation: require('sass'),
            //                 sassOptions: {
            //                     fiber: require('fibers'),
            //                     indentedSyntax: true, // optional
            //                     data: `@import "@/styles.scss";`
            //                 },
            //             },
            //         },
            //     ],
            // }
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        },
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ]
}