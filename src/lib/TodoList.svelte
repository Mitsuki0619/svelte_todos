<script lang="ts">
    import type { Todo } from "src/types/types";
    export let todos: Todo[];
</script>

<ul>
    {#if todos.length === 0}
    <p>何もない</p>
    {:else}
    {#each todos as todo}
    <li>
        <p>
            {todo.title}
        </p>
    </li>
    {/each}
    {/if}
</ul>