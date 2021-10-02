<template>

  <div class="home">
     <div>
        <MenuEditarUsuario msg=""/>
    </div>
   <br>
    <div>
        <EditarUsuario msg="Editar Usuario"/>
       </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MenuEditarUsuario from '@/components/MenuEditarUsuario.vue'
import EditarUsuario from '@/components/EditarUsuario.vue'

export default {
  name: 'editarusuario',
  components: {
  MenuEditarUsuario,
  EditarUsuario
  }
}
</script>
