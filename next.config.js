const withPWA = require('next-pwa')

module.exports = withPWA({
	webpack: (config, { isServer }) => {
		// Fixes packages that depend on fs/module module
		if (!isServer) {
			config.node = { fs: 'empty', module: 'empty' }
		}

		return config
	},
	pwa: {
		dest: 'public',
		disable: process.env.NODE_ENV !== 'production',
		register: true,
		scope: '/',
		sw: 'service-worker.js',
	},
	images: {
		domains: [ 'firebasestorage.googleapis.com' ],
	},
})
