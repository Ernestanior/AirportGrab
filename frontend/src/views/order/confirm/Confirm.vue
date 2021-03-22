<template>

  <!-- <div wx:for="{{order_content}}" wx:key="order_id"> -->
  <div>
    <nav-bar class="nav_bar">
      <template #left>
        <div class="back" @click="goBack">
          <img src="@/assets/icon/youlawhite.png" alt="">
        </div>
      </template>
      <template #center>
        <div>
          Confirm Order
        </div>
      </template>
    </nav-bar>
    <div class="confirm_content">
      <div class="title">
        <div class="type">{{new_order.type}}</div>
        <div class="status">{{new_order.status}}</div>
      </div>
      <div class="head">
        <img class="dot dot_one" src="@/assets/icon/jieji/dot_two.png"></img>
        <div class="order_from">
          {{new_order.add_from}}
        </div>
        <img class="dot dot_two" src="@/assets/icon/jieji/dot_one.png"></img>
        <div class="order_to">
          {{new_order.add_to}}
        </div>
        <div class="date_time">
          <img class="icon_clock" src="@/assets/icon/jieji/clock.png"></img>
          {{new_order.date}} {{new_order.time}}
        </div>
      </div>

      <div class="body">
        <div class="left_body">
          <div>Name</div>
          <div>Phone</div>
          <div>Peple</div>
          <div>Luggages</div>
          <div>Others</div>
        </div>
        <div class="right_body">
          <div class="name">{{new_order.uname}}</div>
          <div class="contact">{{new_order.contact}}</div>
          <div class="people_num">{{new_order.people_number}}</div>
          <div class="luggage">{{new_order.luggage}}</div>
          <div class="add">{{new_order.add}}</div>
        </div>
      </div>
      <button class="confirm" @click="handlePay">Pay Order</button>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import NavBar from "@/components/navbar/NavBar.vue"
  import { newOrder } from "@/network/network.js"
  export default {
    data() {
      return {
        new_order: {}
      }
    },
    name: 'Confirm',
    components: {
      NavBar
    },
    created() {
      const data = this.$route.query
      this.new_order = {
        uname: this.$store.state.user.name,
        email: this.$store.state.user.email,
        type: data.type,
        status: data.status,
        add_from: data.add_from,
        add_to: data.add_to,
        price: data.price,
        time: data.date + ' ' + data.time,
        people_number: data.people_number,
        luggage: data.luggage,
        contact: data.contact,
        add: data.add
      }
      // console.log(this.new_order);

    },
    methods: {
      goBack() {
        this.$router.back()
      },
      async handlePay() {
        // console.log(this.$router);
        this.$loading.show()
        this.new_order.order_id = this.createRandom();
        await newOrder(this.new_order)
        this.$loading.hide()
        this.$toast.show('Order Paid')
        this.$router.replace({
          path: '/order',
          query: this.new_order
        })
        this.$store.commit('changeDoingKey')
      },
      createRandom() {
        //自定义订单编号生成规则   由YYYYMMDD(年月日) + 六位随机数
        let currDate = new Date();
        let year = currDate.getFullYear();
        let month = currDate.getMonth() + 1 < 10 ? "0" + (currDate.getMonth() + 1) : currDate.getMonth() + 1;
        let day = currDate.getDate() < 10 ? "0" + currDate.getDate() : currDate.getDate();

        //获取年月日
        let date = year + '' + month + '' + day; //20190524
        let num = parseInt((Math.random() * 9 + 1) * 100000);
        let orderCode = 'BC' + date + num
        // console.log(orderCode)
        return orderCode;
      }
    },
  }
</script>
<style scoped>
  .confirm_content {
    position: absolute;
    top: 4rem;
    left: 50%;
    transform: translateX(-50%);
  }

  .title {
    display: flex;
  }

  .type,
  .status {
    background-color: #5183e9;
    color: #fff;
    display: inline-block;
    margin: 15px 0 0 2vw;
    padding: 2px 13px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 20px;
    box-shadow: 0 0 5px rgb(152, 157, 248);
    /* position: absolute; */
  }

  .head,
  .body {
    width: 90vw;
    background-color: #fff;
    margin: 15px auto;
    border-radius: 10px;
    padding: 7px 15px;
    box-sizing: border-box;
    box-shadow: 0 0 5px rgb(216, 216, 216);
    overflow: hidden;
    position: relative;
  }

  .body {
    display: flex;
    padding: 7px 20px;
    box-sizing: border-box;
  }

  .left_body {
    flex: 25%;
    color: #666;
  }

  .left_body div:nth-child(-n+4) {
    border-bottom: 1px solid rgb(230, 230, 230);
  }

  .right_body {
    flex: 75%;
    overflow: hidden;
  }

  .left_body>div,
  .right_body>div {
    font-size: 15px;
    margin-bottom: 7px;
    padding: 10px 0;
  }

  .name,
  .contact,
  .people_num,
  .luggage {
    border-bottom: 1px solid rgb(230, 230, 230);

  }

  .order_from,
  .order_to {
    font-size: 15px;
    /* margin-bottom: 5rpx; */
    color: #000;
    font-weight: 500;
    width: 75vw;
    display: flex;
    align-items: center;
    margin-left: 16px;
    position: relative;
    padding: 10px 0 10px 0;
    /* margin-top: 10rpx; */
    border-bottom: 1px solid rgb(230, 230, 230);
    overflow: hidden;
  }

  .dot {
    height: 7px;
    width: 7px;
    position: absolute;
    left: 17px;
    transform: translateY(-50%);
  }

  .dot_one {
    top: 23%;
  }

  .dot_two {
    top: 56%;
  }

  .date_time {
    margin-top: 7px;
    font-size: 15px;
    color: #777;
    margin-bottom: 2px;
    display: flex;
    align-items: center;
  }

  .icon_clock {
    height: 13px;
    width: 13px;
    margin-right: 10px;
  }

  button {
    background-color: #fff;
  }

  .foot {
    display: flex;
    padding: 5px 40px;
    justify-content: center;
  }

  .foot view {
    padding: 0 15px;
  }

  .confirm {
    height: 5vh;
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
  }

  .modify {
    flex: 1;
    color: #5183e9;
    font-weight: 400;
    border: 1px solid #5183e9;
    margin-right: 15px;
  }

  .delete {
    flex: 1;
    color: #5183e9;
    font-weight: 400;
    border: 1px solid #5183e9;
  }
</style>