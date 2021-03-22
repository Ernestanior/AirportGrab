<template>
  <div class="navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style scoped>
  .back {
    padding: 10px 10px 0 0;
  }

  .back>img {
    width: 24px;
    height: 24px;
    transform: rotate(90deg);
  }

  .navbar {
    display: flex;
    font-weight: 700;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    background-color: #1653c4;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }

  .left,
  .right {
    width: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .left {
    width: 4rem;
  }

  .center {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>