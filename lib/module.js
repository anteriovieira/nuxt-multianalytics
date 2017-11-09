const { resolve } = require('path')
const noop = () => {}

module.exports = function module (moduleOptions) {
  const options = this.options['multianalytics'] || {}

  const config = options['options'] || moduleOptions['options'] || {}
  const mixin = options['mixin'] || moduleOptions['mixin'] || noop

  this.addPlugin({
    src: resolve(__dirname, './templates/plugin.js'),
    fileName: 'multi-analytics.js',
    options: {config, mixin},
    ssr: false
  })
}
