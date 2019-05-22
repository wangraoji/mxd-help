import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

// 引入全局scss
import "./styles/index.scss";

// 引入按需加载的element
import element from './element';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(element)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

