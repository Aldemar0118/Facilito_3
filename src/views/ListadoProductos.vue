<template>

  <div class="home">
     <div>
        <MenuListadoProducto msg=""/>
    </div>
   <br>
    <div>
        <ListadoProductos msg="Listado Productos"/>
       </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MenuListadoProducto from '@/components/MenuListadoProducto.vue'
import ListadoProductos from '@/components/ListadoProductos.vue'

export default {
  name: 'listadoproductos',
  components: {
  MenuListadoProducto,
  ListadoProductos
  }
}
</script>
