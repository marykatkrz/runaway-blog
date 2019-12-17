<template>
  <Layout>
   <header class="header">
      <h1>Blog</h1>
      <em>by Runaway Mary K</em>
    </header>
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


