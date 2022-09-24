<template>
	<table>
		<th class="num">Number</th><th class="symbol">Symbol</th>  <th class="price">Price</th>
			<tr v-for = "(currency, id) in info" :key = 'id'><td class="num">{{id+1}}</td><td class="symbol">{{currency.symbol}}</td> <td class="price">{{currency.price}}</td></tr>
	</table>

</template>

<script>
	import axios from 'axios'
	//import { Line } from 'vue-chartjs'
	export default {
		//extends: Line,
		//components: Line,
		data(){
			return{
				info: null
			}
		},
		mounted(){
			axios
			.get('https://api.binance.com/api/v1/ticker/allPrices')
			.then(response=>(this.info = response.data))
			//this.renderChart(this.symbol, this.price)
			
		}  		    
	}
</script>
<style>
	.symbol {
		border: solid black 1px;
	}
	.price {
		border: solid black 1px;
	}
	.num {
		border: solid black 1px;
	}
</style>