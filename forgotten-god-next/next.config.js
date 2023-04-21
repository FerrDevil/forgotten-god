/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {icon: true }
          }
        ]
      }
    )

  
    return config;
  },
  reactStrictMode: true,
  images: {
    domains: ["http://localhost:5000"]
  },
}

module.exports = nextConfig
