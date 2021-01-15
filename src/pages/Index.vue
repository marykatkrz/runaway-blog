<template>
  <div>   
    <Layout>
    <div id="index">
      <g-image id="home" src="~/assets/crg.jpg" />
    </div>
    <div id="blurb">
      <h2>Welcome to Run Away Next!</h2>
      <p>I'm Mary, and I love running away. Not necessarily from anything, but toward my next adventure! Whether this is in a national park or a big city, I love exploring new places and hope to inspire you all to do the same.</p>
      <g-link to="/about/"><button>READ THE FULL STORY</button></g-link>
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
  button{
    padding: 15px;
    background-color: rgb(12, 58, 70);
    color: white;
    font-size: 11pt;
    border: none;
    border-radius: 4pt;
  }
  button:hover{
    background-color: rgb(9, 40, 48);
    color:white;
    cursor: pointer;
  }
  #blurb{
    padding: 10px;
  }
  @media (min-width: 770px){
    #blurb{
      padding: 30px 150px;
    }
    #blurb h2{
      font-size: 20pt;
    }
    #blurb p{
      font-size: 14pt;
    }
  }
</style>