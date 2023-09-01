<template>
<div>
<nav class="navbar1">
        <div class="navbar-content">
          <span class="navbar-text">Welcome to Our Website!</span>
          <button class="navbar-button" @click="signIn">Sign In</button>
        </div>
      </nav>   
    <nav class="navbar background h-nav-resp">
        <ul class="nav-list h-nav-resp ">
        <div class="logo"><img src="starbucks.png" alt="logo"></div> 
        <li><a href="#home">HOME</a></li>   
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#services">SERVICES</a></li>
        <li><a href="#contact">CONTACT US</a></li>
        </ul>
    </nav>
    <section class="firstsection background1">
        <div class="box-main">
            <div class="firstHalf1">
                <p class="text-big" >STARBUCKS SINCE 1989 </p>
                    <p class="text-small" >Starbucks Corporation is an American multinational chain of coffeehouses and roastery reserves headquartered in Seattle, Washington.As of November 2021, the company had 33,833 stores in 80 countries, 15,444 of which were located in the United States.</p>
                    <div class="buttons">
                        <button class="btn" style=" font-family: 'Dancing Script', cursive;">Subscribe</button>
                    </div>
            </div>
        </div>
    </section>
        <!-- /************************************************/ -->
        <section class="section" id="services">
            <div class="paras1">
            <p class="sectionTag text-big " style="font-family: 'Tilt Prism', cursive;">Starbucks Corporation 
                </p>
            <p class="sectionSubTag text-small">More than just great coffee. Explore the menu, sign up for Starbucks® Rewards, manage your gift card and more.</p> 
        </div>
        </section>
        <section class="section" id="services">
            <div class="paras2">
            <p class="sectionSubTag text-small"> As of November 2021, the company had 33,833 stores in 80 countries, 15,444 of which were located in the United States. It is the world's largest coffeehouse chain.</p> 
        </div>
        </section>
        <!-- /***********************************************************/ -->
        <div class="container">
        <div class="card">
            <div class="card-content">
                <h1>1</h1>
                <h2>SHOP PRODUCTS</h2>
            </div>
        </div>
        <div class="cc">

            <p>Vue.js, often referred to as Vue,in of</p>
           <p>framework that has gained immense of </p>
           <p>development.Always ensure that HTML</p></div> 
       <!-- .............................. -->
        <div class="card" >
            <div class="card-content">
                <h1>2</h1>
                <h2>DONATE US</h2>
            </div>
        </div>
        
        <div class="cc"> 
                
            <p>Vue.js, often referred to as Vue,in of</p>
           <p>framework that has gained immense of </p>
           <p>development.Always ensure that HTML</p></div> 
           
       <!-- .......................................... -->
        <div class="card">
            <div class="card-content">
                <h1>3</h1>
                <h2>BUY GIFT</h2>
            </div>
        </div>
             
             <div class="cc"> 
                
                <p>Vue.js, often referred to as Vue,in of</p>
               <p>framework that has gained immense of </p>
               <p>development.Always ensure that HTML</p></div>  
 </div>
        <!-- .......................................... -->
        <section class="firstsection1 background2">
            <div class="box-main2">
                <div class="firstHalf1">
                    <p class="text-big" >Starbucks Corporation </p>
                        <p class="text-small" >Starbucks Corporation is an American multinational chain of coffeehouses and roastery reserves headquartered in Seattle.</p>
                        <div class="buttons">
                            <button class="btn" style=" font-family: 'Dancing Script', cursive;">SHOP NOW</button>
                        </div>
                </div>
            </div>
        </section>
        </div>
        
        
    
</template>
<script>


</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
}

.logo{
    justify-content: center;
    align-items: center;
    width: 20%;
    display: flex;
}

