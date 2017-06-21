import webpack from 'webpack';
import {ROOT_DIR} from './tasks/core/consts';

export default {
    entry: [
        `${ROOT_DIR}/src/js/index.js`
    ],
    output: {
        path: `${ROOT_DIR}/dist/js`,
        filename: 'index.js',
        pathinfo: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    `${ROOT_DIR}/src`
                ],

                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ["env"],
                            plugins: [
                                "transform-remove-strict-mode",
                                "transform-helper-modules",
                                "transform-object-rest-spread"
                            ]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            comments: false,
            sourceMap: false
        })
    ]
};