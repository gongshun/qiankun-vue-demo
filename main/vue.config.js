const path = require('path');

module.exports = {
  transpileDependencies: ['single-spa','qiankun','import-html-entry'],
  configureWebpack: {
    externals: {
      'vue': 'Vue',
      'vuex': 'Vuex',
      'vue-router': 'VueRouter',
      'vue-i18n': 'VueI18n',
      'element-ui': 'ELEMENT',
    }
  }
};

