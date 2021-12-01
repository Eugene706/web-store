/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  sassOptions: {
    prependData: `
      @import 'styles/base/_variables.scss';
      @import 'styles/helpers/_mixins.scss';
    `,
  },
};
