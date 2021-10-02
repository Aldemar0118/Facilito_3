<template>

  <div class="home">
     <div>
        <MenuListadoUsuarios msg=""/>
    </div>
   <br>
    <div>
        <ListadoUsuarios msg="Listado Usuarios"/>
       </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MenuListadoUsuarios from '@/components/MenuListadoUsuarios.vue'
import ListadoUsuarios from '@/components/ListadoUsuarios.vue'

export default {
  name: 'usuarios',
  components: {
  MenuListadoUsuarios,
  ListadoUsuarios
  }
}
</script>
