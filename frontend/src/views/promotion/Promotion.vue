<template>
  <div>
    <nav-bar class="nav_bar">
      <template #center>
        <div>
          Promotion
        </div>
      </template>
    </nav-bar>
    <div class="empty">
      <img class="icon_empty" src="@/assets/icon/jieji/gift_empty.png"></img>
      <div class="text_empty">No promotion at this moment</div>
    </div>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
  // @ is an alias to /src
  import NavBar from "@/components/navbar/NavBar.vue"
  import MainTabbar from '@/components/tabbar/MainTabBar.vue'

  export default {
    name: 'Setting',
    components: {
      NavBar,
      MainTabbar
    },
    methods: {
      goBack() {
        this.$router.back()
      },
    },
  }
</script>
<style>
  .mine_box {
    position: absolute;
    top: 4rem;
    left: 5vw;
  }

  .selection {
    margin: 10px auto;
    width: 90vw;
    height: 8vh;
    border-bottom: 1px solid #666;
    display: flex;
    align-items: center;
  }

  .client_img {
    width: 30px;
    height: 30px;
    margin-right: 3px;
  }

  .order_img {
    width: 35px;
    height: 35px;
  }

  .client {
    background-color: transparent;
    width: 90vw;
    font-weight: 400;
    font-size: 15px;
    display: flex;
    justify-content: left;
    color: #666;
    padding: 10px 13px;
    border: 0;
  }

  .mine_icon_youla {
    transform: translateY(-50%) rotate(-90deg);
    height: 20px;
    width: 20px;
    margin-top: 18px;
  }

  .text_empty {
    position: absolute;
    top: 40vh;
    left: 18vw;
    /* color:rgb(191,191,191); */
    color: #6ea5e9;
    font-size: 20px;

  }

  .icon_empty {
    position: absolute;
    top: 20%;
    left: 35%;
    height: 130px;
    width: 120px;
  }
</style>