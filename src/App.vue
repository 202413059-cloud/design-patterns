<script setup lang="ts">
import { ref } from 'vue'

// 각 패턴 컴포넌트 import
import Builder from './patterns/Builder/Builder.vue'
import Facade from './patterns/Facade/Facade.vue'
import CoR from './patterns/Chain_of_Responsibility/CoR.vue'

const current = ref('')
</script>

<template>
  <div class="app-container">
    <h1>디자인 패턴 실습 🎨</h1>

    <div class="button-group">
      <button @click="current = 'builder'">Builder (생성패턴)</button>
      <button @click="current = 'facade'">Facade (구조패턴)</button>
      <button @click="current = 'chain'">Chain of Responsibility (행위패턴)</button>
    </div>

    <div class="content-area">
      <Builder v-if="current === 'builder'" />
      <Facade v-if="current === 'facade'" />
      <CoR v-if="current === 'chain'" />
      <p v-if="!current">👆 위의 버튼 중 하나를 선택하세요!</p>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  text-align: center;
  margin-top: 40px;
  font-family: "Noto Sans KR", sans-serif;
}

.button-group {
  margin-bottom: 20px;
}

button {
  margin: 5px;
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: #4a90e2;
  color: white;
  font-weight: bold;
}

button:hover {
  background-color: #357ab8;
}

.content-area {
  margin-top: 30px;
}
</style>
