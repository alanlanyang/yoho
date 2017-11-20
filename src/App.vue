<template>
  <div id="app">
  	<router-view></router-view>
  	<app-footer></app-footer>
  </div>
</template>

<script>
	import appFooter from "./components/footer"
export default {
  name: 'app',
  components:{appFooter}
}
</script>

<style lang='scss'>
		@import './styles/main.scss'
</style>
