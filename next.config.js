const withMDX = require('@next/mdx')({
  extension: /\.md?$/,
});

module.exports = withMDX({
  pageExtensions: ['js', 'md'],
});

