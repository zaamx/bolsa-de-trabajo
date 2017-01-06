import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  categorias: {
  	"data": [
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
  	"pagination": {
  		"page": 1,
  		"per_page": 20,
  		"total_pages": 1,
  		"total_elements": 2
  	}
  },
  estados: {
  	"data": [
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
  	"pagination": {
  		"page": 1,
  		"per_page": 20,
  		"total_pages": 1,
  		"total_elements": 2
  	}
  },
  tipotrabajo: {
    "data": [
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
    "pagination": {
      "page": 1,
      "per_page": 20,
      "total_pages": 1,
      "total_elements": 3
    }
  }
}

const mutations = {
  INCREMENT(state) {
    state.count++
  },
  DECREMENT(state) {
    state.count--
  }
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
  actions
})

export default store
