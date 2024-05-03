<template>
    <div class="question-view">
      <div class="question-container">
        <el-card class="question-card">
          <h2>{{ currentQuestion.text }}</h2>
          <el-radio-group v-model="selectedAnswer" class="answer-group">
            <el-radio :label="option" v-for="(option, index) in currentQuestion.options" :key="index">{{ option }}</el-radio>
          </el-radio-group>
          <el-button type="primary" @click="submitAnswer">Enviar Respuesta</el-button>
        </el-card>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Navbar from "@/components/Navbar.vue";
  
  const currentQuestion = ref({
    text: '¿Cuál es la capital de Francia?',
    options: ['Madrid', 'Berlín', 'París', 'Londres'],
    correctAnswer: 'París'
  });
  
  const selectedAnswer = ref('');
  
  const submitAnswer = () => {
    if (selectedAnswer.value === currentQuestion.value.correctAnswer) {
      alert('¡Respuesta correcta!');
    } else {
      alert('Respuesta incorrecta. Inténtalo de nuevo.');
    }
  };
  </script>
  
  <style scoped>
  .question-view {
    padding: 20px;
  }
  
  .question-container {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .question-card {
    margin-top: 20px;
    text-align: center;
  }
  
  .answer-group {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
  }
  </style>
  