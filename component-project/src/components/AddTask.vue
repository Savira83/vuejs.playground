<template>
	<ul>
		<li>
			{{taskName}}
		</li>
	</ul>
</template>
<script>
	export default {
		props: ['index','taskName']

	}
</script>