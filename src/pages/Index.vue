<template>
  <div>   
    <Layout>
    <div id="index">
      <g-image id="home" src="~/assets/crg.jpg" />
    </div>
    <div id="index">
      <h2>About</h2>
    </div>
    </Layout>
  </div>
    
</template>
<script>
import Layout from "~/layouts/Default.vue"

export default {
  components:{
    Layout
  }
  
}
</script>

<style scoped>
  
  #home{
    width: 100%;
    margin-top: 20px;
  }
  #index{
    border-bottom: 1px solid rgb(0, 0, 87, 0.7);
    padding: 10px;
  }
  @media (min-width: 768px){
 
  }
</style>