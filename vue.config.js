const path = require('path');

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, './src/scss/styles.scss')]
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/scss/styles.scss";
        `
      }
    }
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'MovieApp';
      return args;
    });
  }
};
