<template>
  <!-- <router-view v-slot="{ Component }">
    <keep-alive exclude="GoodsDetail">
      <component :is="Component" />
    </keep-alive>
  </router-view> -->
  <div>
    <keep-alive exclude="OrderDetail,Confirm,MainForm,OrderDoing,OrderDone,Verificate,Register,Password,Mine,Security">
      <router-view></router-view>
    </keep-alive>
    <!-- <router-view></router-view> -->
  </div>

</template>

<script>

  export default {
    name: 'App',
    components: {

    }

  }
</script>
<style>
  @import "./assets/css/reset.css";

  body {
    background-color: rgb(230, 241, 255);
  }
</style>