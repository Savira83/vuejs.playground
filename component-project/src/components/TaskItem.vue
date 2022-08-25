<template>
	<ol>
		<li><input type="checkbox" @click="$emit('changeStatus')">
			{{taskName}}
			{{status}}
		<button @click= "$emit('editTask')">edit</button>
		<button @click = "$emit('removeTask')">x</button>
		<button @click = "$emit('moveUp')">↑</button>
		<button @click = "$emit('moveDown')">↓</button>
		</li>
	</ol>
</template>
<script>
	export default {
		props: ['taskName', 'status'],
		emits:[ 'changeStatus', 'editTask', 'removeTask', 'moveUp', 'moveDown']
	}
</script>