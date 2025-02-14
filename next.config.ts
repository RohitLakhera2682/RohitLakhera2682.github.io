const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/RohitLakhera2682.github.io' : '',
  basePath: isProd ? '/RohitLakhera2682.github.io' : '',
  output: 'export'
};

export default nextConfig;