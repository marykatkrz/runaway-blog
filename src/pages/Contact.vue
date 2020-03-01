<template>
  <Layout>
    <form id="contact" name="contact" action="/pages/success" method="POST" data-netlify="true">
      <h2>Contact Form</h2>
      <em>Questions? Comments? Inquiries? Feel free to use this form or send emails to runawaymaryk@gmail.com and I will get back to you as soon as possible!</em>
      <p>
        <label>Name: <br/><input type="text" name="name" /></label>   
      </p>
      <p>
        <label>Email: <br/><input type="email" name="email" /></label>
      </p>
      <p>
        <label>Message: <br/><textarea type="text" name="message"></textarea></label>
      <p>
          <button type="submit">Send</button>
      </p>
    </form>
  </Layout>
</template>

<style scoped>
  #contact{
    color: white;
    font-size: 13pt;
    background-image: url("~@/assets/maps.jpg");
    border: 2px solid white;
    margin: 5px;
  }
  input{
    width: 80%;
    margin: 5px;
  }
  textarea{
    width: 80%;
    height: 100px;
    margin: 5px;
  }
   button{
      font-size: 14pt;
      padding: 8px;
      width: 25%;
      background:  rgb(12, 58, 70) ;
      color: white;
      border: none;
      border-radius: 4pt;
    }
 @media (min-width: 770px){
    #contact{
      padding: 10px 40px 50px 40px;
      border-radius: 10pt;
      margin: 60px 200px ;
    }
    input{
      width: 50%;
      margin: 5px;
    }
    textarea{
      width: 50%;
      height: 100px;
      margin: 5px;
    }
    button:hover{
      background: rgb(9, 40, 48);
      color: white;
      cursor: pointer;
    }
  }
</style>