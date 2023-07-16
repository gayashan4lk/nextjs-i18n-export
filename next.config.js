/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'standalone',
	reactStrictMode: true,
	i18n: {
		locales: ['en', 'si', 'ta'],
		defaultLocale: 'en',
	},
};

module.exports = nextConfig;
