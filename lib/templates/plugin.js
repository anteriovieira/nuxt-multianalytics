import Vue from 'vue'
import VueMultianalytics from 'vue-multianalytics'

export default async function ({ app: { router } }) {
  const config = <%= serialize(options.config) %>
  const mixin = <%= serialize(options.mixin) %>

  <% Object.keys(options.customModules).forEach(name => { %>
    VueMultianalytics.addCustomModule('<%= name %>', <%= serialize(options.customModules[name]) %>)
  <% }) %>

  Vue.use(VueMultianalytics, Object.assign({
    routing: { vueRouter: router }
  }, config), mixin)
}
