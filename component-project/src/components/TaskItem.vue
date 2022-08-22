<template>
	<ul>
		<li><input type="checkbox" @click="$emit('changeStatus')">
			{{taskName}}
			{{status}}
		</li>
	</ul>
</template>
<script>
	export default {
		props: ['taskName', 'status'],
		emits:[ 'changeStatus']
	}
</script>