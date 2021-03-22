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
          Order Detail
        </div>
      </template>
    </nav-bar>
    <div class="detail_content">
      <div class="title">
        <div class="type">{{target_order.type}}</div>
        <div class="status">{{target_order.status}}</div>
        <div v-if="target_order.status=='doing'">
          <button class="delete" @click="HandleCancel">Cancel Order</button>
        </div>
        <div v-else>
          <button class="delete" @click="HandleDelete">Delete Order</button>
        </div>
      </div>
      <div class="head">
        <img class="dot dot_one" src="@/assets/icon/jieji/dot_two.png"></img>
        <div class="order_from">
          {{target_order.add_from}}
        </div>
        <img class="dot dot_two" src="@/assets/icon/jieji/dot_one.png"></img>
        <div class="order_to">
          {{target_order.add_to}}
        </div>
        <div class="date_time">
          <img class="icon_clock" src="@/assets/icon/jieji/clock.png"></img>
          {{target_order.time}}
        </div>
      </div>

      <div class="body">
        <div class="left_body">
          <div>OrderId</div>
          <div>Name</div>
          <div>Phone</div>
          <div>People</div>
          <div>Luggages</div>
          <div>others</div>
        </div>
        <div class="right_body">
          <div class="order_id">{{target_order.order_id}}</div>
          <div class="name">{{target_order.uname}}</div>
          <div class="contact">{{target_order.contact}}</div>
          <div class="people_num">{{target_order.people_number}}</div>
          <div class="luggage">{{target_order.luggage}}</div>
          <div class="add">{{target_order.add}}</div>
        </div>
      </div>
      <div v-if="target_order.status==='doing'">
        <button class="confirm" @click="handlePay">Confirm Arrival</button>
      </div>
    </div>
  </div>

</template>

<script>
  // @ is an alias to /src
  import NavBar from "@/components/navbar/NavBar.vue"
  import { deleteOrder, finishOrder } from "@/network/network.js"
  export default {
    name: 'OrderDetail',
    components: {
      NavBar
    },
    data() {
      return {
        target_order: this.$route.query
      }
    },
    methods: {
      goBack() {
        this.$router.back()
      },
      async HandleCancel() {
        this.$loading.show()
        await deleteOrder(this.target_order)
        this.$loading.hide()
        this.$toast.show('Order Cancel')
        this.$router.replace("/order")
        this.$store.commit('changeDoingKey')
      },
      async HandleDelete() {
        this.$loading.show()
        await deleteOrder(this.target_order)
        this.$loading.hide()
        this.$toast.show('Order Delete')
        this.$router.replace("/order")
        this.$store.commit('changeDoneKey')
      },
      async handlePay() {
        this.$loading.show()
        await finishOrder(this.target_order)
        this.$loading.hide()
        this.$router.replace("/order")
        this.$toast.show('Confirm Order')
        this.$store.commit('changeDoingKey')
        this.$store.commit('changeDoneKey')
      }
    },
  }
</script>
<style scoped>
  .title {
    display: flex;
    padding-left: 15px;
  }

  .detail_content {
    position: absolute;
    top: 4rem;
    left: 50%;
    transform: translateX(-50%);
  }

  .type,
  .status {
    background-color: #5183e9;
    color: #fff;
    display: inline-block;
    margin: 15px 0 0 2vw;
    padding: 3px 13px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 20px;
    box-shadow: 0 0 5px rgb(152, 157, 248);
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

  .left_body div:nth-child(-n+5),
  .right_body div:nth-child(-n+5) {
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

  .order_from,
  .order_to {
    font-size: 15px;
    font-weight: 500;
    width: 75vw;
    display: flex;
    align-items: center;
    margin-left: 18px;
    position: relative;
    padding: 10px 0 10px 0;
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
    margin-bottom: 3px;
    display: flex;
    align-items: center;
  }

  .icon_clock {
    height: 12px;
    width: 12px;
    margin-right: 10px;
  }

  button {
    background-color: #fff;
  }

  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .delete {
    color: #5183e9;
    font-size: 12px;
    font-weight: 400;
    border: 1px solid #5183e9;
    border-radius: 5px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 15px;
    right: 15px;
  }

  .confirm {
    width: 50vw;
    height: 6vh;
    color: white;
    display: flex;
    align-items: center;
    border: 0;
    border-radius: 5px;
    justify-content: center;
    background-color: #1653c4;
    box-shadow: 0 0 5px #679afa;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
</style>