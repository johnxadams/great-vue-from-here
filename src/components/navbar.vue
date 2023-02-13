<script setup>
import { useRouter } from "vue-router";
</script>

<template>
  <nav v-bind:class="$style.navbarContainer">
    <ul>
          <router-link to="/">Home</router-link>
      
      <li>Projects</li>
          <router-link to="/about">About</router-link>

    </ul>
  </nav>
</template>

<style module lang="scss">
@mixin flex-jc-ai-dir($jc, $ai, $dir) {
  display: flex;
  justify-content: $jc;
  align-items: $ai;
  flex-direction: $dir;
}

.navbarContainer {
  background-color: tomato;
  /* height: 5rem; */
  border-bottom: 3px solid black;
  ul {
    @include flex-jc-ai-dir(space-between, flex-end, row);
    li {
      font-size: 1.5rem;
      list-style: none;
      margin-bottom: -1rem;
    }
    :nth-child(3) {
      /* color: green; */
      margin-right: 1.7em;
    }
  }
}
</style>
