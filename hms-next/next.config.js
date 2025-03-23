/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/py",
        destination: "http://127.0.0.1:8000",
      },
    ];
  },
};

module.exports = nextConfig;
