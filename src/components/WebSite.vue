<template>
  <div>
    <nav class="navbar">
      <div class="navbar-content">
        <span class="navbar-text">Welcome to Our Website!</span>
        <button class="navbar-button" @click="signIn">Sign In</button>
      </div>
    </nav>   
   <nav class="second-navbar">
      <div class="navbar-content">
        <a href="#" class="nav-link">Home</a>
        <a href="#" class="nav-link">About Us</a>
        <a href="#" class="nav-link">Shop Now</a>
        <a href="#" class="nav-link">Contact</a>
      </div>
    </nav>
   <div class="container1">
  <div class="content1">
    <h1 class="heading1">How We're Keeping You Safe From Covid-19</h1>
    <p class="description1">Explore our amazing products and services.
      Vue.js, often referred to as Vue, is a progressive JavaScript
      framework that has gained immense popularity in the web
    </p>
    <button class="-button1">Get Started</button>
  </div>
   </div>
<div>
      <v-row class="aa">
        <v-col cols="12" lg="6" md="6" sm="12">
          <p>This is a paragraph for</p>
          <h2>THE VERY FIRST HEADING</h2>
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="12">
          <p>Vue.js, often referred to as Vue, is a progressive JavaScript</p>
         <p>framework that has gained immense popularity in the web</p>
         <p>development.Always ensure that HTML template is correct</p>
        </v-col>
         </v-row>
   </div>
<div class="card-container">
  <div class="card1">
    <h2>01</h2>
    <h1 class="card-">SHOP PRODUCTS.</h1>
  </div>
  <div class="card2">
    <h2> 02</h2>
    <h1 class="card-">DONATE.</h1>
  </div>
  <div class="card3">
    <h2>03</h2>
    <h1 class="card-">BUY GIFT CARDS.</h1>
  </div> 
</div>
<div>
      <v-row >
        <v-col class="bb" cols="12"  lg="4" md="4" sm="12">
          <p>Vue.js, often referred to as Vue,in of</p>
         <p>framework that has gained immense of </p>
         <p>development.Always ensure that HTML</p>
        </v-col>
        <v-col class="cc" cols="12" lg="4" md="4" sm="12"> 
        <p>Vue.js, often referred to as Vue,in of</p>
         <p>framework that has gained immense of </p>
         <p>development.Always ensure that HTML</p>
        </v-col>
        <v-col class="dd"  cols="12" lg="4" md="4" sm="12"> 
          <p>Vue.js, often referred to as Vue,in of</p>
         <p>framework that has gained immense of </p>
         <p>development.Always ensure that HTML</p>
        </v-col>
         </v-row>
   </div>
   <div class="container2">
  <div class="content2">
    <h1 class="heading2">How We're Keeping You Safe From Covid-19</h1>
    <p class="description2">Explore our amazing products and services.
      Vue.js, often referred to as Vue, is a progressive JavaScript
      framework that has gained immense popularity in the web
    </p>
    <button class="button2">Get Started</button>
  </div>
   </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      welcomeMessage: "Welcome to Our Website!",
    };
  },
  methods: {
    signIn() {
      alert("Sign in Successfully!"); 
    },
  },
};
</script>
<style scoped>
/* style for first navbar */
.navbar {
  background-color: #636262;
  padding: 10px 0;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.navbar-text {
  font-size: 18px;
}
.navbar-button {
  background-color: #251e1e;
  color:white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}
/* Style for the second navbar */
.second-navbar {
  background-color: #0f0e0e;
  padding: 0px 0;
 display: flex;
  justify-content: center;
  align-items: center;
   position: sticky;
    top: 0;
    cursor: pointer;
}
.nav-link{
   
    display: flex;
    align-items: center;
    padding: 26px 30px;
    color:#636262;
    text-decoration: none;
}
.navbar a:hover {
  color:#915555; 
}
/* content */
.aa{
  margin-left: 300px;
  margin-top: 50px;
}
/* cards */
 .card-container {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
  }
  .card- {
    margin-top: 100px;
    text-align: center;
  }
    .card {
    border: 1px solid #0a0a0a;
    padding: 20px;
    width: 30%;
    box-sizing: border-box;
      height: 290px; 
      margin: 0;
  }
  .card1 {
    margin-left: auto;
     border: 1px solid #fcfcfc;
    padding: 20px;
      height: 290px; 
    width: 20%;
    box-sizing: border-box;
    margin-right: 10px;
   background-color: #030303;
   color: white;
 margin-right: 10px;
 
  }
  .card2 {
    margin: 0 auto;
     border: 1px solid #f0eeee;
    padding: 20px;
    width: 20%;
    box-sizing: border-box;
    background-color: #030303;
    color: white;
      height: 290px; 
       margin: 0 5px;
  }
  .card3 {
    margin-right: auto;
    color: white;
     border: 1px solid #f9f9f9;
     background-color: #030303;
    padding: 20px;
    width: 20%;
    box-sizing: border-box;
      height: 290px; 
       margin-left: 10px;
  }
  /* description */
  .bb{ 
   margin-left: 285px;
  margin-top: 20px;
}
  .cc{
  margin-left: 610px;
  margin-top: -80px;
}
  .dd{
  margin-left: 950px;
  margin-top: -80px;
}
 body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }
  /* ................. */
  .container2 {
    display: flex;
    align-items: center;
    height: 50vh;
    background-image: url('cloud.jpg'); 
    background-size: cover;
    background-position: center;
    color: rgb(243, 238, 238);
  }
  .container1 {
    display: flex;
    align-items: center;
    height: 50vh;
    background-image: url('paris.jpg'); 
    background-size: cover;
    background-position: center;
    color: rgb(12, 12, 13);
  }

  .content2 {
    text-align: center;
  }
  .content1 {
    text-align: center;
  }
   .heading2 {
    font-size: 36px;
    margin-bottom: 10px;
    margin-left: 1000px;
  }
  .heading1 {
    font-size: 36px;
    margin-bottom: 10px;
    margin-left: 1000px;
  }

  .description2 {
    font-size: 18px;
    margin-bottom: 20px;
     margin-left: 1000px;
  }
  .description1 {
    font-size: 18px;
    margin-bottom: 20px;
     margin-left: 1000px;
  }

  .button2 {
    background-color: #efe9e9;
    color: rgb(21, 20, 20);
    padding: 10px 20px;
     margin-left: 1000px;
    border: none;
    cursor: pointer;
    font-size: 16px;
  }
  .-button1 {
    background-color: #030303;
    color: white;
    padding: 10px 20px;
     margin-left: 1000px;
    border: none;
    cursor: pointer;
    font-size: 16px;
  }
  /* ...................... */
</style>
