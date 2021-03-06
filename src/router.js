import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Test from './views/Test.vue'
import RecipesNew from './views/RecipesNew.vue'
import RecipesShow from './views/RecipesShow.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/test', name: 'test', component: Test },
    { path: '/recipes/new', name: 'recipes-new', component: RecipesNew },
    { path: '/recipes/:id', name: 'recipes-show', component: RecipesShow}
  ]
})
