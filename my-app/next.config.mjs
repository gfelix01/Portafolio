/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        pathname: '/**', // Esto permite todas las rutas de imágenes en ese dominio
      },
    ],
  },
};

export default nextConfig;
