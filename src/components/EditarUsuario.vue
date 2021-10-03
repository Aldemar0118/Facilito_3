<template>
       <form @submit.prevent="handleSubmitForm">
    <table class="table1">
        <tr>
    <td  colspan="4 ">
 <h1>{{ msg }}</h1>

</td>
</tr>


        <tr class="tr1">
        <td>
          <label>rol</label>
        </td>
                
        <td class="td1">
            <select
                  type="text" 
                  class=" input- input-group-text" 
                  v-model="usuario.rol"
                  required>
                    <option value="">Seleccione</option>
                    <option value="Almacenista">Almacenista</option>
                    <option value="Administrador">Administrador</option>
            </select>
        </td>

        <td class="td1">
            <label for="">nombre:</label>
        </td>

        <td class="td1">
            <input 
        type="text" 
      v-model="usuario.nombre"
        class="input- input-group-text"
        required/>
        </td>
      </tr>
      <tr>
        <td class="td1">
        <label for="">Tipo de Documento:</label>
        </td>

        <td class="td1">
            <select
            type="text"
            v-model="usuario.tipo_documento"
            class="input- input-group-text"
            required>
                <option value="">seleccione</option>
                <option value="Cedula">CC</option>
                <option value="Nit">NT</option>
                <option value="Tarjeta de identidad">TI</option>
            </select>
        </td>

        <td class="td1">
          <label for="">Documento:</label>
        </td>

        <td class="td1">
             <input 
        type="text" 
      v-model="usuario.num_documento"
        class="input- input-group-text"
        required/>
        </td>
</tr>
<tr class="tr1">
        <td class="td1">
            <label for="">Direccion:</label> 
        </td>

    <td class="td1">
        <input
        type="text"
        v-model="usuario.direccion"
        class="input- input-group-text"
        required/>

    </td>
    <td class="td1">
      <label for="">Telefono:</label>  
    </td>
    <td class="td1 ">
         <input 
        type="text" 
      v-model="usuario.telefono"
        class="input- input-group-text"
        required/>

    </td>
</tr> 
<tr class="tr1">
  <td><label for="">password</label></td>
    <td class="td1">
        <input
        type="password"
         v-model="usuario.password"
        class="input- input-group-text"
        required/>
            
    </td>

    <td class="td1">
      <label for="">Email</label>
    </td> 

    <td class="td1">
         <input
        type="email"
         v-model="usuario.email"
        class="input- input-group-text"
        required/>
    </td>
</tr>
<tr class="tr1">

           <td colspan="2" class="btn-Iniciar" 
           border="1px"
           border-color="black"
           >
                <button class="btn-outline-primary">REGISTRAR</button>
            </td>

<td class="td1" colspan="2">
    <button class="btn-outline-secondary" type="reset">CANCELAR</button>

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
      usuario: {},
    };
  },
  created() {
    let apiURL = `http://localhost:4000/api/user/edit-usuario/${this.$route.params.id}`;

    axios.get(apiURL).then((res) => {
      this.usuario = res.data;
    });
  },
  
   name: 'EditarUsuario',
  props: {
    msg: String
  },
  methods: {
    handleUpdateForm() {
      let apiURL = `http://localhost:4000/api/user/update-usuario/${this.$route.params.id}`;

      axios
        .put(apiURL, this.usuario)
        .then((res) => {
          console.log(res);
          this.$router.push("/listadousuarios");
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
  border: 1px solid #2A5D67;
}
.btn-outline-secondary{
  padding:0px 12px 0px 12px ;
  border-radius: 75px;
  border: 1px solid #2A5D67;
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
    border: 1px solid #2A5D67;
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
