<template>
  <Layout>
      <h1>Welcome to the Blog!</h1>
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
  allPost {
    totalCount
    edges {
      node {
        id
        title
        description
        date 
        path
      }
    }
  }
}
</page-query>
<style scoped>
 .posts{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  }
h1{
  padding: 50px 0 10px 0;
}
</style>

