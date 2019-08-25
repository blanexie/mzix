<template>
  <div ref="edit"></div>
</template>
<script>
import { Mark } from "../js/Mark.js";

export default {
  name: "mxEdit",
  components: {},
  data() {
    return {
      mark:null,
      markData:
        ' <h1>hhhhhhh</h1><p mark="true" contenteditable="true">11111</p><p mark="true" contenteditable="true">11111</p><p mark="true" contenteditable="true">11111</p> <p mark="true" contenteditable="true">11111</p> '
    };
  },
  mounted(){
    this.mark =  new Mark(this.$refs.edit,this.markData)
  },
  methods: {
   
  }
};
</script>
<style lang="scss"  scoped>
[contenteditable]:focus {
  outline: none;
}
</style>