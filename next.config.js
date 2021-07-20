module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.example.com/:path*',
      },
    ];
  },
  images: {
    domains: ['freesvg.org', 'i.pinimg.com'],
  },
  env: {
    MONGO_DB:
      'mongodb+srv://user:APkuFEX1ak1i8GPQ@cluster0.phxkt.mongodb.net/commerce?retryWrites=true&w=majority',
  },
};
