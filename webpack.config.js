//--------------------------------------------------------
//-- webpack configuration
//--------------------------------------------------------

'use strict';

const merge          = require('lodash.merge');
const libraryBuilder = require('@absolunet/library-builder');

libraryBuilder.setRoot(__dirname);


//-- Node.js
const nodeConfig = merge({}, libraryBuilder.config.node, {
	externals: [
	]
});


//-- Web
const webExternals = {
	externals: {
	}
};

const webConfig    = merge({}, libraryBuilder.config.web, webExternals);
const webES5Config = merge({}, libraryBuilder.config.webES5, webExternals);

module.exports = [nodeConfig, webConfig, webES5Config];

module.exports.forEach((config) => {
	config.module = config.module || {};
	config.module.rules = config.module.rules || [];
	config.module.rules.push({
		enforce: "pre",
		test: /\.js$/,
		exclude: /node_modules/,
		loader: 'eslint-loader'
	});
});
