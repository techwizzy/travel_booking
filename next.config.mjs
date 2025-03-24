/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          'images.unsplash.com',
          'pixabay.com',
          'cdn.pixabay.com',
        ],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'cdn.pixabay.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'pixabay.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'ui-avatars.com',
            port: '',
            pathname: '/**',
          },
        ], 
      },
};

export default nextConfig;
