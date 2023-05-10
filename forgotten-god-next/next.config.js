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


  	compiler: {
		styledComponents: true,
  	},
  	images: {
		domains: ["forgotten-god.onrender.com"],
  	},
  	experimental: {
		serverActions: true,
  	},
};

module.exports = nextConfig;
