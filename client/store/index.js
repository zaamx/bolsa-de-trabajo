import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  search: {
    selectedEstado: null,
    selectedTipo: null,
    selectedCategoria : null
  },
  nuevoanuncio: {
    anunciante: null,
    area_code: null,
    descripcion: null,
    monto: null,
    phone_number: null,
    rel_categoria: [],
    rel_estado: [],
    rel_tipotrabajo: [],
    rel_tipopago: [],
    titulo: null,
    imagen: null
  },
  categorias: [
    {
      "_id": "586d73e98d0b347e058a13b8",
      "titulo": "Oferta de trabajo",
      "appId": "hispanojobs",
      "cobjectId": "categoria",
      "actions": {
        "comments": [],
        "ratings": {
          "users": [],
          "avg": 0,
          "total": 0
        },
        "votes": {
          "users_downvote": [],
          "users_upvote": [],
          "users": [],
          "total": 0
        }
      },
      "dt_update": "2017-01-04T22:15:05.789Z",
      "dt_create": "2017-01-04T22:15:05.789Z",
      "__v": 0,
      "id": "586d73e98d0b347e058a13b8"
    },
    {
      "_id": "586d741f06e9a48305c34a43",
      "titulo": "Ofrecimiento de servicios",
      "appId": "hispanojobs",
      "cobjectId": "categoria",
      "actions": {
        "comments": [],
        "ratings": {
          "users": [],
          "avg": 0,
          "total": 0
        },
        "votes": {
          "users_downvote": [],
          "users_upvote": [],
          "users": [],
          "total": 0
        }
      },
      "dt_update": "2017-01-04T22:15:59.358Z",
      "dt_create": "2017-01-04T22:15:59.358Z",
      "__v": 0,
      "id": "586d741f06e9a48305c34a43"
    }
  ],
  estados: [
    {
      "_id": "586d736906e9a48305c34a42",
      "codigo": "Alabama",
      "nombre": "AL",
      "appId": "hispanojobs",
      "cobjectId": "estado",
      "actions": {
        "comments": [],
        "ratings": {
          "users": [],
          "avg": 0,
          "total": 0
        },
        "votes": {
          "users_downvote": [],
          "users_upvote": [],
          "users": [],
          "total": 0
        }
      },
      "dt_update": "2017-01-04T22:12:57.842Z",
      "dt_create": "2017-01-04T22:12:57.842Z",
      "__v": 0,
      "id": "586d736906e9a48305c34a42"
    },
    {
      "_id": "586d7378bcfaa18805361cf1",
      "codigo": "Alaska",
      "nombre": "AK",
      "appId": "hispanojobs",
      "cobjectId": "estado",
      "actions": {
        "comments": [],
        "ratings": {
          "users": [],
          "avg": 0,
          "total": 0
        },
        "votes": {
          "users_downvote": [],
          "users_upvote": [],
          "users": [],
          "total": 0
        }
      },
      "dt_update": "2017-01-04T22:13:12.197Z",
      "dt_create": "2017-01-04T22:13:12.197Z",
      "__v": 0,
      "id": "586d7378bcfaa18805361cf1"
    }
  ],
  tipotrabajo: [
    {
      "_id": "586d7492506ad98d05a5b0a8",
      "titulo": "Jardinero",
      "appId": "hispanojobs",
      "cobjectId": "tipo_trabajo",
      "actions": {
        "comments": [],
        "ratings": {
          "users": [],
          "avg": 0,
          "total": 0
        },
        "votes": {
          "users_downvote": [],
          "users_upvote": [],
          "users": [],
          "total": 0
        }
      },
      "dt_update": "2017-01-04T22:17:54.002Z",
      "dt_create": "2017-01-04T22:17:54.002Z",
      "__v": 0,
      "id": "586d7492506ad98d05a5b0a8"
    },
    {
      "_id": "586d749fbcfaa18805361cf4",
      "titulo": "Carpintero",
      "appId": "hispanojobs",
      "cobjectId": "tipo_trabajo",
      "actions": {
        "comments": [],
        "ratings": {
          "users": [],
          "avg": 0,
          "total": 0
        },
        "votes": {
          "users_downvote": [],
          "users_upvote": [],
          "users": [],
          "total": 0
        }
      },
      "dt_update": "2017-01-04T22:18:07.209Z",
      "dt_create": "2017-01-04T22:18:07.209Z",
      "__v": 0,
      "id": "586d749fbcfaa18805361cf4"
    },
    {
      "_id": "586d74b38d0b347e058a13b9",
      "titulo": "Médico",
      "appId": "hispanojobs",
      "cobjectId": "tipo_trabajo",
      "actions": {
        "comments": [],
        "ratings": {
          "users": [],
          "avg": 0,
          "total": 0
        },
        "votes": {
          "users_downvote": [],
          "users_upvote": [],
          "users": [],
          "total": 0
        }
      },
      "dt_update": "2017-01-04T22:18:27.772Z",
      "dt_create": "2017-01-04T22:18:27.772Z",
      "__v": 0,
      "id": "586d74b38d0b347e058a13b9"
    }
  ],
  tipopago: [
    {
      "_id": "586d743906e9a48305c34a44",
      "titulo": "Mensual",
      "appId": "hispanojobs",
      "cobjectId": "tipo_pago",
      "actions": {
        "comments": [],
        "ratings": {
          "users": [],
          "avg": 0,
          "total": 0
        },
        "votes": {
          "users_downvote": [],
          "users_upvote": [],
          "users": [],
          "total": 0
        }
      },
      "dt_update": "2017-01-04T22:16:25.721Z",
      "dt_create": "2017-01-04T22:16:25.721Z",
      "__v": 0,
      "id": "586d743906e9a48305c34a44"
    },
    {
      "_id": "586d744306e9a48305c34a45",
      "titulo": "Semanal",
      "appId": "hispanojobs",
      "cobjectId": "tipo_pago",
      "actions": {
        "comments": [],
        "ratings": {
          "users": [],
          "avg": 0,
          "total": 0
        },
        "votes": {
          "users_downvote": [],
          "users_upvote": [],
          "users": [],
          "total": 0
        }
      },
      "dt_update": "2017-01-04T22:16:35.641Z",
      "dt_create": "2017-01-04T22:16:35.641Z",
      "__v": 0,
      "id": "586d744306e9a48305c34a45"
    },
    {
      "_id": "586d7451bcfaa18805361cf3",
      "titulo": "Por hora",
      "appId": "hispanojobs",
      "cobjectId": "tipo_pago",
      "actions": {
        "comments": [],
        "ratings": {
          "users": [],
          "avg": 0,
          "total": 0
        },
        "votes": {
          "users_downvote": [],
          "users_upvote": [],
          "users": [],
          "total": 0
        }
      },
      "dt_update": "2017-01-04T22:16:49.356Z",
      "dt_create": "2017-01-04T22:16:49.356Z",
      "__v": 0,
      "id": "586d7451bcfaa18805361cf3"
    }
  ],
  jobs: [
    {
      "_id": "586fd3a12db6c92956a22713",
      "anunciante": "Juan Perez",
      // "area_code": 6030,
      "area_code": "586fd3a12db6c92956a22713",
      "descripcion": "Un trabajo muy aburrido...",
      "monto": 3000,
      "phone_number": 5539902887,
      "rel_categoria": [
        "586d73e98d0b347e058a13b8"
      ],
      "rel_estado": [
        "586d736906e9a48305c34a42"
      ],
      "rel_tipotrabajo": [
        "586d7492506ad98d05a5b0a8"
      ],
      "titulo": "Un trabajo X store",
      "imagen": "https://hispanojobs.stamplayapp.com/upload/cobject/jobs/1483723680680_captura_de_pantalla_2016-12-21_a_la(s)_12.40.17_p.m..png",
      "appId": "hispanojobs",
      "cobjectId": "jobs",
      "actions": {
        "comments": [],
        "ratings": {
          "users": [],
          "avg": 0,
          "total": 0
        },
        "votes": {
          "users_downvote": [],
          "users_upvote": [],
          "users": [],
          "total": 0
        }
      },
      "dt_update": "2017-01-06T17:28:01.327Z",
      "dt_create": "2017-01-06T17:28:01.327Z",
      "__v": 0,
      "id": "586fd3a12db6c92956a22713"
    }
  ]
}

const mutations = {
  INCREMENT(state) {
    state.count++
  },
  DECREMENT(state) {
    state.count--
  },
  ACTUALIZAESTADO (state, message) {
    state.search.selectedEstado = message
  },
  ACTUALIZATIPO (state, message) {
    state.search.selectedTipo = message
  },
  ACTUALIZACATEGORIA (state, message) {
    state.search.selectedCategoria = message
  }
}

const getters = {
  currentJob: state => {
    var url = state.route.params.id // return url
    console.log('ahi va', state.jobs)
    return state.jobs.filter(job => job.id === url)
  },
  currentProduct: state => {
    var url = state.route.params.producto // return url
    return state.features.filter(feature => feature.mainroute === url)
  },
  currentUrl: state => state.route.params.producto
}

const actions = {
  incrementAsync({commit}) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

export default store
