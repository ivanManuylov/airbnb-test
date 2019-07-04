import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueBemCn from 'vue-bem-cn';
import 'materialize-css/dist/js/materialize'

Vue.config.productionTip = false;

const bemConfig = {
  delimiters: {
    el: '__', // element delimeter
    mod: '_', // modifier delimeter
    modVal: '_', // value delimeter for modifier
  }
};
Vue.use(vueBemCn, bemConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
