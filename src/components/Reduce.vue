<!-- 减少组件 -->
<template>
  <div>
    <h2>{{showNum}}</h2>
   <button @click="subbtn">-1</button>
  </div>
</template>

<script>
import {mapState,mapMutations,mapGetters} from 'vuex'
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  },

  mounted() {},

  methods: {
    ...mapMutations(['sub']),
    subbtn(){
     this.$store.dispatch('subAsync')
    }
  }
}

</script>
<style  lang='less'>
</style>