import Vue from 'vue'
import VueMultianalytics from 'vue-multianalytics'

export default async function ({ app: { router } }) {
  const config = <%= serialize(options.config) %>
  const mixin = <%= serialize(options.mixin) %>

  Vue.use(VueMultianalytics, Object.assign({
    routing: { vueRouter: router }
  }, config), mixin)

  const ma = Vue.prototype.$multianalytics;

  <% Object.keys(options.customModules).forEach(name => { %>
    <%= serialize(options.customModules[name]) %>

    let customModule = new <%= name %>()

    customModule.init(config.modules[customModule.name])
    ma.modulesEnabled.push(customModule);
  <% }) %>
}
