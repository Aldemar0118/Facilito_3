<template>
<table class="container">
        <tr>
            <td class="navbar" >
            <img src="../assets/Logo_blanco.png" class="logo" alt="Inicio" >

        <ul>
            <li><router-link to="/registroproducto">Registrar Producto</router-link></li> 
            <li><router-link to="/listadoproductos">Listado Productos</router-link></li> 
     
           
            <li><router-link to="/login" class="btn-Inicio-index">Salir</router-link></li>
        </ul>
    </td>
    </tr>
  
</table>
	
</template>

<script>
  export default {
  name: 'MenuStock',
   props: {
    msg: String
  }

  }
</script>
