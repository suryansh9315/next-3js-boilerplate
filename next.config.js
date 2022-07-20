/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
const withTM = require('next-transpile-modules')([
  "three","@react-spring/three","@react-three/fiber"
])

module.exports = withTM,nextConfig
