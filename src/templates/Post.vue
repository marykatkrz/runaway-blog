<template>
  <Layout>
    <div class="post-title">
      <h1>{{$page.post.title}}</h1>
        <p class="post-date"> {{ $page.post.date}} 
      </p>
    </div>
    <div class="post-content">
      <p v-html="$page.post.content" />
    </div>
  </Layout>
</template>
<page-query>
query WebPost ($path: String!) {
   post: post (path: $path) {
    id
    title
    content
    date (format: "D MMMM YYYY")
  }
}
</page-query>