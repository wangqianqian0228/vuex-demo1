<!-- 增加组件 -->
<template>
  <div>
    <h2>当前最新的count值为：{{$store.state.count}}</h2>
    <button @click="addbtn">+1</button>
    <button @click="addbtnstep">+1</button>
    <button @click="addAsyncStep">+N</button>
    <h1>{{this.$store.getters.showNum}}</h1>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    // addbtn(){
    //   this.$store.commit('add')
    // },
    // addbtnstep(){
    //   this.$store.commit('addN',5)
    // }
    ...mapMutations(['add','addN']),
    // 点击事件
    addbtn(){
      // 相当于add，addN函数都挂载到了当前实例上了，直接用this引用
       this.add()
    },
    addbtnstep(){
      this.addN(5)
    },
    addAsyncStep(){
      this.$store.dispatch('addNAsync',5)
    }
    
  }
}

</script>
<style  lang='less'>
</style>