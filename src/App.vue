<!--
 * @Author: zhilutianji
 * @Date: 2021-12-30 17:46:20
 * @LastEditors: zhilutianji
 * @LastEditTime: 2022-01-04 19:37:23
 * @Description: file content
 * @FilePath: \app\src\App.vue
-->
<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <!-- 在Home、Search显示的，在登录、注册隐藏 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    this.$store.dispatch("categoryList");
  },
};
</script>

<style>
</style>
