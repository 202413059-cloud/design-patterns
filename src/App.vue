<template>
  <div class="app-container">
    <h1 style="color:red">🔥 DESIGN-PATTERNS 테스트 화면</h1>

    <div class="button-group">
      <button>Builder (생성패턴)</button>
      <button>Facade (구조패턴)</button>
      <button>Chain of Responsibility (행위패턴)</button>
    </div>

    <p>👆 버튼만 보이면 연결은 나중에 추가해도 완벽합니다!</p>
  </div>
</template>

<script setup lang="ts">
// 지금은 아무 import도 안 함 — 버튼만 테스트
</script>

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
</style>
