<script setup>
import {ref, computed} from 'vue'

const props = defineProps({
  tid: Number
})
const emit = defineEmits()
const todoContent = ref('')
const emitAddTodo = () => {
  let todo = {
    id: props.tid,
    content: todoContent.value,
    completed: false
  }
  emit("add-todo", todo)
}
</script>

<template>
  <div class="input-add">
    <input type="text" v-model="todoContent" @keyup.enter="emitAddTodo">
    <button @click="emitAddTodo">
      <i class="plus">submit</i>
    </button>
  </div>
</template>

<style scoped>
.input-add {
  margin-bottom: 5px;
}
</style>
