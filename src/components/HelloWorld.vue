<template>
  <div class="hello">
    名称：{{this.$store.state.name}}
    价格：{{this.$store.getters.price}}
    售价：{{this.$store.state.salePrice}}
    <button @click="minusPrice">同步加钱</button>
    <button @click="redusPrice">异步加钱</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  mounted(){
    console.log(this.$store.getters.price)
  },
  methods:{
    minusPrice(){
      this.$store.commit("addPrice",12);
    },
    redusPrice(){
      this.$store.dispatch("resPrice");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
