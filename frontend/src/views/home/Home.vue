<template>
  <div>
    <nav-bar class="nav_bar">
      <template #center>
        <div>
          Brisbane Tour
        </div>
      </template>
    </nav-bar>
    <home-nav class="home_nav"></home-nav>
    <home-service></home-service>
    <home-ques></home-ques>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
  import MainTabbar from '@/components/tabbar/MainTabBar.vue'
  import NavBar from "@/components/navbar/NavBar.vue"
  import HomeNav from "./homecomp/HomeNav.vue"
  import HomeService from "./homecomp/HomeService.vue"
  import HomeQues from "./homecomp/HomeQues.vue"
  export default {
    name: 'Home',
    components: {
      MainTabbar,
      NavBar,
      HomeNav,
      HomeService,
      HomeQues
    }
  }
</script>
<style scoped>

</style>