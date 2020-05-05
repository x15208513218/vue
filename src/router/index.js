import Vue from 'vue'
import VueRouter from 'vue-router'
import Cart from '../views/Cart/Cart.vue'
import Mine from '../views/Mine/Mine.vue'
Vue.use(VueRouter)

  const routes = [
  {
	path: '/',
	name: 'Home',
	component: ()=>import ("../views/Home.vue")
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },{
    path: '/mine',
    name: 'Mine',
    component: Mine
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=>import("@/views/Loginregister/Loginregister.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
