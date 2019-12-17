<template>
  <div class="Layout">
    <header class="header">
      <div class="dropdown">
      <button class="dropbtn"><font-awesome :icon="['fas', 'bars']" /></button>
      <div class="dropdown-content">      
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/blog">Blog</a>
        <a href="">Trip Planning</a>
        <a href="">Web Development</a>
        <a href="/contact">Contact</a>
      </div>
      </div>     
      <a href="/">
      <div id="logo">
        <g-image id="img" src="~/assets/logo.jpg" width="200"/>
      </div>
      </a>  
        <h2 id="phrase">Where will you run away next?</h2>   
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
  margin: 10px 15px;
  padding: 10px;
  background-color: rgb(235, 235, 235);
  color: rgb(10, 10, 49);
  text-align: center;
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
#phrase{
  font-family: 'Kaushan Script', cursive;
  font-size: 28pt;
}
@media (max-width: 768px){
button{
  color: rgb(10, 10, 66);
  border: none;
  
}
.dropbtn {
  color: rgb(10, 10, 66);
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
  padding: 15px 0px;
  margin: 0px 20px;
  text-decoration: none;
  color: rgb(10, 10, 66);
  font-size: 13pt;
}
.dropdown-content a:hover{
  color:rgb(255, 167, 4);
  border-bottom: 2px solid rgb(255, 167, 4);
}
a:hover{
  color:rgb(255, 167, 4);
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

  #title{
    text-align: center;
    padding: 10px;
    margin-top: 40px;
  }
  #phrase{
    text-align: right;
    padding: 40px;
  }
}
</style>


