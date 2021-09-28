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
import MenuLogin from '@/components/MenuLogin.vue'
import Flogin from '@/components/Flogin.vue'

export default {
  name: 'login',
  components: {
    MenuLogin,
    Flogin
  }
}
</script>
