<template>
<table class="container">
        <tr>
            <td class="navbar" >
            <img src="../assets/Logo_blanco.png" class="logo" alt="Inicio" >

        <ul>

         
            <li><router-link to="/">Pagina Principal</router-link></li> 
            <li><router-link to="/login" class="btn-Inicio-index">Inicio de Sesion</router-link></li>
        </ul>
    </td>
    </tr>
  
</table>
	
</template>

<script>
  export default {
  name: 'MenuRegistroUser'
  }


</script>
