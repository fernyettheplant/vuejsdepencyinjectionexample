import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import KanyeWest from './modules/KanyeWest'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    KanyeWest
  }
})
