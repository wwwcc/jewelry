<template>  
<div>
   <y-header></y-header>
   
   <router-view class="main"></router-view>
    <y-footer></y-footer>
</div>


</template>

<script>
  import YHeader from '@/common/header'
  import YFooter from '@/common/footer'
  export default {
     components: {
      YHeader,
      YFooter,
     
     }
  }
</script>

<style scoped>
    
</style>