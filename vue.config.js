const { defineConfig } = require('@vue/cli-service')
const { modifyVars } = require('./src/utils/modifyVars')
const createThemeColorReplacerPlugin = require('./src/theme/config')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  outputDir: 'dist',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars,
          javascriptEnabled: true,
        },
      },
    },
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/style/index.less')],
    },
  },
  chainWebpack: config => {
    config.resolve.alias.set('vue-i18n', 'vue-i18n/dist/vue-i18n.cjs.js')
  },
  configureWebpack: config => {
    config.plugins.push(createThemeColorReplacerPlugin())
  },
})
