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
          New Order
        </div>
      </template>
    </nav-bar>
    <div class="box_1">
    </div>

    <div class="form">
      <div class="form_title">
        <div v-for="(item,index) in titles" :key="item.id" class="pick_jieji" :class="{pick_active:item.isActive}"
          @click="handleItemtap(index)" data-index="index">
          {{item.name}}
        </div>
      </div>
      <div class="form_swiper">
        <pick-up v-show="isShow"></pick-up>
        <drop-off v-show="!isShow"></drop-off>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import NavBar from "@/components/navbar/NavBar.vue"
  import PickUp from "./jiejicomp/PickUp.vue"
  import DropOff from "./jiejicomp/DropOff.vue"
  export default {
    name: 'MainForm',
    components: {
      NavBar,
      PickUp,
      DropOff
    },
    data() {
      return {
        isShow: true,
        titles: [
          {
            id: 0,
            name: "Pick-up",
            isActive: true
          },
          {
            id: 1,
            name: "Drop-off",
            isActive: false
          }
        ]
      }
    },
    methods: {
      handleItemtap(index) {
        this.titles.forEach(item => {
          item.isActive = item.id == index
          this.isShow = this.titles[0].isActive
        });
      },
      goBack() {
        this.$router.back()
      },
    },
    created() {
      this.titles.forEach(item => {
        item.isActive = item.id == parseInt(this.$route.query.formShow)
        this.isShow = this.titles[0].isActive
      });
    },
  }
</script>
<style scoped>
  .form {
    position: absolute;
    top: 12vh;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 5px;
    box-shadow: 0 0 5px rgb(230, 230, 230);
    background-color: white;
    height: 85vh;
    width: 80vw;
  }

  .form_title {
    height: 8vh;
    width: 100%;
    display: flex;
    transition: 5s all;
  }

  .pick_jieji,
  .pick_songji {
    flex: 1;
    text-align: center;
    line-height: 8vh;
    font-size: 15px;
    color: white;
    background-color: #1653c4;
  }

  .jieji {
    border-top-left-radius: 5px;
  }

  .songji {
    border-top-right-radius: 5px;
  }

  .pick_active {
    font-weight: 500;
    background-color: #fff;
    color: #000;
    height: 11vh;
  }
</style>