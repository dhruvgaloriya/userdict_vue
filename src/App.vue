<template>
  <div id="app">
    <h3 class="center">Welcome to my first Vue App</h3>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    saveForm: function() {
      console.log("ok");
    },
  },
};
</script>

<style lang="less">
@import "../node_modules/@gofynd/nitrozen-vue/dist/nitrozen.css";

body {
  background-color: #f8f8f8;
}
.center {
  text-align: center;
}
#app {
  font-family: Inter, sans-serif;
  color: #41434c;
}
</style>
