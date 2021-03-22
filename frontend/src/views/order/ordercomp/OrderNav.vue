<template>
  <div>
    <div class="order_box">
      <div v-for="(item,index) in titles" :key="item.id">
        <div :class="{active:item.isActive}" @click="handleItemtap(index)" data-index="index">
          {{item.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'OrderNav',
    components: {

    },
    data() {
      return {
        titles: [
          {
            id: 0,
            name: "In Progress",
            isActive: true
          },
          {
            id: 1,
            name: "History Order",
            isActive: false
          }
        ],
      }
    },
    methods: {
      handleItemtap(index) {
        this.titles.forEach(item => {
          item.isActive = item.id === index
        });
        this.$emit('navChange', this.titles[0].isActive)
      }
    }
  }
</script>
<style scoped>
  .order_box {
    height: 8vh;
    width: 100vw;
    background: linear-gradient(180deg, #1653c4, #5183e9);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 3rem;
    left: 0;
    right: 0;
    z-index: 1;
  }

  .order_box>div {
    color: white;
    font-weight: 500;
    font-size: 15px;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .order_box>div>div {
    padding: 2px 0;
  }

  .active {
    border-bottom: 2px solid #fff;
    color: white;
  }
</style>