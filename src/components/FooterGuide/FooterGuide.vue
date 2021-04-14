<template>
  <div class="footer-guide">
   <span class="guide-item " :class="{on: $route.path==='/msite'}" @click="goto('/msite')">
     <i class="iconfont icon-waimai"></i>
     <span>首页</span>
   </span>
   <span class="guide-item" :class="{on: $route.path==='/search'}" @click="goto('/search')">
     <i class="iconfont icon-sousuo" ></i>
     <span>搜索</span>
   </span>
   <span class="guide-item" :class="{on: $route.path==='/order'}" @click="goto('/order')">
     <i class="iconfont icon-dingdan" ></i>
     <span>订单</span>
   </span>
   <span class="guide-item" :class="{on: $route.path==='/profile'}" @click="goto('/profile')">
     <i class="iconfont icon-geren" ></i>
     <span>个人</span>
   </span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:'FooterGuide',
    methods:{
      goto(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
  .footer-guide
    top-border-1px(#ccc)
    position fixed
    left 0
    bottom 0
    height 80px
    width 100%
    overflow hidden
    .guide-item
      margin-top 5px
      display flex
      flex-direction column
      text-align center
      width 25%
      float left 
      &.on
        color $green
      span 
        margin-top 5px
        font-size 22px
        i 
          font-size 22px

</style>
