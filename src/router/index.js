import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from "./../containers/index/index"
import Kind from "./../containers/kind/kind"
import Shopping from "./../containers/shopping/shopping"
import Car from "./../containers/car/car"
import Mine from "./../containers/mine/mine"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/index"
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/kind',
      name: 'kind',
      component: Kind
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: Shopping
    },
    {
      path: '/car',
      name: 'car',
      component: Car
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    }
  ]
})
