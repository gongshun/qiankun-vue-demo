const path = require('path');

module.exports = {
  transpileDependencies: ['single-spa','qiankun'],
  configureWebpack: {
    resolve: {
      alias: {
        './patchers': path.resolve(__dirname, 'src/assets/patchers.js'),
      },
    },
  },
};
