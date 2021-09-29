<template>
  <div class="home">
    <div>
        <MenuCrearUsiario msg=""/>
    </div>
       <div>
        <CrearUser msg="Registro de Usuario"/>
       </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MenuCrearUsiario from '@/components/MenuCrearUsuario.vue'
import CrearUser from '@/components/CrearUser.vue'

export default {
  name: 'registro',
  components: {
  MenuCrearUsiario,
  CrearUser
  }
}
</script>
