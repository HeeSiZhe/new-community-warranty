module.exports = {

	devServer: {
		open: false,
		proxy: {
			'/': {
				target: 'http://127.0.0.1:3007//',
				changeOrigin: true,
				pathRewrite: { '^/': 'http://127.0.0.1:3007/' }
			}
		}
	}
}