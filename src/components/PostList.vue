<template> 
  <div class="post-list">
    <hr class="line">
    <p class="date" v-html="post.date"/>
    <g-link :to="post.path"><h3 class="title" v-html="post.title"/></g-link>
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
  ul{
    list-style-type: none;
  }
  li{
    padding: 20px;
  }
</style>