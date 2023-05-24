/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

const withMarkdoc = require('@markdoc/next.js');

module.exports = withMarkdoc(/* options */)({
 pageExtensions: ['md', 'mdoc', 'js', 'jsx', 'ts', 'tsx']
});