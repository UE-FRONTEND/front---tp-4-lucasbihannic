<template>
  <div>
    <inputs @newTodo="handleAddTodo"></inputs>
    <todo-item v-for="todo in todolist" :key="todo.id" :todo="todo" @deleteTodo="deleteTodo"></todo-item>
  </div>
</template>

<script>
import Inputs from "./components/Inputs";
import TodoItem from "./components/TodoItem";
  export default {
    name: 'App',
    components: {
      Inputs,
      TodoItem
    },
    data() {
      return {
        todolist: []
      };
    },
    methods: {
      handleAddTodo(todo) {
        this.todolist.push(todo);
        console.log('Nouvelle tâche ajoutée:', todo);
      },
      deleteTodo(todoId) {
        this.todolist = this.todolist.filter(todo => todo.id !== todoId);
      }
    }
  };
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#counter {
  font-weight: bold;
}
</style>
