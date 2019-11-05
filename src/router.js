import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import FormBuilder from './views/FormBuilder.vue'
import Photos from './views/Photos.vue'
import About from './views/About.vue'
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/form-builder',
      name: 'Dashboard',
      component: FormBuilder,
    },
    {
      path: '/photos',
      name: 'Photos',
      component: Photos,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    }
  ]
})
