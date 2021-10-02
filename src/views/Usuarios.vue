<template>

  <div class="home">
     <div>
        <MenuListadoUsuarios msg=""/>
    </div>
   <br>
    <div>
        <Usuarios msg="Listado Usuarios"/>
       </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MenuListadoUsuarios from '@/components/MenuListadoUsuarios.vue'
import Usuarios from '@/components/Usuarios.vue'

export default {
  name: 'usuarios',
  components: {
  MenuListadoUsuarios,
  Usuarios
  }
}
</script>
