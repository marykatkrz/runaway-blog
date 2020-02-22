<template>
    <Layout>
        <div id="trip">
            <div id="planning">
            <g-image id="nash" src="~/assets/nash.jpg"/>
                <div class="personal">
                <h2 id="title">Personal Travel Planning</h2>
                <h2>"I haven't been everywhere, but it's on my list"</h2>
                <p>I know, I know. We've all seen the Instagram posts with that quote. But the truth of the matter is that, yeah, I want to go everywhere and just haven't been able to...yet!</p>
                <p>I've been fortunate enough to have visited quite a few places, and now have that travel knowledge and the anecdotes to share with others. As for the places I haven't been, I have spent hours hanging out on my computer doing research, hoping to make all my dream adventures a reality. Needless to say, I am not an expert! But what I do know is that my friends trust me to plan entire vacations and they get to go along for the ride. And I can do that for you, too! Most importantly, though, is that I want to create an itinerary specifically just for you based on your interests.</p>
                <em>Curious? Send a message through the <a href="/contact">contact form</a> or feel free to email me at runawaymaryk@gmail.com!</em>
                </div>
            </div>
        </div>       
    </Layout>
</template>

<style scoped>
#nash{
    margin-top: 30px;
    width: 100%;  
}
.personal {
    padding: 20px;
}
#planning {
    text-align: center;
}
#title{
    font-size: 32pt;
    font-family: 'Dancing Script', cursive;
}
.personal em{
    font-size: 14pt;
}
@media(min-width: 770px){
    .personal {
        position: absolute;
        top: 100px;
        right: 20px;
        background-color: white;
        padding: 30px;
        border: 1px solid rgb(0, 0, 85);
        width: 30%;
    }
    #planning {
        position: relative;
        text-align: center;
    }
}
</style>