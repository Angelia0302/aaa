require('./check-versions')()

var config = require('../config');
if (!process.env.NODE_ENV) {
	process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}
var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()

var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
	publicPath: webpackConfig.output.publicPath,
	quiet: true,
	watchOptions: {
		poll: process.platform.indexOf('win') > -1 ? false : 100
	}
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
	path: config.dev.prjPath + '__webpack_hmr',
	log: () => {
	}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
	compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
		hotMiddleware.publish({action: 'reload'})
		cb()
	})
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
	var options = proxyTable[context]
	if (typeof options === 'string') {
		options = {target: options}
	}
	app.use(proxyMiddleware(options.filter || context, options))
});
// proxy middleware options
// var options = {
// 	target: 'https://ou1.verystar.cn', // target host
// 	toProxy: true,
// 	changeOrigin: true,               // needed for virtual hosted sites
// 	router: {
// 		// when request.headers.host == 'dev.localhost:3000',
// 		// override target 'http://www.example.org' to 'http://localhost:8000'
// 		'https://ou.verystar.cn' : 'https://ou1.verystar.cn'
// 	}
// };

// create the proxy (without context)
// var exampleProxy = proxyMiddleware(options);
// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.prjPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

// var uri = 'http://front-dev.verystar.cn:' + port + '/levis/profile'
var uri = 'http://' + config.dev.publicPath + ':' + port + config.dev.prjPath;
var _resolve
var readyPromise = new Promise(resolve => {
	_resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
	console.log('> Listening at ' + uri + '\n')
	// when env is testing, don't need open it
	if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
		opn(uri).then((res) => {
			console.dir(res);
		}, (e) => {
			console.error('Cannot Open Browser!');
		});
	}
	_resolve()
})

var server = app.listen(port)

module.exports = {
	ready: readyPromise,
	close: () => {
		server.close()
	}
}
