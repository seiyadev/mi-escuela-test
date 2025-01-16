/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/asistencia",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
