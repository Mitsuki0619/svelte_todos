<script lang="ts">
  import TodoForm from "./lib/TodoForm.svelte";
  import TodoList from "./lib/TodoList.svelte";
  import { todos } from "./store";
</script>
<main>
  <TodoForm todos={$todos}/>
  <TodoList todos={$todos} />
</main>