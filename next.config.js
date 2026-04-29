/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    COMMENT_FORM: process.env.COMMENT_FORM,
  },
}

module.exports = nextConfig
