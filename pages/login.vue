<template>
    <Navbar />
    <div class="fondo">
        
        <div class="login-container">
            <h1>Iniciar Sesión</h1>
            <form @submit.prevent="handleLogin">
            <el-input v-model="loginForm.username" placeholder="Usuario" class="form-text"></el-input>
            <el-input type="password" v-model="loginForm.password" placeholder="Contraseña" class="form-text"></el-input>
            <el-button type="primary" native-type="submit" class = "login-button">Aceptar</el-button>
            <div class="error-message">
                <p>Error al iniciar sesión. Inténtalo de nuevo</p>
            </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { User, Lock } from '@element-plus/icons-vue';
  import Navbar from "@/components/Navbar.vue"
  const loginForm = ref({
    username: '',
    password: ''
  });
  
  const handleLogin = () => {
    console.log('Datos del formulario', loginForm.value);
    // Implementar lógica de login aquí
  };
  </script>
  
<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.fondo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: $background-color;
}

.login-container {
    width: 100%;
    max-width: 400px;
    background: $secondary-text-color;
    color: $text-color;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
}
.login-button{
    margin-top: 5%;
    background-color: $background-color;
    color: $text-color;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-color: $background-color;
}
.form-text ::v-deep .el-input {
    padding: 0; 
    margin: 0; 
}
</style>


  
  
  



