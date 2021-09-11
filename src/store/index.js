import Vuex from "vuex";
import Vue from "vue";
import todo from "./modules/todos";
//Load vuex
Vue.use(Vuex);

//create store
export default new Vuex.Store({
  modules: {
    todo,
  },
});
