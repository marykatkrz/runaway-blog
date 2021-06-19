<template>
  <Layout>
    <div id="return">
      <a href="/blog">Back to Blogs</a>
    </div>
    <div id="posts">
      <g-image class="post-image" :src="$page.post.featureimg"/>
    <div class="post-title">
      <h1>{{$page.post.title}}</h1>
      <em><p class="post-date"> {{ $page.post.date}}</p></em>
    </div>
    <div class="post-content">
      <p v-html="$page.post.content" />
    </div>
    </div>
     <div id="return">
      <a href="/blog">Back to Blogs</a>
    </div>
  </Layout>
</template>
<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
      id 
      title
      path
      date 
      content
      featureimg 
  }
}
</page-query>
<style scoped>
  #return{
    text-align: center;
    text-decoration: underline;
    margin-top: 50px;
    padding: 20px;
    font-size: 14pt;
  }

  .post-content{
    text-align: center;
    font-size: 13pt;
    padding: 10px;
  }

  .post-image{
     border: 8px solid white;
  }
  @media (max-width: 770px){
    .post-image{
      width: 80%;
    }
  
  }
  @media(min-width: 770px){
  #return{
    text-align: right;
  }
  .post-image{
    width: 400px;
  }
  .post-content{
    padding: 20px 200px;
  }
  }
</style>