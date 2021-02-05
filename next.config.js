// next.config.js
const withLess = require('@zeit/next-less');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');

module.exports = withCSS(withLess(withImages()));
// module.exports = withCSS(
// 	withLess({
// 		webpack: (
// 			config,
// 			{ buildId, dev, isServer, defaultLoaders, webpack }
// 		) => {
// 			config.module.rules.push({
// 				test: [
// 					/\.bmp$/,
// 					/\.gif$/,
// 					/\.jpe?g$/,
// 					/\.png$/,
// 					/\.svg$/,
// 					/\.PNG$/
// 				],
// 				loader: require.resolve('url-loader')
// 			});

// 			return config;
// 		}
// 	})
// );
