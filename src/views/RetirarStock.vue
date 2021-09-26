<template>
  <div class="home">
    <div>
        <RetirarS msg="RETIRAR STOCK DE PRODUCTO"/>
    </div>
    <div>
        <RetirarS1 msg="Producto"/>
    </div>
    <div>
        <RetirarS2 msg="Retirar Stock"/>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import RetirarS from '@/components/RetirarS.vue'
import RetirarS1 from '@/components/RetirarS1.vue'
import RetirarS2 from '@/components/RetirarS2.vue'

export default {
  name: 'retirarstock',
  components: {
RetirarS,
RetirarS1,
RetirarS2
  }
}
</script>
