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
          FAQ
        </div>
      </template>
    </nav-bar>
    <div class="service_content">
      <div class="box">
        <div class="title">
          <img src="@/assets/icon/jieji/question.png"></img>
          <span>接送机如何收费？</span>
        </div>
        <div class="content">
          接送机收费价格基于时间段，路程以及乘客数量进行计算，为一口价订单，订单不包含额外费用，例如，无额外行李费用，无额外用餐饮水费用，无额外服务消费等等。
        </div>
        <div class="content">
          在填好地址，日期等信息之后，系统会自动为您匹配一位华人司机，待您确定出行之后，订单才会生效。
        </div>
        <div class="content">
          只要不更改上下车地址及用车时间，您在乘车过程中无需支付额外隐藏费用，如发生额外收费，可以及时向客服反映情况。
        </div>
      </div>

      <div class="box">
        <div class="title">
          <img src="@/assets/icon/jieji/question.png"></img>
          <span>订单可以取消吗？</span>
        </div>
        <div class="content">
          订单取消最晚时效为乘车时间的三小时之前，您可在最晚取消时效前在订单页面内取消订单。
        </div>
      </div>

      <div class="box">
        <div class="title">
          <img src="@/assets/icon/jieji/question.png"></img>
          <span>航班发生改签，延误，取消等变动怎么办？</span>
        </div>
        <div class="content">
          如果航班发生改签，您可以与客服进行沟通，让客服协作更换接机时间，如果司机无法正常提供服务，建议您在免费取消时间内取消订单并重新预定，如果已过最晚取消时间，订单将扣除对应违约金。
        </div>
      </div>

      <div class="box">
        <div class="title">
          <img src="@/assets/icon/jieji/question.png"></img>
          <span>下单之后是否可以重新修改路线？</span>
        </div>
        <div class="content">
          客服24小时在线提供服务。
        </div>
        <div class="content">
          如果在订单最晚取消时间之前想修改路线，您可以与客服进行沟通，让客服协作修改路线。
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  // @ is an alias to /src
  import NavBar from "@/components/navbar/NavBar.vue"
  export default {
    name: 'ServiceAd',
    components: {
      NavBar
    },
    methods: {
      goBack() {
        this.$router.back()
      }
    },
  }
</script>
<style scoped>
  .service_container {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: #fff;
  }

  .service_content {
    width: 100vw;
    position: absolute;
    top: 3rem;
  }

  .box {
    margin-top: 10px;
    padding: 10px;
  }

  .title {
    display: flex;
    align-items: center;
    color: #000;
  }

  .title img {
    height: 22px;
    width: 22px;
    margin-right: 5px;
  }

  .title span {
    font-weight: 500;
    font-size: 15px;
  }

  .content {
    margin-top: 5px;
    font-size: 13px;
    color: rgb(131, 131, 131);
  }
</style>