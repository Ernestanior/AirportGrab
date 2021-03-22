<template>
  <tab-bar>
    <tab-item path="/home" activeColor="#1653c4">
      <template v-slot:icon>
        <img src="@/assets/icon/tabbar_icon/home.png">
      </template>
      <template v-slot:icon_active>
        <img src="@/assets/icon/tabbar_icon/home_fill.png">
      </template>
      <div>Home</div>
    </tab-item>

    <tab-item path="/order" activeColor="#1653c4">
      <template v-slot:icon>
        <img src="@/assets/icon/tabbar_icon/order.png">
      </template>
      <template v-slot:icon_active>
        <img src="@/assets/icon/tabbar_icon/order_fill.png">
      </template>
      <div>order</div>
    </tab-item>

    <tab-item path="/promotion" activeColor="#1653c4">
      <template v-slot:icon>
        <img src="@/assets/icon/tabbar_icon/gift.png">
      </template>
      <template v-slot:icon_active>
        <img src="@/assets/icon/tabbar_icon/gift_fill.png">
      </template>
      <div>Promotion</div>
    </tab-item>

    <tab-item path="/mine" activeColor="#1653c4">
      <template v-slot:icon>
        <img src="@/assets/icon/tabbar_icon/mine.png">
      </template>
      <template v-slot:icon_active>
        <img src="@/assets/icon/tabbar_icon/mine_fill.png">
      </template>
      <div>Profile</div>
    </tab-item>
  </tab-bar>

</template>

<script>
  import TabBar from '@/components/tabbar/TabBar.vue'
  import TabItem from '@/components/tabbar/TabItem.vue'
  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabItem
    },
    methods: {
    },
  }
</script>