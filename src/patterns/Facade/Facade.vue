//랜덤 성경 말씀 뽑기
<template>
  <div class="container">
    <h2>Facade Pattern: 랜덤 성경 말씀 뽑기 ✨</h2>
    <button @click="getVerse">말씀 뽑기</button>

    <div v-if="verse" class="verse-box">
      <p>{{ verse }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BibleVerseFacade } from './BibleVerseFacade'

const verse = ref('')
const bibleFacade = new BibleVerseFacade()

function getVerse() {
  verse.value = bibleFacade.getRandomVerse()
}
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 40px;
  font-family: "Noto Sans KR", sans-serif;
}

button {
  background-color: #4a90e2;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 15px;
  margin-bottom: 20px;
}

button:hover {
  background-color: #357ab8;
}

.verse-box {
  background-color: #f6f6f6;
  border-radius: 8px;
  padding: 20px;
  width: 80%;
  margin: 0 auto;
  font-size: 18px;
  line-height: 1.6;
}
</style>
