<template>
<table class="container">
        <tr>
            <td class="navbar" >
            <img src="../assets/Logo_blanco.png" class="logo" alt="Inicio" >

        <ul>

         
            <li><router-link to="/registro">Registro</router-link></li> 
            <li><router-link to="/" class="btn-Inicio-index">Salir</router-link></li>
        </ul>
    </td>
    </tr>
  
</table>
	
</template>

<script>
  export default {
  name: 'MenuLogin'
  }


</script>
