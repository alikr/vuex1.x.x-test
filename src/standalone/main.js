import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

var store =  new Vuex.Store({
    state: {
        messages: 0
    },
    mutations:{
        "COMMIT": function(state, msg) {
            state.messages += msg;
        }
    }
})

var App = Vue.extend({
    template:`<div><p>this is vuex old version,  {{msg}}</p><button @click="add(1)">+</button><br/></div>`,
    vuex:{
        getters:{
            msg : function(state){
                return state.messages
            }
        },
        actions:{
            add :function(store,param){
                store.dispatch('COMMIT',param);
            }
        }
    }
})
new Vue({
    el: '#app',
    store,
    components:{
        App:App
    }
});