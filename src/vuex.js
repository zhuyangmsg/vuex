let vue = null;
//vue.use会调用install方法，说明这是个vue的插件
const install = (_vue) => {
    if(vue!=_vue){
        vue=_vue;
    }
    //全局混合把代码嵌入到所有的组件上
    vue.mixin({
        beforeCreate(){
            if(this.$options && this.$options.Store){
                this.$store = this.$options.Store;
            }else{
                this.$store = this.$parent && this.$parent.$store;
            }
        }
    })
}
class Store{
    constructor(option){
        const _that = this;
        this.getState = new vue({
            data:function(){
                return{
                    state:option.state
                }
            }
        });
        this.getters={};
        for(let key in option.getters){
            Object.defineProperty(this.getters,key,{
                get(){
                    return option.getters[key](_that.state);
                }
            })
        }
        let mutations = {};
        for(let key in option.mutations){
            mutations[key]=value=>{
                option.mutations[key](this.state,value);
            }
        }
        this.commit = (key,value=null) => mutations[key](value);
        let actions = {};
        for(let key in option.actions){
            actions[key]=()=>{
                option.actions[key](this);
            }
        }
        this.dispatch = key => actions[key]();

    }
    get state(){
        return this.getState.state;
    }
}
export default { install ,Store }