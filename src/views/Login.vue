<template>
  <div class="home">
    <div>
        <MenuLogin msg=""/>
</div>
<br>
    <div>
        <CrearUsuario msg="Ingreso de Usuario"/>
</div>
  </div>
</template>

<script>
// @ is an alias to /src
import MenuLogin from '@/components/MenuLogin.vue'
import CrearUsuario from '@/components/CrearUsuario.vue'

export default {
  name: 'login',
  components: {
    MenuLogin,
    CrearUsuario
  }
}
</script>
