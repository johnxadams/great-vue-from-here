<script setup>
import { ref, onMounted, computed, watch } from "vue";

const todos = ref([]);
const name = ref("");
const inputContent = ref("");
const inputCategory = ref(null);

// const exampleArr = ref([]);
// const exampleInputContent = ref("");

// const allTodos = computed(() =>
//   todos.value.sort((a, b) => {
//     return b.createdAt - a.createdAt;
//   })
// );

const addTodo = () => {
  if (inputContent.value.trim() === "") {
    return;
  }

  todos.value.push({
    id: new Date().getTime(),

    content: inputContent.value,
    // category: inputCategory.value,
  });
  console.log("todos.value: ", todos.value);
  // console.log("allTodos: ", allTodos);

  console.log("Add todo");

  inputContent.value = "";
};

/**deep : is going to look into each individual array item of todo.value
 * and if any of it changes, deep will catch it and then the function
 * inside watch will be called again
 */
watch(
  todos,
  (newValue) => {
    localStorage.setItem("todos", JSON.stringify(newValue));
  },
  { deep: true }
);

watch(name, (newValue) => {
  localStorage.setItem("name", newValue);
});

onMounted(() => {
  name.value = localStorage.getItem("name") || "";
  todos.value = JSON.parse(localStorage.getItem("todos")) || [];
});
</script>

<template>
  <main :class="$style.todoListContainer">
    Uno
    <section class="create-todo">
      <h2>Get Stuff Done</h2>
      <h2 class="title">
        <!-- v-model: name is linked with const name ref('') -->
        Whats up, <input type="text" placeholder="Name here" v-model="name" />
      </h2>
      <form @submit.prevent="addTodo">
        <h4>What do you want to task?</h4>
        <input
          type="text"
          placeholder="e.g. continue vue tutorial"
          v-model="inputContent"
        />
        <input type="submit" value="Add todo" />
      </form>
    </section>
    <section :class="$style.todoList">
      <ul>
        <li v-for="(todo, index) in todos" :key="todo.id">
          <div>
            <input type="text" v-model="todo.content" />
          </div>
        </li>
      </ul>
      <!-- <div v-for="(todo, index) in todos.value" :key="todo.id"> -->
      <!-- {{ index }} {{ allTodos }} {{ todo }} -->

      <!-- </div> -->
    </section>

    <!-- <section :class="$style.example">
<input type="text" v-model="exampleInputContent" />
<button>Send</button>
    </section> -->
  </main>
</template>

<style module lang="scss">
@import "../../scss/layout/projects/todolist.scss";
.example {
  border: 3px red solid;
  width: 15rem;
  height: 5rem;
}
</style>
