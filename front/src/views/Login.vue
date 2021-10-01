<template>
  <div class="home">
    <div>
        <MenuLogin msg=""/>
    </div>
    <br>
    <div>
        <Flogin msg="Ingreso de Usuario"/>
    </div>
    

  </div>
</template>

<script>
// @ is an alias to /src
import Flogin from '@/components/Flogin.vue'
import MenuLogin from '@/components/MenuLogin.vue'
export default {
  name: 'Login',
  components: {
  MenuLogin,
  Flogin
  }
}
</script>
