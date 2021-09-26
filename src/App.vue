<template>
      <router-view></router-view>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style>

*{
   margin: 0;
   padding: 0;
}
li{
   padding: 5px 2px 2px 4px;
}
.container {
   width: 95%;
   height:14vh;
   background-image: linear-gradient(rgba(5, 10, 5, 0.80), rgba(42,93,103));
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
}

.navbar {
   width: 100%;
   margin: auto;
   padding: 35px 0;
   display: flex;
   align-items: center;
   justify-content: space-between;
}

.logo {
   width: 130px;
   cursor: pointer;
   padding: 0px 10px 0px 10px;
}

.navbar ul li {
   list-style: none;
   display: inline-block;
   margin: 0 20px;
   position: relative;

}

.navbar ul li a {
   text-decoration: none;
   color: white;
   font-family: Roboto, "sans-serif";
   font-size: 1.2rem;
}
.btn-Inicio-index{
   justify-content: right;
    background: #4ae3b5;
    padding: 0px 5px 0px 5px;
    color: #fff;
    text-decoration: none; 
    border-radius:80px;
 }

.navbar ul li::before {
   content: "";
   height: 3px;
   width: 0%;
   background: rgb(145, 230, 106);
   position: absolute;
   left: 0;
   bottom: 0px;
   transition: 0.4s ease-out;
}

.navbar ul li:hover::before {
   width: 95%;
}

@media (max-width:750px) {
   .container {
      width: 95%;
      height:10vh;
      background-image: linear-gradient(rgba(5, 10, 5, 0.80), rgba(74,227,181));
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
   }
   
   .navbar {
      width: 100%;
      margin: auto;
      padding: 5px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
   }
   
   .logo {
      width: 130px;
      cursor: pointer;
      padding: 10px 10px 10px 10px;
   }
   .navbar ul li::before {
      content: "";
      height: 3px;
      width: 0%;
      background: rgb(230, 211, 106);
      position: absolute;
      left: 0;
      bottom: 0px;
      transition: 0.4s ease-out;
   }
   .btn-Inicio-index{
      justify-content: right;
       background: #2A5D67;
       padding: 0px 10px 0px 10px;
       color: #fff;
       text-decoration: none; 
       border-radius:80px;
    }
   
}
</style>
