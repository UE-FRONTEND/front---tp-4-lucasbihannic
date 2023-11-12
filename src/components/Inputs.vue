<template>
  <div>
    <input type="text" id="todo-content" v-model="content" />
    <button id="todo-button" @click="submitNewTodo">Add</button>
  </div>
</template>
<script>
export default {
  name: "Inputs",
  data() {
    return {
      content: '',
      id: 0
    };
  },
  methods: {
    submitNewTodo() {
      this.$emit('newTodo', {
        content: this.content,
        id: this.id++
      });
      this.content = '';
    }
  }
};
</script>

<style scoped>
</style>