// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// import sweet alert
import SweetAlert2 from 'vue-sweetalert2'

// import toasted notification
import Toasted from 'vue-toasted'

Vue.config.productionTip = false

// use sweet alert
Vue.use(SweetAlert2)

// use toasted
Vue.use(Toasted, {
  duration: 9000,
  position: 'top-left',
  icon: '',
  action: {
    text: 'X',
    onClick: (e, toastObject) => {
      toastObject.goAway(0)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
