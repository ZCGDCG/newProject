## 笔记
## FooterGuide
## 设置动态的样式可以用
        :class="{on: $route.path==='/search'}"  //on是属性名，在路由组件中$router和$route是全局可见的，$router是在路由跳转的时候使用，$route可以在浏览器的vue组件中看到，是个对象，其中包含path...
        this.$router.push()
            跳转到不同的url，但这个方法会向history栈添加一个记录，点击后退会返回到上一个页面。
        this.$router.replace()
            同样是跳转到指定的url，但是这个方法不会向history里面添加新的记录，点击返回，会跳转到上上一个页面。上一个记录是不存在的。
        this.$router.go(n)
            相对于当前页面向前或向后跳转多少个页面,类似 window.history.go(n)。n可为正数可为负数。正数返回上一个页面




