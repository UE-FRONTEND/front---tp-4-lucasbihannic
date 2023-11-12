<template>
  <div class="todo-item"> {{ todo.content }} </div>
</template>

<script>

export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>

</style>