<template>
  <div class="home">
        <Flogin msg="Ingreso de Usuario"/>
       
  </div>
</template>

<script>
// @ is an alias to /src
import Flogin from '@/components/Flogin.vue'

export default {
  name: 'login',
  components: {
    Flogin
  }
}
</script>
