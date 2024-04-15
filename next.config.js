/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    // loader: 'custom',
    // loaderFile: './imageLoader.ts'
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: ''
        // pathname: '/o/**'
      }
    ]
  },
  transpilePackages: ['three']
  // reactStrictMode: false
};

module.exports = nextConfig;
