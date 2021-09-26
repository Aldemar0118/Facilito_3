<template>

    <table>
    <thead>
<tr>
<td colspan="2">
 <h1>{{ msg }}</h1>
</td>
</tr>
</thead>
<tbody>
<tr class="tr-label-login">
    <td class="label-login">
        <label><h5>Usuario: *</h5></label>
    </td>
  
    <td class="input-login">
        <input class="input-group" type="int" name="Usuario" id="Usuario" placeholder="Numero de Documento"
        pattern="[0-9]{5,15}" title="Escriba su numero de cedula" onkeypress="return solonumeros(event)" onpaste="return false" required /> 
    </td>
</tr>
<tr class="tr-label-login">
    <td class="label-login">
        <label><h5>Clave: *</h5></label>
    </td>

    <td  class="input-login">
        <input class="input-group" type="password" size="20" name="Clave" id="Clave"
        placeholder="Escriba su password" pattern="[0-9-a-z-za]{6,12}"
        title="Dijite su Clave de Usuario" required />
    </td>
</tr>
<tr>
    <td class="btn-Iniciar">
        <input class="btn-outline-primary" type="submit" zise="20"
        value="Ingresar" id="Ingresar" />
    </td>

    <td>
        <input class="btn-outline-secondary" type="reset" value="Borrar  " id="Borrar"/>   
    </td>
</tr>
</tbody>
</table>
</template>

<script>
export default {
  name: 'Flogin',
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
table {
    table-layout: fixed;
    width: 40%;
    margin-left: auto;
    margin-right:auto;
    border-collapse: collapse;
    border: 3px solid #2A5D67;
   
}
td{
    padding: 20px 10px 15px 10px ;   
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
</style>
