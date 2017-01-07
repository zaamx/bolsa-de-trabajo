import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import PublicarAnuncio from '../views/PublicarAnuncio'
import Trabajos from '../views/Trabajos'
import Trabajo from '../views/Trabajo'

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
    },
    {
      path: '/trabajos',
      component: Trabajos,
      name: 'Trabajos'
      // children: [
      //   {
      //     path: 'trabajos/:trabajo',
      //     components: {
      //       main: Trabajo
      //     },
      //     name: 'Trabajo'
      //   }
      // ]
    },
    {
      path: '/trabajos/:id',
      component: Trabajo,
      name: 'Trabajo'
    },
  ]
})
