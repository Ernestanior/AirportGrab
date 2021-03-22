import Vue from 'vue';
import model from './Model.vue';


export default {
  install(Vue) {

    const defaults = {
      show: false,
      mask: true,
      title: 'hint',
      content: 'content',
      confirmButton: true,
      cancelButton: true,
      confirmText: 'Okay',
      cancelText: 'Cancel',
      cancelCallBack: () => { },
      confirmCallBack: () => { }
    };

    const modelVueConstructor = Vue.extend(model);

    Vue.prototype.$model = (options = {}) => {
      if (Vue.prototype.$isServer) return;
      options = Object.assign({}, defaults, options);
      let parent = document.body;
      let instance = new modelVueConstructor({
        el: document.createElement('div'),
        data: options
      });
      parent.appendChild(instance.$el);

      return instance;
    };

  },
};