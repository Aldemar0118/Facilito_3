<template>
  <div class="home">
     <div>
        <MenuStock msg=""/>
    </div>
    <div>
        <AgregarS msg="AGREGAR STOCK DE PRODUCTO"/>
    </div>
    <div>
        <AgregarS1 msg="Producto"/>
    </div>
    <div>
        <AgregarS2 msg="Agregar Stock"/>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import MenuStock from '@/components/MenuStock.vue'
import AgregarS from '@/components/AgregarS.vue'
import AgregarS1 from '@/components/AgregarS1.vue'
import AgregarS2 from '@/components/AgregarS2.vue'

export default {
  name: 'AgregarStock',
  components: {
MenuStock,
AgregarS,
AgregarS1,
AgregarS2
  }
}
</script>
