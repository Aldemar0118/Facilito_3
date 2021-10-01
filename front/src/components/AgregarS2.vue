<template>
    
<table>
    <tr>
        <td class="td1" colspan="6">
    <h4>{{ msg }}</h4>
    </td>
    <tr >
        <tr>
            <td>
            <label for="txtReferencia">Cantidad:</label>
        </td>
        <td>
            <input id="txtReferencia" type="text">
        </td>
        <td>
            <label for="txtTipo">Descripcion:</label>
        </td>
        <td>
            <input id="txtTipo" type="text">
        </td>
    
    
            
        
            <td  class="btn-Iniciar">
                <button type="button" class="btn-outline-primary">Agregar</button>
            </td>
            <td>
                <button type="button" class="btn-outline-secondary" >Limpiar</button>
            </td>
            </tr>
</table>         
</template>

<script>
export default {
  name: 'AgregarS2',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  h4{
    background-color: #2A5D67;
    color: white;
    text-align: center;
    padding:5px 12px 10px 12px ;
  }
  table {
 
    width: 60%;
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
    h4{
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
