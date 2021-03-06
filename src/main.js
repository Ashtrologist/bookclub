// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueTyperPlugin from 'vue-typer'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
// import VueLazyBackgroundImage from 'vue-lazy-background-images'

Vue.use(Vuetify)
Vue.use(VueTyperPlugin)

Vue.config.productionTip = false
// Vue.component('lazy-background', VueLazyBackgroundImage)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
