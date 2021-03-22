<template>
  <div class="order_container">
    <nav-bar class="nav_bar">
      <template #center>
        <div>
          My Orders
        </div>
      </template>
    </nav-bar>
    <order-nav @navChange="HandleNavChange"></order-nav>
    <div v-show="isShow">
      <order-doing :key="$store.state.doingKey"></order-doing>
    </div>
    <div v-show="!isShow">
      <order-done :key="$store.state.doneKey"></order-done>
    </div>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
  import MainTabbar from '@/components/tabbar/MainTabBar.vue'
  import NavBar from "@/components/navbar/NavBar.vue"
  import OrderNav from "./ordercomp/OrderNav.vue"
  import OrderDoing from "./ordercomp/OrderDoing.vue"
  import OrderDone from "./ordercomp/OrderDone.vue"

  import axios from 'axios'
  export default {
    name: 'Order',
    components: {
      MainTabbar,
      NavBar,
      OrderNav,
      OrderDoing,
      OrderDone
    },
    data() {
      return {
        isShow: true,
      }
    },
    methods: {
      HandleNavChange(item) {
        // this.randomKey++
        // this.$toast.show('hello world')
        this.isShow = item
      }
    }
  }
</script>
<style scoped>
  .order_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>