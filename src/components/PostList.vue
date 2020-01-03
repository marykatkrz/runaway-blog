<template> 
  <div class="post-list">
    <g-link :to="post.path"><h3 class="title" v-html="post.title"/></g-link>
    <em><p class="date" v-html="post.date"/></em>
    <p class="description" v-html="post.description"/>
    <g-link :to="post.path" class="read">Read More </g-link>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style scoped>
.title{
  font-size: 18pt;  
}
.post-list{
  width: 100%;
  background: rgb(0, 84, 105);
  color:rgb(235, 235, 235);
  padding: 30px;
  margin: 10px;
  text-align: center;
}
.post-list a{
  color:rgb(235, 235, 235);
}
.post-list a:hover{
  color: rgb(255, 167, 4);
}
@media(min-width: 768px){
  .post-list{
    width: 25%;
  }
}
</style>