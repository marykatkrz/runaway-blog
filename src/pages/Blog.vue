<template>
  <Layout>
    <h1>Runaway Next Blogs</h1>
    <ul>
        <li v-for="edge in $page.posts.edges" :key="edge.node.title">
        <a v-bind:href="edge.node.path">{{ edge.node.title }}</a>
        <em  :key="edge.node.date">
        {{ edge.node.date }}</em>
        <p  :key="edge.node.description">{{edge.node.description}}</p>
        <a :key="edge.node.post" v-bind:href="edge.node.path">Read More...</a>
       </li>
       
    </ul>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'List of blogs'
  }
}
</script>


<page-query>
  query blogPosts {
    posts: allWebPost (filter: { blogpost: { eq: true }}, sortBy: "date", order: ASC) {
      edges {
        node {
          id
          title
          path
          date (format: "D. MMMM YYYY")
          description
        }
      }
    }
  }
</page-query>

<style scoped>
  ul{
    list-style-type: none;
  }
  li{
    padding: 20px;
  }
</style>