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
@import "../scss/abstract/abstract-files.scss";
@mixin flex-jc-ai-dir($jc, $ai, $dir) {
  display: flex;
  justify-content: $jc;
  align-items: $ai;
  flex-direction: $dir;
}

.navbarContainer {
  border-bottom: 3px solid black;
  ul {
    @include flex-jc-ai-dir(flex-start, center, row);
    li {
      font-size: 2rem; // this is only for "Projects" in navbar
      margin: 0 1em -0.5em 0;
      list-style: none;
      /* border: 2px black solid; */
      text-shadow: $mainShadow;
    }
    a {
      text-decoration: none;
      font-size: 2rem;
      //margin-bottom: -1rem; // this margin doesnt apply to <a>"Projects"
      font-weight: 600;
      color: rgb(30, 109, 179);
      transition: ease-in-out 0.15s;
      &:hover {
        color: #79717a;
      }
      &:active {
        color: white;
      }
    }
    :nth-child(3) {
      /* margin-right: 1.7em; */
    }
  }
}
</style>
