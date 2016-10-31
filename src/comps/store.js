import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        messages: 0
    },
    mutations:{
        "COMMIT": function(state, msg) {
            state.messages += msg;
        }
    }
})