.logo img{
    width: 30%;
    border: 3px solid white;
 border-radius: 50% ;
}
.navbar1{
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    cursor: pointer;
    color: blue;
    background-color: black;
    top: 0;
    padding: 1%;
}
.navbar{
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    cursor: pointer;
    /* position: sticky; */
}
.nav-list{
    width: 70%;
    align-items: center;
    display: flex;
}
.nav-list li{
    list-style: none;
    padding: 26px 30px;
}
.nav-list li a{
    text-decoration: none;
    color: rgb(8, 140, 254);
    }
    .nav-list li a:hover{
        text-decoration: none;
        color: brown;
    }
    .background{
        background: rgba(0,0, 0, 0.7);
        background-size: cover;
        background-blend-mode: darken;
    }
    .background1{
        background: rgba(0,0, 0, 0.7) url('sb4.jpg');
        background-size: cover;
        background-blend-mode: darken;
    }
    .background2{
        background: rgba(0,0, 0, 0.7) url('sb.webp');
        background-size: cover;
        background-blend-mode: darken;
    }
    /* .background2{
        background: rgba(0,0, 0, 0.7) url('citi2.jpg');
        background-size: cover;
        background-blend-mode: darken;
    } */
    .navbar-button{
        padding: 5px 10px;
        margin: 5px 3px;
        border: 2px solid white;
        border-radius: 8px;
        cursor: pointer;
        font-size: 12px;
    }
    .firstsection{
        height: 50vh;
       
    }
    .firstsection1{
        height: 60vh;
        margin-top: -300px;
       
    }
    .secondsection{
        height: 70vh;
        margin-top: -20%;
        margin-bottom: 0%;
     
    }
    .box-main{
        display: flex;
        justify-content: left;
        align-items: left;
        color: white;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin: auto;
        max-width: 50%;
        height: 130%;
        margin-left: 2%;
    }
    .box-main2{
        display: flex;
        justify-content: right;
        align-items: right;
        color: white;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin: auto;
        max-width: 50%;
        height: 100%;
        margin-right: 2%;
    }
 
        .firstHalf1{
            flex-direction: column;
            justify-content: center;
            display: flex;
            width: 80%;
            
            }
        .text-big{
            font-size: 41px;
            font-family: Arial, Helvetica, sans-serif;
            }
            .text-small{
                font-size: 18px;
              font-family: 'Times New Roman', Times, serif;
            }
            .btn{
                padding: 8px 20px;
                margin: 7px 3px;
                border: 2px solid white;
                border-radius: 8px;
                cursor: pointer;
                font-size: 12px;
            }
            .paras1{
                padding: 0px 65px;
                margin-right: 50%;
            }
            .paras2{
                padding: 0px 65px;
                margin-left: 50%;
                margin-top: -10%;
            }
            .section{
                display: flex;
                align-items: center;
               justify-content: space-evenly;
                max-width: 80%;
                margin: auto;
                padding: 10px;
            }
            .section-left{
                flex-direction: row-reverse;
            }
            /* .................................. */
            
            .card-content {
                text-align: center;
                color: white;
            }  
            .card-content h1{
                padding: 27px 0px;
            }
            .card-content h2{
                padding: 28px 0px;
            }
               
               .container{
                width: 1170px;
                margin: auto;
                display: flex;
            justify-content: space-around;
               }
               
        .card{
            flex-basis: 22%;
            background: black;
            margin: 10px 0px;
            box-shadow: 0px 0px 10px 3px gray;
            text-align: center;
            padding: 20px 25px;
            height: 35vh;
            
        }
        .cc{
            flex-basis: 22%;
            margin: 290px -80px;
            text-align: center;
            padding: 20px 25px;
         margin-left: -43%;
        
        }
     
       

           
        
        /* ............................... */
            @media only screen and (max-width:1140px){
                .nav-list{
                    flex-direction: column;
                    max-width: 100%;
                }
                .navbar{
                    flex-direction: column;
              height: auto;
                }
                .navbar1{
                    flex-direction: column;
                    text-align: center;
                }
                .h-nav-resp{
                    height: auto;
                }
                .v-class-resp{
                  opacity: 0;
                }
                .text-big{
                    text-align: center;
                        }
                        .text-small{
                    text-align: center;
                        }
               
                        .box-main{
                          flex-direction: column;
                            max-width: 100%;
                            align-items: center;
                            justify-content: center;
                        
                        }
                        .box-main2{
                            flex-direction: column;
                            max-width: 100%;
                            align-items: center;
                            justify-content: center;
                            margin-top: 90%;

                        }
                        .background1{
                            max-width: 100%;
                            height: auto;
                        }
                        .background2{
                            max-width: 100%;
                            height: auto;
                            margin-top: -87%;
                        }
                .section{
                    flex-direction: column-reverse;
                  
                }
                .buttons{
                    text-align: center;
                        }
                .paras1{
                    padding: 0;
                    margin: 0;
                    text-align: center;
                    
                }
                .paras2{
                    padding: 0;
                    margin: 0;
                    text-align: center;
                } 
                .cc{
                    margin: 4% 0; 
                    flex-direction: column;
                    text-align: center;
                    max-width: 100%;
                }
               
                .dd{
                    margin: 4% 0; 
                    flex-direction: column;
                    text-align: center;
                    max-width: 100%;
                }
                .container{
                    width: 100%;
                    flex-direction: column;
                }
                .card{
                    margin: 10px;
                    
                }
                .cc{
                    margin: 10px;
                }
               
            }
</style>
