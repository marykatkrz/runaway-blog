<template>
  <Layout>
    <h1>The Blog</h1>
    <em>by Runaway Mary K</em>
    <section class="posts">
      <PostList v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
    </section>
  </Layout>
</template>
<script>
import PostList from "@/components/PostList";
export default {
  components: {
    PostList
  },
};
</script>
<page-query>
 query {
  allPost (sortBy: "date", order: ASC){
    totalCount
    edges {
      node {
        id
        title
        description
        date 
        path
        featureimg 
      }
    }
  }
}
</page-query>
<style scoped>

@media(min-width: 770px){
  .posts{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    }
  h1{
    padding: 60px 0 10px 0;
  }
}
</style>

