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
          Service Advantage
        </div>
      </template>
    </nav-bar>
    <div class="service_content">
      <div class="box">
        <div class="title">
          <img src="@/assets/icon/jieji/service2.png"></img>
          <span>微信支付</span>
        </div>
        <div class="content">
          平台支持微信支付，无需款汇转账成澳币，安全快捷。
        </div>
      </div>

      <div class="box">
        <div class="title">
          <img src="@/assets/icon/jieji/service2.png"></img>
          <span>华人司机</span>
        </div>
        <div class="content">
          中国留学生司机团队，大多为在布里斯班留学的学生接单送客。
        </div>
        <div class="content">
          确保司机服务质量，确保交流沟通顺畅，确保最低的风险率，确保客户的人身财产安全。
        </div>
      </div>

      <div class="box">
        <div class="title">
          <img src="@/assets/icon/jieji/service2.png"></img>
          <span>一价全包</span>
        </div>
        <div class="content">
          接送收费价格基于时间段，路程和人数进行计算，不包含其他额外费用。
        </div>
        <div class="content">
          例如，无额外行李费用，无额外用餐饮水费用，无额外服务消费等等。
        </div>
      </div>

      <div class="box">
        <div class="title">
          <img src="@/assets/icon/jieji/service2.png"></img>
          <span>服务保障</span>
        </div>
        <div class="content">
          客服24小时在线提供服务。
        </div>
        <div class="content">
          保证乘客安全，司机不允许提供乘客饮用水及食物，如有发生，请及时举报。
        </div>
        <div class="content">
          为了乘客人身安全，不允许乘客饮用或食用他人的水或食物。
        </div>
        <div class="content">
          接送前6小时或因意外无法出行，可以取消订单，小布为客人办理全额退款。
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  // @ is an alias to /src
  import NavBar from "@/components/navbar/NavBar.vue"
  import axios from "axios"
  export default {
    name: 'ServiceAd',
    components: {
      NavBar
    },
    methods: {
      goBack() {
        this.$router.back()
      }
    }
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