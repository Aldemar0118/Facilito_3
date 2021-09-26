<template>
  <div class="row">
    <div class="col-md-12">
      <h1>{{ msg }}</h1>
      <table class="table table-responsive-lg">
        <thead class="thead  table-hover">
          <tr>
                <th>Nombre del Producto</th>
                <th>Talla</th>
                <th>Tipo</th>
                <th>Costo</th>
                <th>Precio</th>
                <th>Color</th>
                <th>Genero</th>
                <th>Marca</th>
                <th>Distribuidor</th>
          </tr>
        </thead>
        <tbody >
           <tr v-for="producto in Productos" :key="producto._id">
            <td>{{ producto.nombre_del_producto }}</td>
            <td>{{ producto.talla }}</td>
            <td>{{ producto.tipo }}</td>
            <td>{{ producto.costo }}</td>
            <td>{{ producto.precio }}</td>
            <td>{{ producto.color }}</td>
            <td>{{ producto.genero }}</td>
            <td>{{ producto.marca }}</td>
            <td>{{ producto.distribuidor }}</td>
            <td>
              <router-link
                :to="{ name: 'edit', params: { id: producto._id } }"
                class="btn-outline-primary"
                >Editar
              </router-link>
              <button
                @click.prevent="deleteProducto(producto._id)"
                class="btn btn-danger"
              >
                Borrar
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
      Productos: [],
    };
  },
  created() {
    let apiURL = "http://localhost:4000/api";
    axios
      .get(apiURL)
      .then((res) => {
        this.Productos = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
   name: 'ListadoProductos',
  props: {
    msg: String
  },
  methods: {
    deleteProducto(id) {
      let apiURL = `http://localhost:4000/api/delete-producto/${id}`;
      let indexOfArrayItem = this.Productos.findIndex((i) => i._id === id);

      if (window.confirm("desea borrar el producto?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.Productos.splice(indexOfArrayItem, 1);
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
    padding:0px 12px 0px 12px ;
    border-radius: 75px;
  }
  .btn-danger{
    padding:0px 12px 0px 12px ;
    border-radius: 75px;
  }
</style>
