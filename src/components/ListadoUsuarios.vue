<template>
  <div class="row">
    <div class="col-md-12">
      <h1>{{ msg }}</h1>
      <table class="table table-responsive-lg">
        <thead class="thead  table-hover">
          <tr>
                <th>Rol</th>
                <th>Nombre</th>
                <th>Tipo de Documento</th>
                <th>Documento</th>
                <th>Direccion</th>
                <th>Telefono</th>
                <th>Email</th>
                <th>Editar</th>
                <th>Borrar</th>
          </tr>
        </thead>
        <tbody >
           <tr v-for="usuario in Usuarios" :key="usuario._id">
            <td>{{ usuario.rol }}</td>
            <td>{{ usuario.nombre }}</td>
            <td>{{ usuario.tipo_documento }}</td>
            <td>{{ usuario.num_documento }}</td>
            <td>{{ usuario.direccion }}</td>
            <td>{{ usuario.telefono }}</td>
            <td>{{ usuario.email }}</td>
            <td>
              <router-link
                :to="{ name: 'edit', params: { id: usuario._id } }"
                class="btn-outline-primary"
                >
                >Editar
              </router-link>
              </td>
              <td>
              <button
                @click.prevent="deleteUsuario(usuario._id)"
                class="btn btn-danger"
              >
                >Borrar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      Usuarios: [],
    };
  },
  created() {
    let apiURL = "http://localhost:4000/api/user";
    axios
      .get(apiURL)
      .then((res) => {
        this.Usuarios = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
   name: 'ListadoUsuarios',
  props: {
    msg: String
  },
  methods: {
    deleteUsuario(id) {
      let apiURL = `http://localhost:4000/api/user/delete-usuario/${id}`;
      let indexOfArrayItem = this.Usuarios.findIndex((i) => i._id === id);

      if (window.confirm("Desea borrar Este Usuario?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.Usuarios.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style>
.btn-success {
  margin-right: 10px;
}

th{
  color:white;
background-color: #2A5D67 ;

}
div{
  padding:px 12px 10px 12px ;
}
h1{
    background-color: #2A5D67;
    color: white;
    text-align: center;
    padding:5px 12px 10px 12px ;
  }


.btn-outline-primary{
    padding:0px 12px 3px 12px ;
    border-radius: 75px;
    border: 1px solid #2A5D67;
  }
  .btn-danger{
    padding:0px 12px 0px 12px ;
    border-radius: 75px;
    border: 1px solid #2A5D67;
  }
</style>
