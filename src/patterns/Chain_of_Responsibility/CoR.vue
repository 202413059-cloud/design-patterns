//저녁 메뉴 추천기 vue 파일
<template>
  <div class="container">
    <h2>Chain of Responsibility: 저녁 메뉴 추천기 🍽️</h2>

    <select v-model="condition">
      <option disabled value="">조건을 선택하세요</option>
      <option>한식</option>
      <option>매운</option>
      <option>다이어트</option>
      <option>배달</option>
      <option>기타</option>
    </select>

    <button @click="getMenu">추천받기</button>

    <div v-if="menu" class="menu-box">
      <p>{{ menu }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  KoreanHandler,
  SpicyHandler,
  DietHandler,
  DeliveryHandler,
  DefaultHandler
} from './DinnerHandler'

const condition = ref('')
const menu = ref('')

function getMenu() {
  const korean = new KoreanHandler()
  const spicy = new SpicyHandler()
  const diet = new DietHandler()
  const delivery = new DeliveryHandler()
  const def = new DefaultHandler()

  // 체인 연결
  korean.setNext(spicy).setNext(diet).setNext(delivery).setNext(def)

  // 요청 전달
  menu.value = korean.recommend(condition.value)
}
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 40px;
  font-family: "Noto Sans KR", sans-serif;
}

select {
  padding: 8px;
  border-radius: 6px;
  margin: 10px;
  font-size: 15px;
}

button {
  background-color: #ff8c42;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 15px;
}

button:hover {
  background-color: #e77c36;
}

.menu-box {
  background-color: #fafafa;
  border-radius: 8px;
  padding: 20px;
  width: 80%;
  margin: 20px auto;
  font-size: 18px;
  line-height: 1.6;
  border: 1px solid #eee;
}
</style>
