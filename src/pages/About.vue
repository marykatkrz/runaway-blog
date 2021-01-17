<template>
  <Layout>
    <div class="about">
      <div id="story">
        <h2>Hi, I'm Mary!</h2>
        <em>Or <a href="https://www.instagram.com/runawaymaryk/" target="_blank">RunawayMaryK</a> as I go by on the 'gram.</em>
        <p>I spent the first 20-something years of my life growing up in Jackson, Michigan, researching places I hoped to one day visit. After a trip to Maine here and a weekend in New York there, I packed up my little Chevy Cruze and moved by myself down to Nashville, Tennessee.</p>
        <p>Nashville ended up being full of adventures. Any time off was spent driving to the Great Smoky Mountains or exploring Asheville, North Carolina. I learned to love the outdoors, and at the same time I was enjoying my new city.</p>
        <p>While I love Nashville with all my heart, wanderlust does not rest. When a friend came to me and suggested a move to Portland, Oregon, I just couldn't say no. This time we packed up the car and the two of us embarked on an 11 day road trip across the United States.</p>
        <h3>IT WAS EPIC</h3>
        <p>Soon we made it to Portland and I have spent the past couple of years exploring the beautiful Pacific Northwest. It's home. <strong>Until the next time I move, of course.</strong></p>
        <p>Run Away Next started as a project to add to my resume (I wanted to test my coding skills!) Now I am expanding it into something a bit more, a resource for traveling with fun activities to engage in on your travels. Please, browse through the blog and see if anything catches your eye!</p>
        <p>And now I leave you with this:</p>
        <h3>Where will you Run Away Next?</h3>
      </div>
      <div>
      <g-image id="tip" src="~/assets/tippy.jpg"/>
      </div>
    </div>
  </Layout>
</template>

<style scoped>
#tip{
  width: 80%;
}
#story{
  padding: 10px;
}
@media(min-width: 770px){
  .about{
    display: flex; 
    margin-top: 60px;   
  }
  #tip{
    width: 400px;
    height: auto;
    border: 8px solid white;
    transform: rotate(5deg);
    margin: 150px 30px 30px 30px;   
  }
  #story{
    padding: 20px;
    width: 100%;
  } 
}
</style>