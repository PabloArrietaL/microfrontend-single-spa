import Vue from 'vue'
import App from './App.vue'
import singleSpaVue from 'single-spa-vue'

Vue.config.productionTip = false

const vueLifeCycle = singleSpaVue({
  Vue,
  appOptions: {
      render: h => h(App)
  }
})

export const bootstrap = vueLifeCycle.bootstrap
export const mount = vueLifeCycle.mount
export const unmount = vueLifeCycle.unmount
