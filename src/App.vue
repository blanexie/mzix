<template>
  <div id="app">
<<<<<<< HEAD
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <mxMenu></mxMenu>
      </el-aside>

      <mxContent></mxContent>
    </el-container>
=======
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
>>>>>>> my first commit
  </div>
</template>

<script>
<<<<<<< HEAD
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
=======
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
>>>>>>> my first commit
</style>
