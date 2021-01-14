// next.config.js
const withLess = require('@zeit/next-less');
const withImages = require('next-images');

// module.exports = withLess(withImages());
module.exports = withLess({
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		config.module.rules.push({
			test: [
				/\.bmp$/,
				/\.gif$/,
				/\.jpe?g$/,
				/\.png$/,
				/\.svg$/,
				/\.PNG$/
			],
			loader: require.resolve('url-loader')
		});

		return config;
	}
});
