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
          Profile Detail
        </div>
      </template>
    </nav-bar>
    <div class="mine_box">
      <div class="selection">
        <span>Name: </span>
        <input type="text" v-model="uname" :placeholder="$store.state.user.name">
      </div>
    </div>
    <div class="save" @click="save">Save</div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import { editProfile } from "@/network/network.js"
  import NavBar from "@/components/navbar/NavBar.vue"
  export default {
    name: 'Setting',
    components: {
      NavBar
    },
    data() {
      return {
        uname: ""
      }
    },
    methods: {
      goBack() {
        this.$router.back()
      },
      async save() {
        if (this.uname) {
          this.$loading.show()
          const res = await editProfile(this.$store.state.user.email, this.uname)
          this.$loading.hide()
          this.$store.commit("editUser", { name: this.uname })
          this.$toast.show("Edit Successful")
          this.$router.replace("/mine")
          console.log(res);
        }
        else {
          this.$error.show("Name cannot be empty")
        }
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

  .selection>span {
    margin-right: 10px;
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
</style>