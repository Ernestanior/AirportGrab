<template>
  <div class="box_2" @click="ToService">
    <div class="box_title">
      <div class="icon_1"></div>
      Service advantage
      <a url="service/index" class="more">
        More
        <div class="square"></div>
      </a>
    </div>

    <div class="box_2_content">
      <a url="service/index" class="content_nav">
        <img src="@/assets/icon/jieji/wechat_pay.png"></img>
        <div class="nav_text">
          <div class="nav_title">Wechat Pay</div>
          <div class="nav_span">Without other charge</div>
        </div>
      </a>

      <a url="service/index" class="content_nav">
        <img src="@/assets/icon/jieji/car_4.png"></img>
        <div class="nav_text">
          <div class="nav_title">Chinese Driver</div>
          <div class="nav_span">Team of student</div>
        </div>
      </a>

      <a url="service/index" class="content_nav">
        <img src="@/assets/icon/jieji/package.png"></img>
        <div class="nav_text">
          <div class="nav_title">Package Price</div>
          <div class="nav_span">No other charge fee</div>
        </div>
      </a>

      <a url="service/index" class="content_nav">
        <img src="@/assets/icon/jieji/safe.png"></img>
        <div class="nav_text">
          <div class="nav_title">Service Assurance</div>
          <div class="nav_span">24h online service</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'HomeService',
    components: {

    },
    methods: {
      ToService() {
        this.$router.push("/service")
      }
    },
  }
</script>

<style scoped>
  .box_2 {
    width: 100vw;
    height: 22.5vh;
    margin-top: 110px;
    background-color: #fff;
    position: absolute;
    top: 27vh;
  }

  .box_title {
    height: 25px;
    width: 90vw;
    font-size: 13px;
    font-weight: 500;
    display: flex;
    align-items: center;
    position: absolute;
    left: 10px;
    top: 3px;
  }

  .box_title .icon_1 {
    height: 15px;
    width: 5px;
    background: linear-gradient(#02a01c, #77fa98);
    margin-right: 5px;
    border-radius: 30%;
  }

  .box_title .more {
    position: absolute;
    top: 5px;
    right: -8px;
    font-size: 13px;
    font-weight: 400;
    color: #9e9d9d;
    display: flex;
    align-items: center;
  }

  .box_title .square {
    display: inline-block;
    height: 5px;
    width: 5px;
    border-right: 1px solid #9e9d9d;
    border-top: 1px solid #9e9d9d;
    transform: rotate(45deg);
    margin-left: 3px;
  }

  .box_2 .box_2_content {
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    top: 40px;
    left: 20px;
  }

  .box_2 .box_2_content .content_nav {
    flex: 50%;
    font-size: 13px;
    /* font-weight: 500; */
    /* padding-left: 20rpx; */
    display: flex;
    align-items: center;
    margin-bottom: 25px;
  }

  .box_2 .box_2_content .content_nav img {
    height: 30px;
    width: 30px;
    margin-right: 10px;
  }

  .box_2 .box_2_content .content_nav .nav_text {
    display: flex;
    flex-direction: column;
  }

  .box_2 .box_2_content .content_nav .nav_span {
    font-size: 10px;
    color: #9e9d9d;
  }
</style>