<template>
  <div class="Layout">
    <header class="header">
      <div class="dropdown">
      <button class="dropbtn"><font-awesome :icon="['fas', 'bars']" /></button>
      <div class="dropdown-content">      
        <a href=".">Home</a>
        <a href="./about">About</a>
        <a href="./blog">Blog</a>
        <a href="">Trip Planning</a>
        <a href="">Web Development</a>
        <a href="">Contact</a>
      </div>
      </div>     
      <a href=".">
      <div id="logo">
        <g-image id="img" src="~/assets/logo.png" width="200"/>
      </div>
      </a>     
    </header>
      <slot/>
    <footer>
      <h4><em>Run Away Next 2019</em></h4>
       <a href="https://www.instagram.com/runawaynext/" target="_blank"><font-awesome :icon="['fab', 'instagram']"/></a> 
    </footer>
  </div>
</template>

<style>
.Layout{
  margin: 10px 20px;
  padding: 10px;
  background-color: rgb(235, 235, 235);
  color: rgb(13, 13, 46);
}
img{
  width: auto;
  height: 100%;
}

#logo{
  display: inline-block;
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 50%;
}
footer{
  padding: 50px;
  margin: 50px;
  text-align: center;
}
@media (max-width: 768px){
button{
  color: rgb(13, 13, 46);
  border: none;
  
}
.dropbtn {
  color: rgb(13, 13, 46);
  padding: 10px;
  font-size: 12pt;
  border: none;
  margin: 15px;
  float: left;
}
.dropdown {
  height: 80px;
  width: 100%;
}
.dropdown-content {
  display: none;
  min-width: 200px;
  position: absolute;
  z-index: 1; 
  text-align: left;
  background-color: rgb(235, 235, 235);
}
.dropdown:hover .dropdown-content { 
  display:flex;
  flex-direction: column;
  font-size: 12pt;
  }
.dropdown:hover .dropbtn {background-color: #808080;}
}
a{
  padding: 20px;
  text-decoration: none;
  color: rgb(13, 13, 46);
}
a:hover{
  color:rgb(248, 187, 19);
}
@media(min-width: 768px){

  .Layout{
  margin: 40px 50px;
  padding: 30px;
  }
  #logo{
  width: 200px;
  height: 200px;
  float: left;
}
  .dropbtn{
    display: none;
  }
  .dropdown-content{
    float: right;
  }

}
</style>


