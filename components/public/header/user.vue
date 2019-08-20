<template>
  <div class="m-user">
    <template v-if="username">
      欢迎您，<span class="username">{{user}}</span>
    </template>
    <template v-else>
      <nuxt-link
        to="/login"
        class="login">登陆
      </nuxt-link>
      <nuxt-link
        to="/register"
        class="register">注册
      </nuxt-link>
    </template>
  </div>
</template>

<script>
  export default {
    name: "user",
    data() {
      return {
        user: ''
      }
    }
  }
</script>

<style scoped>

</style>
