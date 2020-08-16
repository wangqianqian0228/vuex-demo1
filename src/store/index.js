import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 共享的数据
    count: 5
  },
  mutations: {
    add(state) {
      state.count++
    },
    addN(state, step) {
      // console.log(state,step)
      state.count += step
    },
    sub(state) {
      state.count--
    }
  },
  actions: {
    // 异步任务
    subAsync(context) {
      setTimeout(() => {
        context.commit("sub")
      }, 1000)
    },
    addNAsync(context, step) {
       console.log(context,step)
      setTimeout(() => {

        context.commit('addN', step)
      }, 1000)

    }
  },
  modules: {},
  getters:{
    showNum(state){
      return `商品的数量为：${state.count}`
    }
  }
})
