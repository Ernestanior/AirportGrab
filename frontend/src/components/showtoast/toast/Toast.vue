<template>
  <div v-if="isShowToast" class="background_box" @touchmove.prevent>
    <div class="toast-container">
      <img class="loading-img" src="@/assets/icon/toast/success.png" alt="">
      <span class="loading-txt">{{content}}</span>
    </div>
    <!-- 这里content为双花括号 -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShowToast: true,
        content: ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .background_box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0);
  }

  .toast-container {
    padding: 10px;
    border-radius: 5px;
    white-space: nowrap;
    position: fixed;
    color: #fff;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, .6);
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .toast-msg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    padding: 35px;
    border-radius: 10px;
    font-size: 28px;
    line-height: 36px;
    background: #eee;
    color: #666;
  }

  .loading-img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
</style>