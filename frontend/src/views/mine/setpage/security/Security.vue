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
          Security
        </div>
      </template>
    </nav-bar>
    <div class="mine_box">
      <div class="selection">
        <span>Current Password: </span>
        <input :type="inputType" v-model="currentpw" placeholder="(6-20 characters)">
        <span class="input_icon one" :class="ishide?'hide':'visable'" @click="unHide"></span>
      </div>
      <div class="selection">
        <span class="second_span">New Password: </span>
        <input :type="inputType" v-model="newpw" placeholder="(6-20 characters)" @input="checkStrength">
      </div>
      <div class="color_box">
        <div :class="color==1?'red':''">Week</div>
        <div :class="color==2?'yellow':''">So-so</div>
        <div :class="color==3?'green':''">Good</div>
      </div>
      <div class="selection">
        <span>Confirm Password: </span>
        <input :type="inputType" v-model="confirmpw" placeholder="(6-20 characters)">
      </div>
      <div class="errmsg">{{errmsg}}</div>
    </div>
    <div class="save" @click="save">Save</div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import NavBar from "@/components/navbar/NavBar.vue"
  import { login, modifyPw } from "@/network/network.js"
  export default {
    name: 'Security',
    components: {
      NavBar
    },
    data() {
      return {
        currentpw: "",
        newpw: "",
        confirmpw: "",
        inputType: "password",
        ishide: true,
        color: 0,
        errmsg: "",
      }
    },
    methods: {
      goBack() {
        this.$router.back()
      },
      async save() {
        if (this.newpw === this.confirmpw) {
          if (this.color < 2) {
            this.errmsg = "* Your password is too week"
          }
          else {
            console.log();
            this.$loading.show()
            const res = await login({ email: this.$store.state.user.email, password: this.currentpw })
            console.log(res);
            this.$loading.hide()
            if (res.data.status == "200") {
              this.$loading.show()
              const res2 = await modifyPw(this.$store.state.user.email, this.newpw)
              this.$loading.hide()
              // console.log(res);
              this.$toast.show("Edit Password Successful")
              this.$router.replace("/mine")
            } else {
              this.errmsg = "* Sorry, old password is wrong"
            }
          }
        }
        else {
          this.errmsg = "* The two passwords you typed do not match"
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
      },
      checkStrength() {
        if (this.newpw.length < 6) {
          this.color = 1
        }
        else {
          var modes = 0;
          //正则表达式验证符合要求的
          if (/\d/.test(this.newpw)) modes++; //数字
          if (/[a-z]/.test(this.newpw)) modes++; //小写
          if (/[A-Z]/.test(this.newpw)) modes++; //大写  
          if (/\W/.test(this.newpw)) modes++; //特殊字符

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
      }
    },
  }
</script>
<style>
  .hide {
    background: url("../../../../assets/icon/jieji/hide.png") no-repeat;
    background-size: contain;
  }

  .visable {
    background: url("../../../../assets/icon/jieji/visable.png") no-repeat;
    background-size: contain;
  }

  .input_icon {
    display: inline-block;
    height: 30px;
    width: 30px;
    position: absolute;
    top: 4vh;
    right: -2vw;
  }

  .mine_box {
    position: absolute;
    top: 4rem;
    left: 5vw;
  }

  .errmsg {
    margin-top: 10px;
    color: red;
  }

  .selection {
    margin: 10px auto;
    width: 90vw;
    height: 8vh;
    border-bottom: 1px solid #666;
    display: flex;
    align-items: center;
  }

  .selection>span {
    margin-right: 10px;
  }

  .selection>.second_span {
    margin-right: 33px;
  }

  input::-webkit-input-placeholder {
    color: #b5b5b6;
  }

  .save {
    height: 4vh;
    width: 40vw;
    color: white;
    padding: 5px 5px;
    border: 0;
    display: flex;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    background-color: #1653c4;
    box-shadow: 0 0 10rpx #679afa;
    margin: 5px auto;
    position: absolute;
    bottom: 2vh;
    left: 50%;
    transform: translateX(-50%);
  }


  input {
    border: 0;
    background-color: transparent;
    width: 42vw;
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
</style>