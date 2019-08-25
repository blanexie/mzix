<template>
  <el-container>
    <el-main>
      <Edit></Edit>
    </el-main>
  </el-container>
</template>

<script>
import edit from "./edit.vue";

export default {
  name: "mxContent",
  components: {
    Edit: edit
  },
  data:function(){
    return {
      
    };
  }
};
</script>
<style lang="scss"  scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
</style>
