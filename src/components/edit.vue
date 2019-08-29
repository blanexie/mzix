<template>
  <div>
    <button @click="test">测试</button>
    <div ref="edit" class="markdown-body" v-for="(line, index) in lines" :key="index">{{line}}</div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import Line from "../assets/js/Line.js";

export default {
  name: "mxEdit",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  computed: {
    ...mapState(["lines"]),
    ...mapMutations(["addLine", "focus"])
  },
  methods: {
    test() {
      this.$store.commit('addLine',{ line: new Line("#sadsa") });
      this.addLine({ line: new Line("111111") });
      this.addLine({ line: new Line("1. sadsa") });
      this.addLine({ line: new Line("* sadsa") });
    }
  }
};
</script>
<style lang="scss"  scoped>
@import "../assets/css/mark.css";
</style>