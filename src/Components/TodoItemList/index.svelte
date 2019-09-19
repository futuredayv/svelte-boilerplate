<script>
	import { onMount } from 'svelte';
	import { TodoStore } from '@Store/TodoStore';
	import TodoItem from '@Components/TodoItem';

	export let title = 'Todo List';

	export let todoItemList = [
		{ name: 'Create Todo App', status: false},
		{ name: 'Create Todo Item', status: false},
		{ name: 'Test Functionality', status: false},
		{ name: 'Check Bindings', status: false},
		{ name: 'Make Sure It Reacts', status: false}
	];

	onMount(() => {
		TodoStore.set(todoItemList);
		TodoStore.subscribe(list => console.table(list));
	})
</script>

<style src="./style.scss"></style>

<div class="todo-item-list">
	<div class="todo-item-list__title">{title}</div>

	<div class="todo-item-list__list">
		{#each $TodoStore as todo}
			<TodoItem {...todo} />
		{/each}
	</div>
</div>
