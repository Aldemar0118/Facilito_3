<template>

  <div class="home">
     <div>
        <MenuEditar msg=""/>
    </div>
   <br>
    <div>
        <EditarProducto msg="Editar Producto"/>
       </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MenuEditar from '@/components/MenuEditar.vue'
import EditarProducto from '@/components/EditarProducto.vue'

export default {
  name: 'editarproducto',
  components: {
  MenuEditar,
  EditarProducto
  }
}
</script>
