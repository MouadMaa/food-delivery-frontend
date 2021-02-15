const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
	webpack: (config, { isServer }) => {
		// Fixes packages that depend on fs/module module
		if (!isServer) {
			config.node = { fs: 'empty', module: 'empty' }
		}

		return config
	},
	pwa: {
		disable: process.env.NODE_ENV !== 'production',
		dest: 'public',
		sw: 'service-worker.js',
		register: true,
		scope: '/',
		runtimeCaching,
	},
	images: {
		domains: [ 'firebasestorage.googleapis.com' ],
	},
})
