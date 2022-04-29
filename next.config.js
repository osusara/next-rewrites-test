const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/info",
        destination: "/about",
      },
    ];
  },
};

module.exports = nextConfig;
