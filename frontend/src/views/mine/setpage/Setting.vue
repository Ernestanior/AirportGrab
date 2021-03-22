<template>
  <div>
    <nav-bar class="nav_bar">
      <template #left>
        <div class="back" @click="goBack">
          <img src="@/assets/icon/youlawhite.png" alt="">
        </div>
      </template>
      <template #center>
        <div>
          Setting
        </div>
      </template>
    </nav-bar>
    <div class="mine_box">
      <div class="selection" @click="goDetail">
        <img class="client_img" src="@/assets/icon/profile_detail.png"></img>
        <button class="client">Profile Detail</button>
        <img class="mine_icon_youla" src="@/assets/icon/jieji/youla.png"></img>
      </div>
      <div class="selection" @click="goSecurity">
        <img class="order_img" src="@/assets/icon/security.png"></img>
        <button class="client">Account Security</button>
        <img class="mine_icon_youla" src="@/assets/icon/jieji/youla.png"></img>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import NavBar from "@/components/navbar/NavBar.vue"
  export default {
    name: 'Setting',
    components: {
      NavBar
    },
    methods: {
      goBack() {
        this.$router.back()
      },
      goDetail() {
        this.$router.push('/setting/profile')
      },
      goSecurity() {
        this.$router.push('/setting/security')
      }
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
</style>