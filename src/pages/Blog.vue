<template>
  <Layout>
   <header class="header">
      <h1>Run Away Next Blogs</h1>
    </header>
    <section class="posts">
      <PostList v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
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
  query blogPosts {
    posts: allWebPost (filter: { blogpost: { eq: true }}, sortBy: "date", order: ASC) {
      edges {
        node {
          id
          title
          path
          date (format: "D MMMM YYYY")
          description
        }
      }
    }
  }
</page-query>

