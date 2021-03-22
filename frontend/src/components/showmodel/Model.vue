<template>
  <div v-if="show" class="model-container">
    <div class="model-main">
      <div class="model-title">{{title}}</div>
      <div class="model-content" v-html="content"></div>
      <div class="model-buttons">
        <button v-if="cancelButton" @click="cancelClick" class="button">{{cancelText}}</button>
        <button v-if="confirmButton" @click="confirmClick" class="button confirm">{{confirmText}}</button>
      </div>
    </div>
    <div v-show="mask" class="model-mask"></div>
  </div>

</template>

<script type="text/babel">
  export default {
    data() {
      return {
        show: false,
        mask: true,
        title: 'Hint',
        content: 'default content',
        confirmButton: true,
        cancelButton: true,
        confirmText: 'ok',
        cancelText: 'cancel',
        cancelCallBack: () => { },
        confirmCallBack: () => { }
      };
    },
    methods: {
      cancelClick() {
        this.show = false;
        this.cancelCallBack();
      },
      confirmClick() {
        this.show = false;
        this.confirmCallBack();
      }
    }
  };
</script>
<style scoped>
  .model-container {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: var(--model-index);
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .model-main {
    position: relative;
    z-index: 9;
    width: 80%;
    background-color: #ffffff;
    border-radius: 10px;
    overflow: hidden;
    text-align: center;
    color: #1653c4;
  }

  .model-title {
    font-size: 18px;
    color: #333;
    width: 100%;
    padding: 10px 0;
    font-weight: bold;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .model-content {
    font-size: 16px;
    color: #666;
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .model-buttons {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .button {
    flex: 1;
    padding: 18px 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 16px;
    outline: none;
    background-color: #ffffff;
    border: 0;
    border-top: 1px solid #f2f2f2;
    border-right: 1px solid #f2f2f2;
    color: #1653c4;
  }

  .button:last-child {
    border-right: 0;
  }

  .button:active {
    background-color: #f2f2f2;
  }

  .model-mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.45);
  }
</style>