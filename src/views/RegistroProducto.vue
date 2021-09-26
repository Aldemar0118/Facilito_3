<template>

  <div class="home">
     <div>
        <Menu msg=""/>
    </div>
     <v-spacer></v-spacer>
    <div>
        <CrearProducto msg="Registro de Producto"/>
       </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'
import CrearProducto from '@/components/CrearProducto.vue'

export default {
  name: 'registroproducto',
  components: {
  Menu,
  CrearProducto
  }
}
</script>
