import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    doingKey: 0,
    doneKey: 0,
    user: {}
  },
  mutations: {
    changeDoingKey(state) {
      state.doingKey = Math.random()
      // console.log(state.doingKey);
    },
    changeDoneKey(state) {
      state.doneKey = Math.random()
      // console.log(state.doneKey);
    },
    addUser(state, user) {
      state.user = user
    },
    clearUser(state) {
      state.user = {}
    },
    editUser(state, user) {
      state.user.name = user.name
    }
  },
  actions: {
  },
  modules: {
  }
})
