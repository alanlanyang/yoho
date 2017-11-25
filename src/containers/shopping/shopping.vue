<template>
<<<<<<< HEAD
	<div class="content">
		<shopping-header></shopping-header>
		<shopping-banner></shopping-banner>
		<shopping-list></shopping-list>
=======
	<div class="mainBox">
		<div class="main">
			逛
		</div>
		<app-footer></app-footer>
>>>>>>> yang
	</div>
</template>

<script>
<<<<<<< HEAD
import shoppingHeader from '../../components/shopping/shoppingHeader'
import shoppingBanner from '../../components/shopping/shoppingBanner'
import shoppingList from '../../components/shopping/shoppingList'

	export default{
		name:"shopping",
		components:{shoppingHeader,shoppingBanner,shoppingList}
=======
	import appFooter from '../../components/footer'
	export default{
		name:"shopping",
		components:{appFooter}
>>>>>>> yang
	}
</script>

<style>
.content{
	flex:1;
	font-size: 0.14rem;
	overflow: scroll;
}
</style>