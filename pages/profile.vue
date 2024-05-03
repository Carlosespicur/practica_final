<template>
    <div class="profile">
      <Navbar />
      <div class="profile-container">
        <h2>Perfil del Usuario</h2>
        <el-form label-position="top">
          <el-form-item label="Nombre">
            <el-input v-model="userProfile.firstName" placeholder="Introduce tu nombre" :disabled="isDisabled"></el-input>
          </el-form-item>
          <el-form-item label="Apellido">
            <el-input v-model="userProfile.lastName" placeholder="Introduce tu apellido" :disabled="isDisabled"></el-input>
          </el-form-item>
          <el-form-item label="Nombre de Usuario">
            <el-input v-model="userProfile.username" placeholder="Introduce tu nombre de usuario" :disabled="isDisabled"></el-input>
          </el-form-item>
          <el-form-item label="Correo">
            <el-input v-model="userProfile.email" placeholder="Introduce tu correo electrónico" :disabled="isDisabled"></el-input>
          </el-form-item>
          <el-form-item label="Contraseña">
            <el-input v-model="userProfile.password" placeholder="Introduce tu contraseña" type="password" :disabled="isDisabled"></el-input>
          </el-form-item>
          <el-form-item>
            <div class = "profile-button-container">
                <el-button type="primary" @click="isDisabled=!isDisabled" class="profile-button">Actualizar Perfil</el-button>
            </div>
          </el-form-item>
        </el-form>
        
        <div class="statistics">
          <h3>Estadísticas de Partidas</h3>
          <p>Partidas Ganadas: {{ userProfile.gamesWon }}</p>
          <p>Partidas Perdidas: {{ userProfile.gamesLost }}</p>
          <p>Racha de Últimas Cinco Partidas: {{ userProfile.lastFiveGamesStreak }}</p>
        </div>
      </div>
    </div>
  </template>  
  
<script setup lang="ts">
  import { ref } from 'vue';
  import Navbar from "@/components/Navbar.vue";
  
  const userProfile = ref({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    gamesWon: 0,
    gamesLost: 0,
    lastFiveGamesStreak: 'WLWWW' // 'W' para victoria y 'L' para derrota
  });
  
  const updateProfile = () => {
    // Lógica para actualizar el perfil, posiblemente enviando la información a un servidor
    console.log('Perfil actualizado', userProfile.value);
  };

  let isDisabled = ref(true);
</script>
  
  
<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.profile {
  background-color: $background-color;
  height: 100vh;

  .profile-container {
    max-width: 600px;
    margin: 0 auto;
    color: $text-color;
    padding: 20px;
    background-color: $background-color; /* Puedes agregar un color de fondo para las tarjetas aquí */
    border-radius: 10px;
    box-shadow: black; /* Puedes definir una sombra en tus variables.scss */
    .profile-button-container{
        display: flex;
        justify-content: center; 
        width: 600px;
        .profile-button{
            margin-top: 5%;
            background-color: $secondary-text-color;
            color: $text-color;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-color: $background-color;
        }
    }
    h2, h3 {
      text-align: center;
    }
  }

  .statistics {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid black; /* Puedes definir un color de borde en tus variables.scss */
    color: $text-color;
    p {
      margin: 10px 0;
    }
  }
}
</style>
