<template>
  <Layout>
    <div class="form">
    <form id="contact" name="contact" method="POST" data-netlify="true">
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
    </div>
  </Layout>
</template>

<style scoped>
  #contact{
    color: white;
    font-size: 13pt;
    background-image: url("~@/assets/maps.jpg");
    border: 2px solid white;
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
 @media (min-width: 768px){
      button{
      font-size: 14pt;
      padding: 8px;
      width: 20%;
      background: rgb(12, 58, 70);
      color: white;
    }
      button:hover{
      background: white;
      color:rgb(255, 167, 4);
      border: 2px solid rgb(255, 167, 4);
    }
  }
</style>