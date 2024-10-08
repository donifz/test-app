/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: '127.0.0.1',
            port: '3000',
            pathname: '/uploads/**',
          },
          {
            protocol: 'https',
            hostname: 'celebrated-charisma-production-7df4.up.railway.app',
            port: '',
            pathname: '/uploads/**',
          },
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '3000',
            pathname: '/uploads/**',
          },
        ],
      },
	webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });
        return config;
    },
};

export default nextConfig;
