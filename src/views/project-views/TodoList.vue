<script setup>
import { ref } from "vue";

const todos = ref([]);
const name = ref("");
const inputContent = ref("");
const inputCategory = ref(null)

</script>

<template>
  <section :class="$style.todoListContainer">Uno</section>
</template>

<style module lang="scss">
@import "../../scss/layout/projects/todolist.scss";
</style>
