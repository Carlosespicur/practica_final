<template>
  <div class="navbar">
    <div class="menu-items">
      <NuxtLink to="/" class="nav-link">Inicio</NuxtLink>
    </div>
    <div class="auth-buttons">
      <NuxtLink to="/login" class="nav-link">Login</NuxtLink>
      <NuxtLink to="/register" class="nav-link">Signup</NuxtLink>
      <NuxtLink to="/profile" class="nav-link">Perfil</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
// Script sección vacía, a menos que necesites agregar lógica aquí.
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px; // Ajusta esto según tus necesidades de diseño
  background-color: $header-color; // Cambia al color marrón de tu elección
  height: 60px; // Ajusta la altura según necesites

  .nav-link {
    color: $accent-color; // Cambia el color de texto según necesites
    text-decoration: none;
    margin: 0 10px; // Ajusta el margen entre enlaces

  }
}
</style>