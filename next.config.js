/** @type {import('next').NextConfig} */
const nextConfig = {
  runtime: 'nodejs',
    images: {
        domains: ['images.pexels.com', 'picsum.photos', 'via.placeholder.com'],
        remotePatterns: [
            {
              protocol: "https",
              hostname: "**",
            },
          ],
    },

}

module.exports = nextConfig
