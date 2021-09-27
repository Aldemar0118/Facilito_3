<template>

  <div class="home">
     <div>
        <MenuStock msg=""/>
    </div>
   <br>
    <div>
        <StockProductos msg="Stock de  Productos"/>
       </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MenuStock from '@/components/MenuStock.vue'
import StockProductos from '@/components/StockProductos.vue'

export default {
  name: 'stockproductos',
  components: {
  MenuStock,
  StockProductos
  }
}
</script>
