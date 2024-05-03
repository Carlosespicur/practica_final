<template>
    <div class="index">
      <Navbar />
      <Question />
      <el-button>Botón</el-button>
    </div>
</template>
  
<script setup lang="ts">
  import Navbar from "@/components/Navbar.vue";
  import Question from "@/components/Question.vue"
</script>
  
<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

/* Reset CSS para elementos comunes */
html, body, div, p {
  margin: 0;
  padding: 0;
}

/* Establece los estilos para html y body */
html, body {
  height: 100%; /* Asegura que el html y body ocupen toda la altura */
  width: 100%; /* Asegura que el html y body ocupen toda la anchura */
  background-color: $background-color; /* Aplica el color de fondo a todo */
}

/* Establece los estilos para el contenedor index */
.index {
  min-height: 100vh; /* Altura mínima del contenedor al 100% de la altura de la ventana */
  display: flex; /* Habilita flexbox para este contenedor */
  flex-direction: column; /* Elementos apilados verticalmente */
  align-items: stretch; /* Estira los elementos secundarios para que llenen el ancho del contenedor */
  background-color: $background-color; /* Color de fondo de tu variable */
}

</style>


  