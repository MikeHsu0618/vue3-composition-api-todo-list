<template>
  <div class="todo-list">
    <todo-list-item
        v-for="todo in todos"
        :key="todo.id"
        @change-state="todo.completed = $event.target.checked"
        @delete-item="$event => this.$emit('delete-item', $event.id)"
        :todo-item="todo"
    ></todo-list-item>
  </div>
</template>

<script setup>
import TodoListItem from "../components/TodoListItem.vue";

const props = defineProps({
  todos: Array
})
</script>

<style scoped>
.todo-list {
  display: grid;
  row-gap: 14px;
}
</style>