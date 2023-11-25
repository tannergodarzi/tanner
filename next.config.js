module.exports = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "s3.us-west-2.amazonaws.com",
			},
			{
				protocol: "https",
				hostname: "media.giphy.com",
			},
			{
				protocol: "https",
				hostname: "place-hold.it",
			},
		],
		minimumCacheTTL: 60,
	},
	basePath: "",
};
