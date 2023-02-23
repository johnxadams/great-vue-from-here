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
    category: inputCategory.value,
    done: false,
  });
  console.log("todos.value: ", todos.value);
  // console.log("allTodos: ", allTodos);

  console.log("Add todo");

  inputContent.value = "";
};

const removeTodo = (todo) => {
  todos.value = todos.value.filter((t) => t !== todo);
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
    <section :class="$style.createTodo">
      <h2>Get Stuff Done</h2>
      <h2 class="title">
        <!-- v-model: name is linked with const name ref('') -->
        Whats up, <input type="text" placeholder="Name here" v-model="name" />
      </h2>
      <form @submit.prevent="addTodo" :class="$style.todoForm">
        <h4>What do you want to task?</h4>
        <input
          type="text"
          placeholder="e.g. continue vue tutorial"
          v-model="inputContent"
          :class="$style.todoInputContent"
        />
        <h4>Choose a category</h4>
        <div :class="$style.options">
          <label>
            <input
              type="radio"
              name="category"
              value="business"
              v-model="inputCategory"
            />
            <span :class="[$style.bubble, $style.business]"></span>
            <div>Business</div>

            <input
              type="radio"
              name="category"
              value="personal"
              v-model="inputCategory"
            />
            <span :class="[$style.bubble, $style.personal]"></span>
            <div>Personal</div>
          </label>
        </div>
        <input type="submit" value="Add todo" :class="$style.addTodoBtn" />
      </form>
    </section>
    <section :class="$style.todoListRender">
      <ul>
        <li
          :class="[$style['todo-item'], $style[`${todo.done && 'done'}`]]"
          v-for="(todo, index) in todos"
          :key="todo.id"
        >
          <label>
            <!-- input and span are visual rendering of the checkbox -->
            <input type="checkbox" v-model="todo.done" />
            <span :class="[$style.bubble, $style[`${todo.category}`]]"></span>
          </label>
          <div>
            <input
              type="text"
              v-model="todo.content"
              :class="$style.renderedTodoInput"
            />
            <button @click="removeTodo(todo)" :class="$style.deleteTodoBtn">
              Delete
            </button>
          </div>
        </li>
      </ul>
    </section>
  </main>
</template>

<style module lang="scss">
@import "../../scss/layout/projects/todolist.scss";
</style>
