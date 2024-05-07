<template>
  <div>
    <button @click="callHello">Call Hello</button>
  </div>
  <h3>hello result</h3>
  <pre>{{ helloResult }}</pre>
</template>

<script setup>

const helloResult = ref('')

async function callHello() {
  helloResult.value = await useFetch('api/hello')
}
</script>