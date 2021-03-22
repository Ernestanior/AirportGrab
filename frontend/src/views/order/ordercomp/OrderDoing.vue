<template>

  <div class="item_container">
    <div v-if="order_list.length==0" class="empty">
      <img class="icon_empty" src="@/assets/icon/jieji/empty_3.png"></img>
      <div class="text_empty">It`s Empty</div>
    </div>
    <div v-else>
      <a class="order_content" v-for="item in order_list" :key="item.order_id" @click="toDetail(item)">
        <div class="order_type">{{item.type}}</div>
        <div class="order_status">
          {{item.status}}
          <img class="icon_youla" src="@/assets/icon/jieji/youla.png"></img>
        </div>
        <div class="date_time">
          <img class="icon_clock" src="@/assets/icon/jieji/clock.png"></img>
          {{item.time}}
        </div>
        <img class="dot dot_one" src="@/assets/icon/jieji/dot_two.png"></img>
        <div class="order_from">
          {{item.add_from}}
        </div>
        <img class="dot dot_two" src="@/assets/icon/jieji/dot_one.png"></img>
        <div class="order_to">
          {{item.add_to}}
        </div>
        <div class="order_price">
          AU${{item.price}}
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import { getDoingOrder } from "@/network/network.js"

  export default {
    name: 'OrderDoing',
    components: {

    },
    data() {
      return {
        order_list: [],
      }
    },
    methods: {
      toDetail(item) {
        this.$router.push({
          path: '/detail',
          query: item
        })
      },
    },
    computed: {
      orders() {
        return this.order_list || []
      }
    },
    created() {
      console.log(this.$store.state.user.email);
      this.$loading.show()
      getDoingOrder(this.$store.state.user.email).then(res => {
        // console.log(res);
        if (res) {
          this.order_list = res.data.orders
        }
        this.$loading.hide()
      })
    }
  }
</script>
<style scoped>
  .item_container {
    position: absolute;
    top: 15vh;
    left: 0;
    right: 0;
    overflow: hidden;
  }

  .empty {
    height: 700px;
  }

  .order_content {
    display: block;
    width: 100vw;
    background-color: #fff;
    margin-top: 5px;
    position: relative;
    padding: 10px 0 10px 15px;
    box-shadow: 0 0 5px rgb(210, 221, 253);
    color: #666;
    overflow: hidden;
  }

  .order_type {
    font-size: 15px;
    color: #666;
    margin-bottom: 7px;
  }

  .order_status {
    font-size: 13px;
    position: absolute;
    top: 10px;
    right: 45px;
  }

  .icon_youla {
    position: absolute;
    top: 50%;
    right: -20px;
    transform: translateY(-50%) rotate(-90deg);
    height: 20px;
    width: 20px;
  }

  .text_empty {
    position: absolute;
    top: 35%;
    left: 40%;
    /* color:rgb(191,191,191); */
    color: #6ea5e9;
    font-size: 20px;

  }

  .icon_empty {
    position: absolute;
    top: 20%;
    left: 35%;
    height: 100px;
    width: 130px;
  }

  .date_time {
    font-size: 13px;
    margin-bottom: 2px;
    display: flex;
    align-items: center;
  }

  .icon_clock {
    height: 13px;
    width: 13px;
    margin-right: 5px;
  }

  .order_from,
  .order_to {
    padding-top: 4px;
    font-size: 13px;
    margin-bottom: 2px;
    width: 80vw;
    display: flex;
    align-items: center;
    margin-left: 16px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .order_price {
    font-size: 15px;
    position: absolute;
    top: 30px;
    right: 30px;
    color: rgb(68, 182, 102);
  }

  .dot {
    height: 7px;
    width: 7px;
    position: absolute;
    left: 16px;
    transform: translateY(-50%);
  }

  .dot_one {
    top: 60%;
  }

  .dot_two {
    top: 81%;
  }
</style>