const { 
	override, 
	fixBabelImports, 
	disableEsLint,
	addWebpackAlias,
	addLessLoader, 
	addDecoratorsLegacy
} = require('customize-cra');


/* 基本配置 */
const path = require('path')

const px2rem = require('postcss-px2rem-exclude');

// config-overrides.js
module.exports = {
    webpack: function (config, env) {
        config.module = {
            rules: [
                {
                    test: /\.css$/,
                    exclude: [/node_modules/],
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,        
                                localIdentName: '[name]-[local]-[hash:base64:5]',  
                            }
                        },{
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    require('autoprefixer'),
                                    px2rem({remUnit:75,exclude: /node_modules/i})
                                ]
                            }
                        },{
				            loader: MiniCssExtractPlugin.loader,
				            options: {
				              // 这里可以指定一个 publicPath
				              // 默认使用 webpackOptions.output中的publicPath
				              publicPath: './amall/'
				            },
				        },{
                          loader: 'less-loader'
                        },{
                            loader: 'px2rem-loader',
                            options: {
                              remUni: 75,
                              remPrecision: 8
                            },
                        }
                    ]
                }
            ]
        }
        return config;
    }
};


module.exports = override(

    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),

    disableEsLint(),

    addWebpackAlias({
	    "@": path.resolve(__dirname, 'src'),
	    "@views": path.resolve(__dirname, 'src/views'),
	    "@comp": path.resolve(__dirname, 'src/components'),
	    "@router": path.resolve(__dirname, 'src/router'),
	    "@utils": path.resolve(__dirname, 'src/utils'),
	    "@redux": path.resolve(__dirname, 'src/redux'),
	    "@store": path.resolve(__dirname, 'src/redux/modules')
	}),
	addLessLoader({        
        lessOptions: {
            javascriptEnabled: true,
            // modifyVars: { '@primary-color': '#1DA57A' },
        },       
    }),
);