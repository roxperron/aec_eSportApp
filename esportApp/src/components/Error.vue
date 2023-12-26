<template>
   <div class="container-fuid">
    <div class="d-flex justify-content-center align-item-center divImg py-5 my-5">
      <img src="../assets/img/gameover.jpg" class="errorImg" alt="">
    </div>

    <div class="errorTxt">
      <h3 class="text-center errorTitle py-5">Désolé !</h3>
      <p class="text-center errorInfo">Cette page n'existe pas.</p>
    </div>
 
   </div>
   
  </template>
  
  
  <script>
  export default{
    data(){
      return{
        
      }
    }
  }
  
  </script>
  
  <style>
  .errorImg{
    width: 1000px;
    height: auto;
    opacity: 0.9;
  }
  .errorTxt{
    position: relative;
  }

  .errorTitle {
    position: absolute;
    bottom:650px;
    left:700px;
    color:white;
    font-size: 54px;
  }

  .errorInfo{
    position: absolute;
    padding:10px;
    bottom:600px;
    left:550px;
    color:white;
    font-size: 48px;
  }
  
  </style>