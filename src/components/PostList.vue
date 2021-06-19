<template> 
<div class="post">
<g-link :to="post.path">
  <div class="post-list">
    <h3 class="title" v-html="post.title"/>
    <em><p class="date" v-html="post.date"/></em>
    <g-image class="featureimg" :src="post.featureimg"/>
    <p class="description" v-html="post.description"/>
  </div>
 </g-link>
 </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style scoped>
.title{
  font-size: 16pt; 

}
.description{
  height: 4%;
}
.post{
  background: white;
  color: rgb(0, 0, 85);
  padding: 10px;
  margin: 20px;
  text-align: center;
  border-radius: 8pt;
  font-size: 12pt;
  box-shadow: 0px 0px 15px 3px grey;
}
.post:hover{
  transition-duration: 0.5s; 
  background: rgb(30, 108, 128);
  box-shadow: 0px 0px 15px 10px grey;
  border: 1px solid white;
}
.post a{
  color: rgb(0, 0, 85);
  text-decoration: none;
}
.date{
  height: 12pt;
}

@media (max-width: 770px){
   .post{
    height: 300px;
  }
  .featureimg{
  height: 100px;
  width: auto;
}
  .title{
    height: 30px;
  }
}
@media(min-width: 770px){
  .post{
    width: 25%;
    height: auto;
  }
  .featureimg{
    height: 150px;
  }
  .title{
    height: 40px;
  }
}
</style>