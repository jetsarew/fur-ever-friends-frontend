/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.f4th.dev',
        pathname: '**',
      },
    ],
  },
  output: "standalone",
};

export default nextConfig;
