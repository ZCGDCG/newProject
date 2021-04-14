import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 注册全局组件

new Vue({
  render: h => h(App),
  router,//所有组件都可以看到$router和$route <router-link>和<router-view>
}).$mount('#app')