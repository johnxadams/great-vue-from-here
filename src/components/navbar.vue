<script setup>
// import { useRouter } from "vue-router";
</script>

<template>
  <nav v-bind:class="$style.navbarContainer">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>

      <li><a href="#"> Projects</a></li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </nav>
</template>

<style module lang="scss">
@import "../scss/layout/navbar.scss";
</style>
