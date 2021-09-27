<template>
  <div class="home">
     <div>
        <MenuStock msg=""/>
    </div>
    <div>
        <AgregarStock msg="AGREGAR STOCK DE PRODUCTO"/>
    </div>
    
    
  </div>
</template>

<script>
// @ is an alias to /src
import MenuStock from '@/components/MenuStock.vue'
import AgregarStock from '@/components/AgregarStock.vue'


export default {
  name: 'agregarstock',
  components: {
MenuStock,
AgregarStock,

  }
}
</script>
