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

<style>

</style>
