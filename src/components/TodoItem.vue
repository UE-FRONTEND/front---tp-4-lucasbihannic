<template>
  <div class="todo-item"> {{ todo.content }} </div>
  <button :id="'delete-' + todo.id" v-on:click="deleteTodo">Delete</button>
</template>

<script>

export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteTodo() {
      this.$emit('deleteTodo', this.todo.id);
    }
  }
};
</script>

<style scoped>

</style>