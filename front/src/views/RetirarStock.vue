<template>
  <div class="home">
    <div>
        <MenuStockR msg=""/>
    </div>
    <br>
    <div>
        <RetirarStock msg="RETIRAR STOCK DE  PRODUCTO"/>
    </div>
 
    
  </div>
</template>

<script>
// @ is an alias to /src
import MenuStockR from '@/components/MenuStockR.vue'
import RetirarStock from '@/components/RetirarStock.vue'


export default {
  name: 'retirarstock',
  components: {
MenuStockR,
RetirarStock,

  }
}
</script>
