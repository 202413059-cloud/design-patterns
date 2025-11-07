//c->c++변환 코드 vue 파일
<template>
  <div class="container">
    <h2>Builder Pattern: C → C++ Converter</h2>
    <button @click="convertCode">Convert Code</button>

    <div v-if="result" class="result-box">
      <h3>Converted C++ Code</h3>
      <pre>{{ result }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CToCppBuilder, CodeDirector } from './CToCppBuilder'

const result = ref('')

function convertCode() {
  const builder = new CToCppBuilder()
  const director = new CodeDirector(builder)
  result.value = director.constructSimpleProgram()
}
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 40px;
}
button {
  padding: 8px 20px;
  margin: 10px;
  cursor: pointer;
}
.result-box {
  margin-top: 20px;
  background-color: #f8f8f8;
  padding: 15px;
  border-radius: 8px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
}
pre {
  background: #eee;
  padding: 10px;
  border-radius: 4px;
  overflow-x: auto;
}
</style>
