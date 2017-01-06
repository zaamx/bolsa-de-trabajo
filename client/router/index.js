import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import PublicarAnuncio from '../views/PublicarAnuncio'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home,
      name: 'Bolsa'
    },
    {
      path: '/publicar-anuncio',
      component: PublicarAnuncio,
      name: 'PublicarAnuncio'
    }
  ]
})
