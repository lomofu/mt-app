<template>
  <div class="m-nav el-row ">
    <ul class="nav">
      <li class="list">
        <nuxt-link to="/my">我的美团</nuxt-link>
        <dl class="s-list hvr-hang animated fadeInUp">
          <dd><nuxt-link to="/order">我的订单</nuxt-link></dd>
          <dd><nuxt-link to="/order">我的收藏</nuxt-link></dd>
          <dd><nuxt-link to="/order">抵用券</nuxt-link></dd>
          <dd><nuxt-link to="/order">账户设置</nuxt-link></dd>
        </dl>
      </li>
      <li>
        <nuxt-link to="/order">手机APP</nuxt-link>
      </li>
      <li class="list bd">
        <nuxt-link to="/center">商家中心</nuxt-link>
        <dl class="s-list hvr-hang animated fadeInUp">
          <dd><nuxt-link to ="/userCenter">登陆商家中心</nuxt-link></dd>
          <dd><nuxt-link to="/coop">我想合作</nuxt-link></dd>
          <dd><nuxt-link to="/wap">免费手机开店</nuxt-link></dd>
        </dl>
      </li>
      <li class="list site">
        <nuxt-link to="/site">网站导航</nuxt-link>
        <div class="subContainer hvr-hang animated fadeInUp">
          <dl class="hotel">
            <dt>标题</dt>
            <dd>1</dd>
            <dd>1</dd>
            <dd>1</dd>
            <dd>1</dd>
            <dd>1</dd>
          </dl>
          <dl class="food">
            <dt>标题</dt>
            <dd>2</dd>
            <dd>2</dd>
            <dd>2</dd>
            <dd>2</dd>
            <dd>2</dd>
          </dl>
          <dl class="movie">
            <dt>标题</dt>
            <dd>3</dd>
            <dd>3</dd>
            <dd>3</dd>
            <dd>3</dd>
            <dd>3</dd>

          </dl>
          <dl class="app">
            <dt>标题</dt>
            <dd>4</dd>
            <dd>3</dd>
            <dd>3</dd>
            <dd>3</dd>
            <dd>3</dd>

          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "mynav"
    }
</script>

<style scoped>
  @import "@/assets/css/public/layout.scss";
</style>
