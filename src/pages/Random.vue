<template>
  <div>   
    <Layout>
    <div class="card">
      <h1>Random place generator</h1>
      <button @click="onClick">Display</button>
      <h2>{{message}}</h2>
    </div>
    </Layout>
  </div>   
</template>
<script>
import Layout from "~/layouts/Default.vue"

export default {
  components:{
    Layout
  }, 
  name: 'Card',
  data () {
    return {
      message: ''
    }
  },
  methods: {
    onClick () {
      this.message = "This works";
    }
  }
}

</script>

<style scoped>
  h1{
    margin-top: 10%;
  }
</style>