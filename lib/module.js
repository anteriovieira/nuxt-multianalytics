const { resolve } = require('path')
const noop = () => {}

module.exports = function module (moduleOptions) {
  const config = this.options['multianalytics'] || {}

  const options = config['options'] || moduleOptions['options'] || {}
  const mixin = config['mixin'] || moduleOptions['mixin'] || noop

  this.addPlugin({
    src: resolve(__dirname, './templates/plugin.js'),
    fileName: 'multi-analytics.js',
    options,
    mixin,
    ssr: false
  })
}
