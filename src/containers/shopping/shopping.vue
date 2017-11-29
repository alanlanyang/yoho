<template>
	<div class="content">
		<shopping-header></shopping-header>
		<shopping-banner></shopping-banner>
		<shopping-list></shopping-list>
	</div>
</template>

<script>
import shoppingHeader from '../../components/shopping/shoppingHeader'
import shoppingBanner from '../../components/shopping/shoppingBanner'
import shoppingList from '../../components/shopping/shoppingList'

	export default{
		name:"shopping",
		components:{shoppingHeader,shoppingBanner,shoppingList}
	}
</script>

<style>
.content{
	flex:1;
	font-size: 0.14rem;
	overflow: scroll;
}
</style>