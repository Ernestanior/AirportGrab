<template>
  <div class="box_3" @click="ToService">
    <div class="box_title">
      <div class="icon_1"></div>
      FAQ
      <a url="ques/index" class="more">
        More
        <div class="square"></div>
      </a>
    </div>
    <a url="ques/index" class="box_3_search">
      <img src="@/assets/icon/jieji/search.png"></img>
      <span>Is there any extra charge for extra luggage?</span>
    </a>

    <a url="ques/index" class="box_3_content">
      <img src="@/assets/icon/jieji/car_bg.png"></img>
      <span>Q: Can I cancel my order?</span>
      <span>Q: Can I modify my order？</span>
      <span>Q: Can I choose car?</span>
      <span>...</span>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'HomeQues',
    components: {

    },
    methods: {
      ToService() {
        this.$router.push("/faq")
      }
    },
  }
</script>
<style scoped>
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

  .box_3 {
    width: 100vw;
    height: 20vh;
    margin-top: 5px;
    padding: 10px 0;
    background-color: #fff;
    position: absolute;
    top: 66vh;
  }

  .box_3_content {
    margin-top: 10px;
    width: 90vw;
    position: absolute;
    top: 50px;
    left: 15px;
  }

  .box_3_content img {
    height: 90px;
    width: 90px;
    position: absolute;
    right: 1px;
    top: -15px;
  }

  .box_3_content span {
    margin-top: 4px;
    display: block;
    font-size: 13px;
    color: #9e9d9d;
  }

  .box_3_search {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 92vw;
    height: 25px;
    border: 1px solid #cfcfcf;
    border-radius: 5px;
    position: absolute;
    top: 30px;
    left: 15px;
  }

  .box_3_search img {
    height: 15px;
    width: 15px;
    opacity: 0.5;
    position: absolute;
    left: 10px;
  }

  .box_3_search span {
    position: absolute;
    left: 33px;
    top: 5px;
    font-size: 13px;
    font-weight: 400;
    color: #505050;
  }
</style>