<template>
	<ul>
		<li><input type="checkbox" @click="$emit('changeStatus')">
			{{taskName}}
			{{status}}
			<button @click="$emit('editTask')">edit</button>
		</li>
	</ul>
</template>
<script>
	export default {
		props: ['taskName', 'status'],
		emits:[ 'changeStatus', 'editTask']
	}
</script>