/** @type {import('next').NextConfig} */
const nextConfig = {
  	webpack(config) {
		config.module.rules.push({
	  	test: /\.svg$/,
	  	use: [
			{
		  		loader: "@svgr/webpack",
		  		options: { icon: true },
			},
	  	],
	});
	return config;
  	},

	reactStrictMode: false,
  	compiler: {
		styledComponents: true,
  	},
  	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '5000',
				pathname: '/image/**',
			},
			{
				protocol: 'https',
				hostname: 'forgotten-god.onrender.com',
				port: '',
				pathname: '/image/**',
			  },
		  ],
  	}
};

module.exports = nextConfig;
