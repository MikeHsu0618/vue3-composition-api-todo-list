<template>
  <div class="todo-item" :class="{ done: todoItem.completed }">
    <label>
      <input
          type="checkbox"
          :checked="todoItem.completed"
          @click="$emit('change-state', $event)"
      />
      {{ todoItem.content }}
      <span class="check-button"></span>
    </label>
    <button class="delete-btn" @click="$emit('delete-item', todoItem)">删除</button>
  </div>
</template>

<script setup>
const props = defineProps(['todoItem'])
</script>

