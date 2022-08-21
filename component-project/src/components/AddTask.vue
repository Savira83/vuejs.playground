<template>
	<ul>
		<li><input type="checkbox" @click="$emit('changeStatus')">
			{{taskName}}
			{{status}}
			<button @click="$emit('addTask')">+</button>
		</li>
	</ul>
</template>
<script>
	export default {
		props: ['taskName', 'status'],
		emits:['addTask', 'changeStatus']
	}
</script>