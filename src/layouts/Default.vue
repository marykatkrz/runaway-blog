<template>
  <div class="Layout">
    <header class="header">
      <div>
        <a href="">About</a>
        <a href="./blog">Blog</a>
      </div>
      <div id="logo">
        <h1><a href=".">Runaway Next</a></h1>
        <h2><em>Where will you runaway next?</em></h2>
      </div>
      <div >
        <a href="">Travel Planning</a>
        <a href="">Contact</a>
      </div>
    </header>
      <slot/>
  </div>
</template>

<style>
.Layout{
  margin: 30px 50px;
  
}
.header{
  display:flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.header a{
  padding: 30px;
  text-decoration: none;
  color:black;
}
#logo{
  display: flex;
  flex-direction: column;
}
</style>


