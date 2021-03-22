<template>
  <div class="service_container">

    <nav-bar class="nav_bar">
      <template #left>
        <div class="back" @click="goBack">
          <img src="@/assets/icon/youlawhite.png" alt="">
        </div>
      </template>
      <template #center>
        <div>
          Login
        </div>
      </template>
      <template #right>
        <div @click="goRegister">
          SignUp
        </div>
      </template>
    </nav-bar>
    <div class="login_content">
      <div class="title">Email / Password</div>
      <input v-model="user.email" type="text" class="input_text" placeholder="Email">
      <input v-model="user.password" :type="inputType" class="input_text" placeholder="Password">
      <span class="input_icon one" :class="ishide?'hide':'visable'" @click="unHide"></span>
      <div class="new" @click="goRegister">Don`t have a account?</div>
      <div class="forgot" @click="goForgot">Forgot password</div>

      <div class="errmsg">{{errmsg}}</div>
    </div>
    <button class="submit" type="submit" @click="handleLogin">Login</button>
  </div>

</template>

<script>
  // @ is an alias to /src
  import NavBar from "@/components/navbar/NavBar.vue"
  import { login } from "@/network/network.js"
  export default {
    name: 'Login',
    components: {
      NavBar
    },
    data() {
      return {
        user: {
          email: "",
          password: ""
        },
        ishide: true,
        inputType: "password",
        errmsg: ""
      }
    },
    deactivated() {
      this.inputType = "password"
      this.ishide = true
    },
    methods: {
      goBack() {
        this.$router.back()
      },
      async handleLogin() {
        const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/g;
        // console.log(this.email);
        if (reg.test(this.user.email)) {
          this.$loading.show()
          const res = await login(this.user)
          this.$loading.hide()
          if (res.data.status == "200") {
            this.$store.commit('addUser', res.data.result)
            this.$router.replace("/mine")
            this.$store.commit('changeDoingKey')
            this.$store.commit('changeDoneKey')
          } else {
            this.errmsg = "* Sorry, wrong account or password"
          }
        }
        else {
          this.errmsg = "* Please enter correct email"
        }

      },
      goRegister() {
        this.$router.replace("/register")
      },
      goForgot() {
        this.$router.push("/login/forgot")
      },
      unHide() {
        this.ishide = !this.ishide
        if (this.ishide == true) {
          this.inputType = "password"
        }
        else {
          this.inputType = "text"
        }
      }
    },
  }
</script>
<style scoped>
  .hide {
    background: url("../../../assets/icon/jieji/hide.png") no-repeat;
    background-size: contain;
  }

  .visable {
    background: url("../../../assets/icon/jieji/visable.png") no-repeat;
    background-size: contain;
  }

  .errmsg {
    margin-top: 25px;
    color: red;
  }

  .input_icon {
    display: inline-block;
    height: 30px;
    width: 30px;
    position: absolute;
    top: 18.5vh;
    right: 2vw;
  }

  .login_content {
    position: absolute;
    top: 15vh;
    left: 5vw;
    right: 5vw;
  }

  .forgot {
    position: absolute;
    top: 24vh;
    right: 0;
    border-bottom: 1px solid #3351fa;
    color: #3351fa;
    font-size: 13px;
    padding: 3px;
  }

  .new {
    position: absolute;
    top: 24vh;
    left: 0;
    border-bottom: 1px solid #3351fa;
    color: #3351fa;
    font-size: 13px;
    padding: 3px;
  }

  .title {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 5vh;
    color: #1653c4;
  }

  input::-webkit-input-placeholder {
    color: #8ba6ff;
  }

  .input_text {
    border: 0;
    border-bottom: 1px solid #3351fa;
    width: 100%;
    font-size: 20px;
    padding: 5px 0;
    background-color: transparent;
    margin-bottom: 20px;
    color: #1653c4;
  }

  .submit {
    height: 6vh;
    width: 60vw;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1653c4;
    font-size: 18px;
    border: 0;
    border-radius: 5px;
    position: absolute;
    bottom: 40vh;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 5px #679afa;
  }
</style>