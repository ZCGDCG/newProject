/* 
注册路由组件
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
//声明使用vue插件
Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',//项目路由中不加#
    //项目中所有的路由
    routes
})