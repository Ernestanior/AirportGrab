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
          Verification
        </div>
      </template>
    </nav-bar>
    <div class="login_content">
      <div class="title">Enter Verification Code</div>
      <div class="subtitle">Code sent to {{email}}</div>
      <!-- <input v-model="code" type="text" class="input_text" placeholder="Email"> -->
      <input-code @finish="getCode"></input-code>
      <div class="errmsg">{{errmsg}}</div>
      <!-- <button class="submit" type="submit" @click="GetCode">Get Verification Code</button> -->
    </div>
  </div>

</template>

<script>
  // @ is an alias to /src
  import NavBar from "@/components/navbar/NavBar.vue"
  import InputCode from "./vericomp/InputCode.vue"
  export default {
    name: 'Verificate',
    components: {
      NavBar,
      InputCode
    },
    data() {
      return {
        email: this.$route.query.email,
        code: '',
        errmsg: ''
      }
    },
    methods: {
      goBack() {
        this.$router.back()
      },
      getCode(code) {
        // console.log(code);
        // console.log(this.$route.query.code);
        if (code == this.$route.query.code) {
          this.$router.replace({
            path: "/register/password",
            query: { email: this.$route.query.email, type: this.$route.query.type }
          })
        }
        else {
          this.errmsg = "* Invalid Code"
        }
      }
    },
    created() {
      // console.log(this.$route.query);
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
    color: #1653c4;
    margin-bottom: 1vh;
  }

  .subtitle {
    margin-bottom: 8vh;
    color: #1653c4;
    font-size: 15px;
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
    bottom: -8vh;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 5px #679afa;
  }

  .errmsg {
    margin-top: 10px;
    color: red;
  }
</style>