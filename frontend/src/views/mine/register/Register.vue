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
          Register
        </div>
      </template>
      <template #right>
        <div @click="goLogin">
          Login
        </div>
      </template>
    </nav-bar>
    <div class="login_content">
      <div class="title">Create a new account</div>
      <input v-model="email" type="text" class="input_text" placeholder="Enter your email">
      <button class="submit" type="submit" @click="GetCode">Get Verification Code</button>
      <div class="errmsg">{{errmsg}}</div>
    </div>
  </div>

</template>

<script>
  // @ is an alias to /src
  import NavBar from "@/components/navbar/NavBar.vue"
  import { sendCode } from "@/network/network.js"
  export default {
    name: 'Register',
    components: {
      NavBar
    },
    data() {
      return {
        email: '',
        errmsg: ''
      }
    },
    methods: {
      goBack() {
        this.$router.back()
      },
      goLogin() {
        this.$router.replace("/login")
      },
      async GetCode() {
        const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/g;
        // console.log(this.email);
        if (reg.test(this.email)) {
          this.$loading.show()
          let res = await sendCode(this.email)
          this.$loading.hide()
          // console.log(res);
          const { status, result } = res.data
          if (status == "200") {
            this.$router.push({
              path: "/verificate",
              query: { email: this.email, code: result.code, type: "new" }
            })
          }
          else {
            this.errmsg = "* " + result;
          }

        }
        else {
          // this.$error.show("Invalid Email")
          this.errmsg = "* Invalid Email"
        }

      }
    },
  }
</script>
<style scoped>
  .login_content {
    position: absolute;
    top: 15vh;
    left: 5vw;
    right: 5vw;
  }

  .title {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 8vh;
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
    margin-bottom: 15px;
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
    bottom: -8vh;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 5px #679afa;
  }

  .errmsg {
    color: red;
  }
</style>