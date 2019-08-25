<template>
  <div id="app">
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <mxMenu></mxMenu>
      </el-aside>

      <mxContent></mxContent>
    </el-container>
  </div>
</template>

<script>
import mxContent from "./components/content.vue";
import mxMenu from "./components/menu.vue";

export default {
  name: "app",
  components: {
    mxContent,
    mxMenu
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>
