/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["tripimages1.s3.amazonaws.com", "composetrip.com", "localhost"],
  },
};

module.exports = nextConfig;
