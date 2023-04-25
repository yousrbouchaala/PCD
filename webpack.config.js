import { resolve as _resolve } from 'path';



export const devtool = 'inline-source-map';
export const resolve = {
  alias: {
    react: _resolve('./node_modules/react')
  },

};
export const entry = './src/index.js';
export const output = {
  filename: 'bundle.js',
  path: _resolve(__dirname, 'dist')
}; 
module.exports = function override(config, env) {
    //do stuff with the webpack config...
     rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        } ,
      },
      resolve: {
		fullySpecified: false
	}
    }, {
    test: /\.css$/,
    use: [
      'style-loader',
      'css-loader',
      'postcss-loader',
    ],
  },
  ]
    config.resolve.fallback = {
        url: require.resolve('url'),
        assert: require.resolve('assert'),
        crypto: require.resolve('crypto-browserify'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        os: require.resolve('os-browserify/browser'),
        buffer: require.resolve('buffer'),
        stream: require.resolve('stream-browserify'),
    };
    config.plugins.push(
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        }),
    );

    return config;
}


