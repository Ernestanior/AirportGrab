<template>
  <div class="mine_container">
    <nav-bar class="nav_bar">
      <template #center>
        <div>
          My Profile
        </div>
      </template>
      <template #right>
        <div class="setting" @click="goSetting">
          <img src="@/assets/icon/setting.png" alt="">
        </div>
      </template>
    </nav-bar>
    <div class="mine_content">
      <div class="box_1">
        <div v-if="$store.state.user.email">
          <div class="profile">
            <img class="user_pic" src="@/assets/icon/jieji/userpic.png" alt="">
            <div>
              <span>{{$store.state.user.name}}</span>
              <span>{{$store.state.user.email}}</span>
            </div>
          </div>
          <div class="logout_btn" @click="Logout">Logout</div>
        </div>
        <div v-else>
          <div class="login_btn" @click="BtnLogin">Login</div>
          <div class="register_btn" @click="BtnRegister">Register</div>
        </div>
      </div>
      <div class="mine_box">
        <div class="selection">
          <img class="client_img" src="@/assets/icon/jieji/client.png"></img>
          <button class="client">Contact Customer Service</button>
          <img class="mine_icon_youla" src="@/assets/icon/jieji/youla.png"></img>
        </div>
        <div class="selection">
          <img class="order_img" src="@/assets/icon/jieji/order.png"></img>
          <button class="client" @click="goOrder">My Orders</button>
          <img class="mine_icon_youla" src="@/assets/icon/jieji/youla.png"></img>
        </div>
      </div>
    </div>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
  // @ is an alias to /src
  import MainTabbar from '@/components/tabbar/MainTabBar.vue'
  import NavBar from "@/components/navbar/NavBar.vue"
  export default {
    name: 'Mine',
    components: {
      MainTabbar,
      NavBar
    },
    data() {
      return {
        userpic: "@/assets/icon/jieji/userpic.png"
      }
    },
    methods: {
      BtnLogin() {
        this.$router.push("/login")
      },
      BtnRegister() {
        this.$router.push("/register")
      },
      Logout() {
        this.$store.commit("clearUser")
        console.log(this.$store.state);
      },
      goSetting() {
        if (this.$store.state.user.email) {
          this.$router.push("/setting")
        }
        else {
          this.$model({
            show: true,
            title: "Hint",
            content: "Please login first",
            confirmButton: true,
            cancelButton: true,
            confirmCallBack: () => {
            },
            cancelCallBack: () => {
            }
          });
        }
      },
      goOrder() {
        if (this.$store.state.user.email) {
          this.$router.push("/order")
        }
        else {
          this.$model({
            show: true,
            title: "Hint",
            content: "Please login first",
            confirmButton: true,
            cancelButton: true,
            confirmCallBack: () => {
            },
            cancelCallBack: () => {
            }
          });
        }
      }
    },
  }
</script>

<style scoped>
  .box_1 {
    height: 28vh;
    width: 100vw;
    background: linear-gradient(180deg, #1653c4, #83abfc);
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
    position: absolute;
    top: 3rem;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .profile {
    position: absolute;
    top: 3vh;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }

  .profile>div {
    display: flex;
    justify-content: center;
    padding: 0 15px;
    flex-direction: column;
  }

  .profile>div>span:first-child {
    margin-bottom: 15px;
  }

  .logout_btn {
    width: 35vw;
    height: 5vh;
    border: 1px solid #fff;
    font-size: 20px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin-top: 10vh;
  }

  .user_pic {
    height: 10vh;
    width: 10vh;
  }

  .clearfix::after {
    content: "";
    clear: both;
    display: block;
    overflow: hidden;
  }

  .login_btn,
  .register_btn {
    width: 35vw;
    height: 5vh;
    border: 1px solid #fff;
    font-size: 20px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin-bottom: 30px;
  }

  .user_title {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 25px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
  }

  .user_icon {
    width: 75px;
    height: 75px;
    border-radius: 33px;
    margin-bottom: 10px;
  }

  .user_exit {
    margin-top: 15x;
    padding: 5px 10px;
    border: 1px solid #fff;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mine_box {
    position: absolute;
    top: 35vh;
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
    width: 33px;
    height: 33px;
  }

  .order_img {
    width: 28px;
    height: 28px;
    margin: 0 4px 0 4px;
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

  .setting {
    position: absolute;
    top: 1vh;
    right: 4vw
  }

  .setting>img {
    width: 24px;
    height: 24px;
  }
</style>