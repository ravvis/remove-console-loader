const config = {
	mode: "development",
	entry: "./src/index.js",
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules)/,
			use: [
				"babel-loader", 
				{
					loader: "../../src/index.js",
					options: {
						"exclude": [ "error", "warn"]
					}
				}
			],
		}, ],
	},
};
exports.default = config;