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
          New Password
        </div>
      </template>
    </nav-bar>
    <div class="login_content">
      <div class="title">Enter New Password</div>
      <input v-model="password" :type="inputType" class="input_text" placeholder="Password" @input="checkStrength">
      <span class="input_icon one" :class="ishide?'hide':'visable'" @click="unHide"></span>
      <div class="color_box">
        <div :class="color==1?'red':''">Week</div>
        <div :class="color==2?'yellow':''">So-so</div>
        <div :class="color==3?'green':''">Good</div>
      </div>
      <input v-model="confirm_password" type="password" class="input_text" placeholder="Confirm Password">
      <div class="errmsg">{{errmsg}}</div>

    </div>
    <button class="submit" type="submit" @click="Register">Register</button>
    <div class="tip">* Password at least 6 charracters</div>
  </div>

</template>

<script>
  // @ is an alias to /src
  import NavBar from "@/components/navbar/NavBar.vue"
  import { signUp, modifyPw } from "@/network/network.js"
  export default {
    name: 'Password',
    components: {
      NavBar
    },
    data() {
      return {
        password: '',
        confirm_password: '',
        color: 0,
        errmsg: "",
        ishide: true,
        inputType: "password"
      }
    },
    created() {
      console.log(this.$route.query)
    },
    methods: {
      goBack() {
        this.$router.back()
      },
      async Register() {
        if (this.password === this.confirm_password) {
          if (this.color < 2) {
            this.errmsg = "* Your password is too week"
          }
          else {
            if (this.$route.query.type == "new") {
              this.$loading.show()
              const res = await signUp(this.$route.query.email, this.password)
              this.$loading.hide()
              // console.log(res);
              this.$toast.show("Register Successful")
              this.$router.replace("/login")
            }
            else {
              this.$loading.show()
              const res = await modifyPw(this.$route.query.email, this.password)
              this.$loading.hide()
              // console.log(res);
              this.$toast.show("Edit Password Successful")
              this.$router.replace("/login")
            }
          }
        }
        else {
          this.errmsg = "* The two passwords you typed do not match"
        }
      },
      checkStrength() {
        if (this.password.length < 6) {
          this.color = 1
        }
        else {
          var modes = 0;
          //正则表达式验证符合要求的
          if (/\d/.test(this.password)) modes++; //数字
          if (/[a-z]/.test(this.password)) modes++; //小写
          if (/[A-Z]/.test(this.password)) modes++; //大写  
          if (/\W/.test(this.password)) modes++; //特殊字符

          if (modes === 1) {
            this.color = 1
          }
          else if (modes === 2) {
            this.color = 2
          }
          else {
            this.color = 3
          }
        }
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

  .input_icon {
    display: inline-block;
    height: 30px;
    width: 30px;
    position: absolute;
    top: 14vh;
    right: 2vw;
  }

  .login_content {
    position: absolute;
    top: 15vh;
    left: 5vw;
    right: 5vw;
  }

  img {
    height: 30px;
    width: 30px;
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

  .color_box {
    display: flex;
    height: 4vh;
    width: 60vw;
    background-color: rgb(194, 230, 255);
    color: #fff;
    margin: 10px 0;
  }

  .color_box>div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .red {
    background-color: rgb(231, 34, 34);
    color: #fff;
  }

  .yellow {
    background-color: rgb(250, 168, 60);
    color: #fff;
  }

  .green {
    background-color: rgb(32, 221, 73);
    color: #fff;
  }

  .input_text {
    border: 0;
    border-bottom: 1px solid #3351fa;
    width: 100%;
    font-size: 20px;
    padding: 5px 0;
    background-color: transparent;
    color: #1653c4;
    margin-top: 5px;
    position: relative;
  }

  input::before {
    content: "";
    display: block;
    height: 20px;
    width: 20px;
    background-color: green;
  }

  .errmsg {
    margin-top: 10px;
    color: red;
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
    bottom: 42vh;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 5px #679afa;
  }

  .tip {
    position: absolute;
    bottom: 35vh;
    left: 5vw;
    color: #1653c4;
  }
</style>