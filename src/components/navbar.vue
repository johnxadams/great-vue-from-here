<script setup></script>

<template>
  <nav v-bind:class="$style.navbarContainer">
    <ul>
      <li>Home</li>
      <li>About</li>
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
  ul {
    @include flex-jc-ai-dir(space-between, flex-start, row);
    li {
      font-size: 3rem;
      list-style: none;
      
    }
    :nth-child(2){
          /* color: green; */
          margin-right: 1em;
      }
  }
}
</style>
