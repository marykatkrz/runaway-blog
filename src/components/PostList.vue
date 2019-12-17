<template> 
  <div class="post-list">
    <g-link :to="post.path"><h3 class="title" v-html="post.title"/></g-link>
    <p class="date" v-html="post.date"/>
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
.post-list{
  border-top: 1px solid rgb(0, 0, 87, 0.7);

}
 @media (min-width: 768px){
 }
</style>