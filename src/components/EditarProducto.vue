<template>
      <form @submit.prevent="handleUpdateForm">
        <table class="table1">
        <tr>
    <td  colspan="4 ">
 <h1>{{ msg }}</h1>

</td>
</tr>


        <tr class="tr1">
            <td><label>Nombre del producto</label>
        </td>
                
        <td class="td1">
            <input 
            type="text" 
            class=" input- input-group-text" 
            v-model="producto.nombre_del_producto"
            required/>
        </td>

        <td class="td1">
            <label for="">Talla:</label>
        </td>

        <td class="td1">
            <select 
            type="text"
            v-model="producto.talla"
            class="input- input-group-text"
            required
            >
                <option value="">seleccione</option>
                <option value="34">34</option>
                <option value="35">35</option>
                <option value="36">36</option>
                <option value="37">37</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
            </select>
        </td>
</tr>
<tr>
        <td class="td1">
        <label for="">Tipo:</label>
        </td>

        <td class="td1">
            <select
            type="text"
            v-model="producto.tipo"
            class="input- input-group-text"
            required>
                <option value="">seleccione</option>
                <option value="Deportivo">Deportivo</option>
                <option value="Tacon">Tacon</option>
                <option value="Botas">Botas</option>
                <option value="Caballero">Caballero</option>
                <option value="Dama">Dama</option>
            </select>
        </td>

        <td class="td1">
          <label for="">Costo:</label>
        </td>

        <td class="td1">
            <input 
            type="text" 
            v-model="producto.costo"
            class="input- input-group-text"
            required/>
        </td>

</tr>
<tr class="tr1">
        <td class="td1">
            <label for="">Precio al publico:</label> 
        </td>

    <td class="td1">
        <input 
        type="text" 
        v-model="producto.precio"
        class="input- input-group-text"
        required/>

    </td>
    <td class="td1">
      <label for="">Color:</label>  
    </td>
    <td class="td1 ">
        <select  
        type="text" 
        v-model="producto.color"
        class="input- input-group-text"
        required>
            <option value="">seleccione</option>
            <option value="Negro">Negro</option>
            <option value="Cafe">Cafe</option>
            <option value="Azul">Azul</option>
            <option value="Mostaza">Mostaza</option>
            <option value="Azul">Azul</option>
            <option value="Rojo">Rojo</option>
        </select>

    </td>
</tr>
<tr class="tr1">
    <td class="td1">
       <label for="">Genero:</label> 
    </td>
    <td class="td1">
        <select 
        type="text"
        v-model="producto.genero"
        class="input- input-group-text"
        required>
            <option value="">seleccione</option>
            <option value="Dama">Dama</option>
            <option value="Caballero">Caballero</option>
            <option value="Unisex">Unisex</option>
            <option value="Dama">Dama</option>
        </select>
    </td>

    <td class="td1">
      <label for="">Marca:</label>  
    </td> 

    <td class="td1">
        <input 
        type="text" 
        v-model="producto.marca"
        class="input- input-group-text"
        required/>
    </td>
</tr>
<tr class="tr1">
        <td>
        <label for="">Distribuidor:</label>   
        </td>

        <td>
            <input 
            type="text" 
            v-model="producto.distribuidor"
            class="input- input-group-text"
            required/>
        </td>
</tr>
<tr class="tr1">

           <td colspan="2" class="btn-Iniciar" 
           border="1px"
           border-color="black"
           >
                <button class="btn-outline-primary">ACEPTAR</button>
            </td>

<td class="td1" colspan="2">
    <button class="btn-outline-secondary">CANCELAR</button>

  </td>
</tr>  

  </table>
</form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      producto: {},
    };
  },
  created() {
    let apiURL = `http://localhost:4000/api/edit-producto/${this.$route.params.id}`;

    axios.get(apiURL).then((res) => {
      this.producto = res.data;
    });
  },
  
   name: 'EditarProducto',
  props: {
    msg: String
  },
  methods: {
    handleUpdateForm() {
      let apiURL = `http://localhost:4000/api/update-producto/${this.$route.params.id}`;

      axios
        .put(apiURL, this.producto)
        .then((res) => {
          console.log(res);
          this.$router.push("/listadoproductos");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
.btn-outline-primary{
  padding:0px 10px 0px 10px ;
  border-radius: 75px;
}
.btn-outline-secondary{
  padding:0px 12px 0px 12px ;
  border-radius: 75px;
}


h1{
  background-color: #2A5D67;
  color: white;
  text-align: center;
  padding:5px 12px 10px 12px ;
}
table {
 
  width: 45%;
  margin-left: auto;
  margin-right:auto;
  border-collapse: collapse;
  border: 3px solid #2A5D67;
 
}
td{
  padding: 8px 10px 10px 8px ;   
}
.btn-Iniciar{
  text-align: right;
}
.label-login{
  text-align: left;
  
}

.label-login{
  text-align: right;
}
.input-login{
  text-align: left;
}
  @media (max-width:750px) {
  h1{
      background-color: #4ae3b5;
      color: white;
      text-align: center;
  }
  table {
      table-layout: fixed;
      width: 95%;
      margin-left: auto;
      margin-right:auto;
      border-collapse: collapse;
      border: 3px solid #2A5D67;
     
  }
.label-login{
  text-align: right;
}
.input-login{
  text-align: left;
}

}
@media screen and (max-width: 750px) {
  table {
    display: block;
    overflow-x: auto;
  }
}
@media screen and (max-width: 600px) {
  .table1 {
      width:80%;
  }
 
  .tr1:nth-of-type(2n) {
      background-color: inherit;
  }
  .tr1 td:first-child {
      background: #f0f0f0;
      font-weight:bold;
      font-size:1.3em;
  }
  tbody td {
      display: block;
      text-align:left;
  }
  tbody td:before {
      content: attr(data-th);
      display: block;
      text-align:left;
  }
  .btn-outline-primary{
    padding:0px 10px 0px 10px ;
    border-radius: 75px;
    text-align: left;
  }
  .btn-Iniciar{
    text-align: left;
  }

   table {
      table-layout: fixed;
      width: 95%;
      margin-left: auto;
      margin-right:auto;
      border-collapse: collapse;
      border: 3px solid #2A5D67;
     
  }
.label-login{
  text-align: right;
}
.input-login{
  text-align: left;
}

}</style>
