import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import PublicarAnuncio from '../views/PublicarAnuncio'
import PublicarAnuncioPublic from '../views/PublicarAnuncioPublic'
import Upload from '../views/Upload'
import Trabajos from '../views/Trabajos'
import Trabajo from '../views/Trabajo'
import Buscar from '../views/Buscar'

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
      path: '/publicar-anuncio-publico',
      component: PublicarAnuncioPublic,
      name: 'PublicarAnuncioPublic'
    },
    {
      path: '/upload',
      component: Upload,
      name: 'Upload'
    },
    {
      path: '/buscar',
      component: Buscar,
      name: 'Buscar'
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
