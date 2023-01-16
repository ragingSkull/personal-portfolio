/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};

const ContentSecurityPolicy = `
    frame-ancestors 'self';
`

const securityHeaders = [
{
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
},
{
    key: 'X-XSS-Protection',
    value: '1; mode=block'
},
{
    key: 'X-Content-Type-Options',
    value: 'nosniff'
},
{
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
},
{
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
},
{
    key: 'server',
    value: 'Pornhub'
}
]

module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}