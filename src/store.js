import vuex from '@/vuex';
import Vue from 'vue';
Vue.use(vuex);
export default new vuex.Store({
    state:{
        name:"zhu",
        price:1,
        salePrice:10
    },
    getters:{
        price:function(state){
            return state.price+5
        }
    },
    mutations:{
        addPrice:function(state,value){
            state.salePrice+=value
        },
        resPrice:function(state){
            state.salePrice-=10
        }
    },
    actions:{
        resPrice:function(context){
            let timer = setTimeout(()=>{
                context.commit("resPrice");
                clearTimeout(timer);
            },1000)
        }
    }
})