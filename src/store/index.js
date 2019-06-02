import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  // actions: {
  //   changeCity (ctx, city) {
  //     ctx.commit('changeCity', city) // 组件调用action，action调用mutation，mutation去改变数据
  //   }
  // },
  mutations,
  getters: {
    doubleCity (state) {
      return state.city + ' ' + state.city // 借助state里的数据算出新的数据时，皆准getters避免数据冗余
    }
  }
})
