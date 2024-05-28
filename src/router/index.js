import { createRouter, createWebHistory } from 'vue-router'
import PokemonListView from '../views/PokemonListView.vue'
import PokemonDetailView from '../views/PokemonDetailView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: PokemonListView
  },
  {
    path: '/pokemon/:name',
    name: 'PokemonDetail',
    component: PokemonDetailView,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
