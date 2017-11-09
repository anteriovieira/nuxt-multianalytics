const { resolve } = require('path')

module.exports = function module (moduleOptions, moduleMixin) {
  const options = this.options['multianalytics']['options'] || moduleOptions
  const mixin = this.options['multianalytics']['mixin'] || moduleMixin

  this.addPlugin({
    src: resolve(__dirname, './templates/plugin.js'),
    fileName: 'multi-analytics.js',
    options: { options, mixin },
    ssr: false
  })
}
