<template>
  <div class="box_1">
    <div class="nav">
      <div @click="goto_jieji" class="function jieji">
        <img src="@/assets/icon/jieji/plane_2.png"></img>
        <div>Pick-up</div>
      </div>
      <div @click="goto_songji" class="function songji">
        <img src="@/assets/icon/jieji/plane_1.png"></img>
        <div>Drop-off</div>
      </div>
      <div class="function dache">
        <img src="@/assets/icon/jieji/car_1.png"></img>
        <div>Chartered</div>
      </div>
      <div class="function songhuo">
        <img src="@/assets/icon/jieji/car_2.png"></img>
        <div>Delivery</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeNav',
    components: {

    },
    data() {
      return {
        formShow: true
      }
    },
    methods: {
      goto_jieji() {
        if (this.$store.state.user.email) {
          this.$router.push("/pickup?formShow=0")
        }
        else {
          this.$model({
            show: true,
            title: "Hint",
            content: "Please login first",
            confirmButton: true,
            cancelButton: true,
            confirmCallBack: () => {
              this.$router.replace("/mine").catch(err => {
                if (
                  err.name !== 'NavigationDuplicated' &&
                  !err.message.includes('Avoided redundant navigation to current location')
                ) {
                  logError(err);
                }
              });;
            },
            cancelCallBack: () => {
              console.log("cancel");
            }
          });
        }
      },
      goto_songji() {
        if (this.$store.state.user.email) {
          this.$router.push("/dropoff?formShow=1")
        }
        else {
          this.$model({
            show: true,
            title: "Hint",
            content: "Please login first",
            confirmButton: true,
            cancelButton: true,
            confirmCallBack: () => {
              this.$router.replace("/mine").catch(err => {
                if (
                  err.name !== 'NavigationDuplicated' &&
                  !err.message.includes('Avoided redundant navigation to current location')
                ) {
                  logError(err);
                }
              });;
            },
            cancelCallBack: () => {
              console.log("cancel");
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
  }

  .nav {
    position: absolute;
    top: 4.5vh;
    right: 50%;
    transform: translateX(50%);
    height: 30vh;
    width: 80vw;
    background-color: #fff;
    overflow: hidden;
    border: 2px solid #fff;
    border-radius: 10px;
    font-size: 15px;
    font-weight: 500;
    color: #fff;
    box-shadow: 0 0 10px rgb(224, 224, 224);
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
  }

  .function {
    flex: 50%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .jieji,
  .songji {
    background: linear-gradient(#194ba8, #4e88fc);
  }

  .dache,
  .songhuo {
    background: linear-gradient(#0365b6, #22abeb);
    opacity: .5;
  }

  .jieji::before {
    content: "";
    width: 300px;
    height: 2px;
    background-color: rgb(221, 221, 221);
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .jieji::after {
    content: "";
    width: 2px;
    height: 200px;
    background-color: #fff;
    position: absolute;
    top: 0;
    right: 0;
  }

  .songji::before {
    content: "";
    width: 300px;
    height: 2px;
    background-color: #fff;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .dache::after {
    content: "";
    width: 2px;
    height: 200px;
    background-color: rgb(221, 221, 221);
    position: absolute;
    top: 0;
    right: 0;
  }

  img {
    height: 50px;
    width: 50px;
  }

  .nav .function text {
    color: #fff
  }
</style>