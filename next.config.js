/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  sassOptions: {
    prependData: `
      @import 'styles/base/_variables.scss';
      @import 'styles/helpers/_mixins.scss';
    `,
  },
};
