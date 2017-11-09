import Vue from 'vue'
import VueMultianalytics from 'vue-multianalytics';

export default async function ({ app: { router } }) {
  const moduleOptions = <%= serialize(options.options) %>
  const moduleMixin = <%= serialize(options.mixin) %>

  Vue.use(VueMultianalytics, Object.assign({
    routing: { vueRouter: router }
  }, moduleOptions), moduleMixin)
}