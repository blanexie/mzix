import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(ElementUI);

const store = new Vuex.Store({


  
});

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
