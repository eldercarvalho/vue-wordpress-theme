import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home'
import About from './pages/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/wordpress/',
  routes: [
    {  
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})