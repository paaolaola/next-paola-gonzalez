/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    metadataBase: new URL('https://degatosyperros.vercel.app/'), 
  },
};

export default nextConfig;
