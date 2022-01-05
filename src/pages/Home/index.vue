<!--
 * @Author: zhilutianji
 * @Date: 2021-12-30 19:17:45
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-31 19:45:26
 * @Description: file content
 * @FilePath: \app\src\pages\Home\index.vue
-->
<template>
  <div>
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <!-- Floor这个组件：自己在组件内部是没有发请求的，数据是父组件给的 -->
    <Floor />
    <Floor />
    <Brand />
  </div>
</template>

<script>
//非路由组件在使用的时候分为三大步：定义、注册、使用
import ListContainer from "./ListContainer";
import Recommend from "./Recommend";
import Rank from "./Rank";
import Like from "./Like";
import Brand from "./Brand";
import Floor from "./Floor";
export default {
  name: "Home",
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Brand,
    Floor,
  },
};
</script>

<style scoped lang="less">
</style>