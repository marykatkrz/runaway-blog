<template>
    <Layout>
        <div class="webdev">
            <div id="dev">
                <div>
                    <g-image id="nash" src="~/assets/code.jpg"/>
                </div>
                <div id="code">
                    <h2>Meet Mary, Web Developer</h2>
                    <p>My journey has not always been just about traveling to physical locations. I have always admired people that grew up knowing what they wanted to do for a career. I have never been one of those people. When I was younger, I thought I'd be a figure skater. Then I thought musician, singer, dancer, writer. After getting an Associate's degree in Business Administration, something I never actually planned on using, I briefly attending school pursuing Music Business. But life is funny and it just never felt right. I finished out school with a degree in Liberal Studies, with no particular direction I wanted to go next.</p>
                </div>
            </div>
            <div id="dev-two">
                <h3>Now What?</h3>
                <p>As many people eventually realize, I have learned that life is not a linear path. Remember when I said I wanted to be a writer? Well, I tried my hand at a WordPress blog. I created an account and started designing my own website. I didn't understand how everything worked together, but I thoroughly enjoyed creating something out of nothing. Unfortunately, I always thought learning how to code would be simply too hard for me. I worried that it would never click and I'd be wasting my time.</p>
            <p>After many years of working dead-end jobs in restuarants and hotels, I knew I had to do something for my future. This led to researching schools that would teach me how to code and eventually just jumping right in to the world of web development.</p>
            </div>
            <h3>Best. Decision. Ever.</h3>
            <p>I love building things. I love learning new things. I love being creative. And I love being able to do all of that through code. It may have taken some time, but I am so glad that I have reached this point in my life.</p>
            <h4>Okay, so why am I telling you all this?</h4>
            <p>If you've ever dreamed of starting a blog of your own but don't know where to start, I want to help. Or maybe you've been making products and would like to create a site for your clients to browse and buy your goods. I can do that, too!</p>
            <p>While WordPress is one of the most popular content management systems out there, I built Run Away Next from scratch using Gridsome and the JavaScript framework, Vue (if you're familiar with programming languages!) It is not necessary to know how to code for Wordpress, however, being able to insert custom HTML and CSS into your site will make a difference in its design. No matter how you want to build it, I'd love to help you create your ideal website!</p>
            <p>Check out my <a href="http://marykrzesicki.me/" target="_blank">portfolio</a> to see some of my work!</p>
            <em>Curious? Send a message through the <a href="/contact">contact form</a> or feel free to email me at runawaymaryk@gmail.com.</em>
        </div>
    </Layout>
</template>
<style scoped>
.webdev{
    margin: 60px 100px 30px 100px;
    padding: 30px;   
    font-size: 13pt;
}
a{
    text-decoration: underline;
}
  @media (min-width: 768px){
    #dev{
        display: flex;
        justify-content: space-between;
    }
    #nash{
        width: 400px;
        opacity: 0.9;
    }
    #code{
        width: 400px;
    }
    #dev-two{
        margin: 30px;
        padding: 20px;
        
    }
  }
</style>