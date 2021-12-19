import {onMounted, ref} from "vue";

export default function useTodos() {
  const todos = ref([])
  
  const addTodo = (todo) => {
    if (todo.content) todos.value.push(todo)
  }
  
  const deleteTodo = (id) => {
    let index = todos.value.findIndex(todo => todo.id === id)
    todos.value.splice(index, 1)
  }
  
  const fetchTodos = async () => {
    const res = await fetch('/',)
    todos.value = res.map((todo) => ({
      id: todo.id,
      content: todo.title,
      completed: todo.completed
    }))
  }
  
  // onMounted(() => fetchTodos())
  
  return {
    todos,
    addTodo,
    deleteTodo,
  }
}