<template> 
  <div class="post-list">
    <g-link :to="post.path"><h3 class="title" v-html="post.title"/></g-link>
    <em><p class="date" v-html="post.date"/></em>
    <g-image class="featureimg" :src="post.featureimg"/>
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
  height: 10%
}
.description{
  height: 10%;
  padding: 10px;
}
.post-list{
  background: rgb(12, 58, 70);
  color:rgb(235, 235, 235);
  padding: 30px;
  margin: 20px;
  text-align: center;
  border-radius: 4pt;
  font-size: 13pt;
  box-shadow: 0px 0px 15px 3px grey;
}
.post-list:hover{
  padding: 32px;
  transition-duration: 0.5s; 
  background: rgb(30, 108, 128);
  box-shadow: 0px 0px 15px 10px grey;
}
.post-list a{
  color:rgb(235, 235, 235);
  text-decoration: none;
}
.post-list a:hover{
  color: rgb(255, 167, 4);
}
@media (max-width: 770px){
  .featureimg{
    height: 150px;
  } 
   .post-list{
    height: 375px;
  }
}
@media(min-width: 770px){
  .post-list{
    width: 25%;
    height: 450px;
  }
  .featureimg{
    height: 200px;
  }
}
</style>