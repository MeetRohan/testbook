/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/admin-dashboard",
        has: [
          {
            type: "cookie",
            key: "next-auth.session-token",
            value: "(.*)",
          },
        ],
        permanent: false,
        destination: "/login",
      },
    ];
  },
};
//export default nextConfig;
module.exports = nextConfig;
