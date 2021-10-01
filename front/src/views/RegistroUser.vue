<template>
  <div class="home">
    <div>
        <MenuRegistroUser msg=""/>
</div>
<br>
    <div>
        <CrearUsuario msg="Rregistro de Usuario"/>
</div>
  </div>
</template>

<script>
// @ is an alias to /src
import MenuRegistroUser from '@/components/MenuRegistroUser.vue'
import CrearUsuario from '@/components/CrearUsuario.vue'

export default {
  name: 'RegistroUser',
  components: {
    MenuRegistroUser,
    CrearUsuario
  }
}
</script>
