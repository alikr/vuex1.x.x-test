<template>
	<div>
		<p>this is vuex old version <em>{{msg}}</em></p>

		<button @click="add(1)">+</button>
	</div>
	<app-footer></app-footer>
</template>
<script>
	import appFooter from './footer.vue';
	export default {
		vuex:{
	        getters:{
	            msg : function(state){
	                return state.messages
	            }
	        },
	        actions:{
	            add :function(store,param){
	                store.dispatch('COMMIT',param)
	            }
	        }
	    },
	    components:{
	        appFooter
	    }
	}
</script>