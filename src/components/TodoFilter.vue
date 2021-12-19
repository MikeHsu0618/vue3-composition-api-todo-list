<template>
  <div class="filters">
    <span
        v-for="filter in filters"
        :key="filter.value"
        @click="$emit('change-filter', filter.value)"
        class="filter"
        style="margin: 5px; border: 1px black solid; cursor: pointer"
        :class="{ active: props.selected === filter.value }">
      {{ filter.label }}
    </span>
  </div>
</template>

<script setup>
import {reactive} from "vue";

const filters = reactive([
  { label: "全部", value: "all" },
  { label: "已完成", value: "done" },
  { label: "未完成", value: "todo" },
]);
const props = defineProps()
console.log(props)
</script>

<style scoped>

</style>