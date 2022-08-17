<template>
	<div>
		<ul>
			<li>
				{{name}}
				<input type="button" value="+" @click="$emit('addCategory')">
			</li>
		</ul> 
	</div>
</template>

<script>
export default{
	props:['id','name'],
	//emits: ['addCategory']


}

	
</script>