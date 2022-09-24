<script lang="ts">
    import {todos } from '../store'
    let title: string;
    let content: string;
    const addTodo = () => {
        $todos = [{id: $todos.length, title: title, content: content, isDone: false}, ...$todos];
        console.log($todos);
    }

</script>
    <label class="title_field">
        Title : <input type="text" bind:value={title}>
    </label>
    <label class="content_field">
        Content : 
        <textarea name="content" cols="30" rows="10" bind:value={content}></textarea>
    </label>
    <button on:click={addTodo}>add</button>
<style>
    .title_field {
        display: block;
        margin-bottom: 30px;
    }
    .content_field {
        display: block;
    }
</style>