<template>
  <div class="home">
    <monaco :codes="content"></monaco>    
  </div>
</template>

<script>
import monaco from '../../components/monaco.vue'

export default {
  components:{    
    monaco
  },
  data(){
      return{
          content:'console.log("wqer")'
      }
  }
}
</script>

<style>

</style>