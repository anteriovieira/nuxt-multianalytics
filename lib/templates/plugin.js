import Vue from 'vue'
import VueMultianalytics from 'vue-multianalytics'

export default async function ({ app: { router } }) {
  const config = <%= serialize(options.config) %>
  const mixin = <%= serialize(options.mixin) %>

  <% Object.keys(options.customModules).forEach(name => { %>
  // start custom modules

  VueMultianalytics.addCustomModule('<%= name %>', <%= 
  
  serialize(options.customModules[name]).replace(
    /^(\s*)(\w+)\s*\((.*?)\)\s*\{/,
    (_, spaces, funcName, args) => `class ${name}CustomModule {\n  constructor(${args}) {`
  )
  
  %>)

  // end custom modules
  <% }) %>

  Vue.use(VueMultianalytics, Object.assign({
    routing: { vueRouter: router }
  }, config), mixin)
}
