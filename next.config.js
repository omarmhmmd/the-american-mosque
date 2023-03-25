module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.us-west-2.amazonaws.com',
        port: '',
        pathname: '/secure.notion-static.com/**',
      },
      {
        protocol: 'https',
        hostname:'res.cloudinary.com',
        port: '',
        pathname:'/dzyqsptiy/image/upload/**'
      },
    ],
  },
}