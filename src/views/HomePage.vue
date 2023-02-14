<script setup></script>

<template>
  <section :class="$style.projectSection">
    <router-link to="/todolist"
      ><div :class="$style.projectCards">Project One</div></router-link
    >
    <router-link to="/two"
      ><div :class="$style.projectCards">Project Two</div></router-link
    >
    <router-link to="/three"
      ><div :class="$style.projectCards">Project Three</div></router-link
    >
  </section>
</template>

<style module lang="scss">
@import "../scss/layout/_layout.scss";
/* @mixin flex-jc-ai-dir($jc, $ai, $dir) {
  display: flex;
  justify-content: $jc;
  align-items: $ai;
  flex-direction: $dir;
}
.projectSection {
  background-color: rgb(61, 126, 61);
  width: 80%;
  height: 50vh;
  margin: 0 auto;
  @include flex-jc-ai-dir(space-between, center, row);
  .projectCards {
    background-color: tomato;
    border-radius: 15px;
    width: 23rem;
    height: 11rem;
    @include flex-jc-ai-dir(center, center, row);
  }
} */
</style>
