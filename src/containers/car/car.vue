<template>
	<div class="content">
		<car-header></car-header>
		<car-item></car-item>
		<car-footer></car-footer>
	</div>
</template>

<script>
import carHeader from '../../components/car/carHeader.vue'
import carItem from '../../components/car/carItem.vue'
import carFooter from '../../components/car/carFooter.vue'

	export default{
		name:"car",
		components:{carHeader,carItem,carFooter}
	}
</script>

<style >
.content{
	flex:1;
	font-size: 0.14rem;
}
</style>