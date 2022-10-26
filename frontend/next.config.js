/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['amorim-drywall-upload.s3.amazonaws.com', 'amorim-drywall-upload.s3.sa-east-1.amazonaws.com', 'localhost'],
  }
}

module.exports = nextConfig
