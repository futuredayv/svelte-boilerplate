<script>
	export let name;
	export let status;

	$: completed = status;

</script>

<style src="./style.scss"></style>

<div class="todo-item" class:completed>
	<div class="todo-item__status">
		<input type=checkbox bind:checked={completed}>
	</div>

	<div class="todo-item__name">{name}</div>
</div>
