<script setup>
import navbar from "./components/navbar.vue";
</script>

<template>
  <navbar />
  <h1>really nice vue</h1>

  <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->

  <RouterView />
</template>

<style lang="scss">
@mixin flex-jc-ai-dir($jc, $ai, $dir) {
  display: flex;
  justify-content: $jc;
  align-items: $ai;
  flex-direction: $dir;
}
html {
  box-sizing: border-box;
  font-size: 16px;
}
body {
  margin: 0;
  padding: 0;
  background-color: #947169;
}
</style>
