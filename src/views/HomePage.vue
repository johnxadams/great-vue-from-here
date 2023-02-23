<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <section :class="$style.projectSection">
    <router-link to="/todolist"
      ><div :class="$style.projectCards">
        <div :class="$style.projectNameArrowContainer">
          <div :class="$style.projectNameContainer">
            Todo list <br />
            application
          </div>
          <div :class="$style.projectArrowContainer">
            <Icon
              :class="$style.arrowIcon"
              icon="mdi:arrow-right-circle-outline"
            />
          </div>
        </div></div
    ></router-link>
    <router-link to="/two"
      ><div :class="$style.projectCards"><div :class="$style.projectNameArrowContainer">
          <div :class="$style.projectNameContainer">
            Second <br />
            application
          </div>
          <div :class="$style.projectArrowContainer">
            <Icon
              :class="$style.arrowIcon"
              icon="mdi:arrow-right-circle-outline"
            />
          </div>
        </div></div></router-link
    >
    <router-link to="/three"
      ><div :class="$style.projectCards"><div :class="$style.projectNameArrowContainer">
          <div :class="$style.projectNameContainer">
            Third <br />
            application
          </div>
          <div :class="$style.projectArrowContainer">
            <Icon
              :class="$style.arrowIcon"
              icon="mdi:arrow-right-circle-outline"
            />
          </div>
        </div></div></router-link
    >
  </section>
</template>

<style module lang="scss">
@import "../scss/layout/homepage.scss";
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
