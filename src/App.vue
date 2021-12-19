<script setup>
  import useTodos from "./composables/useTodo";
  import TodoAdd from "./components/TodoAdd.vue"
  import TodoFilter from "./components/TodoFilter.vue"
  import TodoList from "./components/TodoList.vue"
  import useFilteredTodo from "./composables/useFilteredTodo";

  const {todos, addTodo, deleteTodo} = useTodos()
  const {filter, filteredTodos} = useFilteredTodo(todos)
</script>

<template>
  <div class="container">
    <h1>Vue 3 Composition Api + Vite </h1>
    <todo-add :tid="todos.length" @add-todo="addTodo"></todo-add>
    <todo-filter :selected="filter" @change-filter="filter = $event"></todo-filter>
    <todo-list :todos="filteredTodos" @delete-item="deleteTodo"></todo-list>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
