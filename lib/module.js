const { resolve } = require('path')
const noop = () => {}
const defaultOptions = {
  options: {},
  mixin: noop,
  customModules: {},
};

module.exports = function module (moduleOptions = {}) {
  const config = Object.assign(defaultOptions, this.options['multianalytics'], moduleOptions);

  this.addPlugin({
    src: resolve(__dirname, './templates/plugin.js'),
    fileName: 'multi-analytics.js',
    options: {
      config: config.options,
      mixin: config.mixin,
      customModules: config.customModules,
    },
    ssr: false
  })
}
