import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  search: {
    selectedEstado: null,
    selectedTipo: null,
    selectedCategoria : null,
    searchParams: {},
    searchResults: []
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
  estados:[
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
    },
    {
      "_id": "5880e5bc506ad98d05a60da9",
      "nombre": "AZ",
      "codigo": "Arizona AZ",
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
      "dt_update": "2017-01-19T16:13:48.327Z",
      "dt_create": "2017-01-19T16:13:48.327Z",
      "__v": 0,
      "id": "5880e5bc506ad98d05a60da9"
    },
    {
      "_id": "5880e5f88d0b347e058a7063",
      "nombre": "AR",
      "codigo": "Arkansas AR",
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
      "dt_update": "2017-01-19T16:14:48.863Z",
      "dt_create": "2017-01-19T16:14:48.863Z",
      "__v": 0,
      "id": "5880e5f88d0b347e058a7063"
    },
    {
      "_id": "5880e637506ad98d05a60dbd",
      "nombre": "CA",
      "codigo": "California CA",
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
      "dt_update": "2017-01-19T16:15:51.104Z",
      "dt_create": "2017-01-19T16:15:51.104Z",
      "__v": 0,
      "id": "5880e637506ad98d05a60dbd"
    },
    {
      "_id": "5880e63f06e9a48305c3a6ca",
      "nombre": "NC",
      "codigo": "Carolina del Norte NC",
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
      "dt_update": "2017-01-19T16:15:59.308Z",
      "dt_create": "2017-01-19T16:15:59.308Z",
      "__v": 0,
      "id": "5880e63f06e9a48305c3a6ca"
    },
    {
      "_id": "5880e64906e9a48305c3a6cb",
      "nombre": "SC",
      "codigo": "Carolina del Sur SC",
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
      "dt_update": "2017-01-19T16:16:09.439Z",
      "dt_create": "2017-01-19T16:16:09.439Z",
      "__v": 0,
      "id": "5880e64906e9a48305c3a6cb"
    },
    {
      "_id": "5880e652cfaedb517e22cb51",
      "nombre": "CO",
      "codigo": "Colorado CO",
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
      "dt_update": "2017-01-19T16:16:18.152Z",
      "dt_create": "2017-01-19T16:16:18.152Z",
      "__v": 0,
      "id": "5880e652cfaedb517e22cb51"
    },
    {
      "_id": "5880e65c06e9a48305c3a6cc",
      "nombre": "CT",
      "codigo": "Connecticut CT",
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
      "dt_update": "2017-01-19T16:16:28.386Z",
      "dt_create": "2017-01-19T16:16:28.386Z",
      "__v": 0,
      "id": "5880e65c06e9a48305c3a6cc"
    },
    {
      "_id": "5880e662cfaedb517e22cb52",
      "nombre": "ND",
      "codigo": "Dakota del Norte ND",
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
      "dt_update": "2017-01-19T16:16:34.574Z",
      "dt_create": "2017-01-19T16:16:34.574Z",
      "__v": 0,
      "id": "5880e662cfaedb517e22cb52"
    },
    {
      "_id": "5880e66b06e9a48305c3a6cd",
      "nombre": "SD",
      "codigo": "Dakota del Sur SD",
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
      "dt_update": "2017-01-19T16:16:43.510Z",
      "dt_create": "2017-01-19T16:16:43.510Z",
      "__v": 0,
      "id": "5880e66b06e9a48305c3a6cd"
    },
    {
      "_id": "5880e672506ad98d05a60dbe",
      "nombre": "DE",
      "codigo": "Delaware DE",
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
      "dt_update": "2017-01-19T16:16:50.158Z",
      "dt_create": "2017-01-19T16:16:50.158Z",
      "__v": 0,
      "id": "5880e672506ad98d05a60dbe"
    },
    {
      "_id": "5880e67acfaedb517e22cb53",
      "nombre": "FL",
      "codigo": "Florida FL",
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
      "dt_update": "2017-01-19T16:16:58.313Z",
      "dt_create": "2017-01-19T16:16:58.312Z",
      "__v": 0,
      "id": "5880e67acfaedb517e22cb53"
    },
    {
      "_id": "5880e681cfaedb517e22cb54",
      "nombre": "GA",
      "codigo": "Georgia GA",
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
      "dt_update": "2017-01-19T16:17:05.483Z",
      "dt_create": "2017-01-19T16:17:05.483Z",
      "__v": 0,
      "id": "5880e681cfaedb517e22cb54"
    },
    {
      "_id": "5880e68e8d0b347e058a7071",
      "nombre": "HI",
      "codigo": "Hawái HI",
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
      "dt_update": "2017-01-19T16:17:18.641Z",
      "dt_create": "2017-01-19T16:17:18.641Z",
      "__v": 0,
      "id": "5880e68e8d0b347e058a7071"
    },
    {
      "_id": "5880e69606e9a48305c3a6ce",
      "nombre": "ID",
      "codigo": "Idaho ID",
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
      "dt_update": "2017-01-19T16:17:26.977Z",
      "dt_create": "2017-01-19T16:17:26.977Z",
      "__v": 0,
      "id": "5880e69606e9a48305c3a6ce"
    },
    {
      "_id": "5880e69f506ad98d05a60dbf",
      "nombre": "IL",
      "codigo": "Illinois IL",
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
      "dt_update": "2017-01-19T16:17:35.567Z",
      "dt_create": "2017-01-19T16:17:35.567Z",
      "__v": 0,
      "id": "5880e69f506ad98d05a60dbf"
    },
    {
      "_id": "5880e6a7506ad98d05a60dc0",
      "nombre": "IN",
      "codigo": "Indiana IN",
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
      "dt_update": "2017-01-19T16:17:43.196Z",
      "dt_create": "2017-01-19T16:17:43.196Z",
      "__v": 0,
      "id": "5880e6a7506ad98d05a60dc0"
    },
    {
      "_id": "5880e6b406e9a48305c3a6cf",
      "nombre": "IA",
      "codigo": "Iowa IA",
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
      "dt_update": "2017-01-19T16:17:56.377Z",
      "dt_create": "2017-01-19T16:17:56.377Z",
      "__v": 0,
      "id": "5880e6b406e9a48305c3a6cf"
    },
    {
      "_id": "5880e6bd506ad98d05a60dc1",
      "nombre": "KS",
      "codigo": "Kansas KS",
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
      "dt_update": "2017-01-19T16:18:05.188Z",
      "dt_create": "2017-01-19T16:18:05.188Z",
      "__v": 0,
      "id": "5880e6bd506ad98d05a60dc1"
    },
    {
      "_id": "5880e6c7506ad98d05a60dc3",
      "nombre": "KY",
      "codigo": "Kentucky KY",
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
      "dt_update": "2017-01-19T16:18:15.305Z",
      "dt_create": "2017-01-19T16:18:15.305Z",
      "__v": 0,
      "id": "5880e6c7506ad98d05a60dc3"
    },
    {
      "_id": "5880e6cfcfaedb517e22cb55",
      "nombre": "LA",
      "codigo": "Luisiana LA",
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
      "dt_update": "2017-01-19T16:18:23.273Z",
      "dt_create": "2017-01-19T16:18:23.273Z",
      "__v": 0,
      "id": "5880e6cfcfaedb517e22cb55"
    },
    {
      "_id": "5880e6d8cfaedb517e22cb56",
      "nombre": "ME",
      "codigo": "Maine ME",
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
      "dt_update": "2017-01-19T16:18:32.478Z",
      "dt_create": "2017-01-19T16:18:32.478Z",
      "__v": 0,
      "id": "5880e6d8cfaedb517e22cb56"
    },
    {
      "_id": "5880e6e2cfaedb517e22cb57",
      "nombre": "MD",
      "codigo": "Maryland MD",
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
      "dt_update": "2017-01-19T16:18:42.208Z",
      "dt_create": "2017-01-19T16:18:42.208Z",
      "__v": 0,
      "id": "5880e6e2cfaedb517e22cb57"
    },
    {
      "_id": "5880e6ea06e9a48305c3a6d0",
      "nombre": "MA",
      "codigo": "Massachusetts MA",
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
      "dt_update": "2017-01-19T16:18:50.837Z",
      "dt_create": "2017-01-19T16:18:50.837Z",
      "__v": 0,
      "id": "5880e6ea06e9a48305c3a6d0"
    },
    {
      "_id": "5880e6f1506ad98d05a60dc4",
      "nombre": "MI",
      "codigo": "Míchigan MI",
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
      "dt_update": "2017-01-19T16:18:57.218Z",
      "dt_create": "2017-01-19T16:18:57.218Z",
      "__v": 0,
      "id": "5880e6f1506ad98d05a60dc4"
    },
    {
      "_id": "5880e6fd506ad98d05a60dc6",
      "nombre": "MN",
      "codigo": "Minnesota MN",
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
      "dt_update": "2017-01-19T16:19:09.348Z",
      "dt_create": "2017-01-19T16:19:09.348Z",
      "__v": 0,
      "id": "5880e6fd506ad98d05a60dc6"
    },
    {
      "_id": "5880e7058d0b347e058a7073",
      "nombre": "MS",
      "codigo": "Misisipi MS",
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
      "dt_update": "2017-01-19T16:19:17.784Z",
      "dt_create": "2017-01-19T16:19:17.784Z",
      "__v": 0,
      "id": "5880e7058d0b347e058a7073"
    },
    {
      "_id": "5880e7108d0b347e058a7079",
      "nombre": "MO",
      "codigo": "Misuri MO",
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
      "dt_update": "2017-01-19T16:19:28.772Z",
      "dt_create": "2017-01-19T16:19:28.772Z",
      "__v": 0,
      "id": "5880e7108d0b347e058a7079"
    },
    {
      "_id": "5880e71ccfaedb517e22cb5f",
      "nombre": "MT",
      "codigo": "Montana MT",
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
      "dt_update": "2017-01-19T16:19:40.202Z",
      "dt_create": "2017-01-19T16:19:40.202Z",
      "__v": 0,
      "id": "5880e71ccfaedb517e22cb5f"
    },
    {
      "_id": "5880e723cfaedb517e22cb62",
      "nombre": "NE",
      "codigo": "Nebraska NE",
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
      "dt_update": "2017-01-19T16:19:47.518Z",
      "dt_create": "2017-01-19T16:19:47.518Z",
      "__v": 0,
      "id": "5880e723cfaedb517e22cb62"
    },
    {
      "_id": "5880e72e8d0b347e058a707f",
      "nombre": "NV",
      "codigo": "Nevada NV",
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
      "dt_update": "2017-01-19T16:19:58.798Z",
      "dt_create": "2017-01-19T16:19:58.798Z",
      "__v": 0,
      "id": "5880e72e8d0b347e058a707f"
    },
    {
      "_id": "5880e734cfaedb517e22cb63",
      "nombre": "NJ",
      "codigo": "Nueva Jersey NJ",
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
      "dt_update": "2017-01-19T16:20:04.940Z",
      "dt_create": "2017-01-19T16:20:04.940Z",
      "__v": 0,
      "id": "5880e734cfaedb517e22cb63"
    },
    {
      "_id": "5880e73c06e9a48305c3a6da",
      "nombre": "NY",
      "codigo": "Nueva York NY",
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
      "dt_update": "2017-01-19T16:20:12.430Z",
      "dt_create": "2017-01-19T16:20:12.430Z",
      "__v": 0,
      "id": "5880e73c06e9a48305c3a6da"
    },
    {
      "_id": "5880e746506ad98d05a60dd2",
      "nombre": "NH",
      "codigo": "Nuevo Hampshire NH",
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
      "dt_update": "2017-01-19T16:20:22.948Z",
      "dt_create": "2017-01-19T16:20:22.948Z",
      "__v": 0,
      "id": "5880e746506ad98d05a60dd2"
    },
    {
      "_id": "5880e74ecfaedb517e22cb64",
      "nombre": "NM",
      "codigo": "Nuevo México NM",
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
      "dt_update": "2017-01-19T16:20:30.942Z",
      "dt_create": "2017-01-19T16:20:30.942Z",
      "__v": 0,
      "id": "5880e74ecfaedb517e22cb64"
    },
    {
      "_id": "5880e755506ad98d05a60dd3",
      "nombre": "OH",
      "codigo": "Ohio OH",
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
      "dt_update": "2017-01-19T16:20:37.904Z",
      "dt_create": "2017-01-19T16:20:37.904Z",
      "__v": 0,
      "id": "5880e755506ad98d05a60dd3"
    },
    {
      "_id": "5880e75c506ad98d05a60dd4",
      "nombre": "OK",
      "codigo": "Oklahoma OK",
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
      "dt_update": "2017-01-19T16:20:44.909Z",
      "dt_create": "2017-01-19T16:20:44.909Z",
      "__v": 0,
      "id": "5880e75c506ad98d05a60dd4"
    },
    {
      "_id": "5880e764506ad98d05a60dd5",
      "nombre": "OR",
      "codigo": "Oregón OR",
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
      "dt_update": "2017-01-19T16:20:52.307Z",
      "dt_create": "2017-01-19T16:20:52.307Z",
      "__v": 0,
      "id": "5880e764506ad98d05a60dd5"
    },
    {
      "_id": "5880e76c506ad98d05a60dd6",
      "nombre": "PA",
      "codigo": "Pensilvania PA",
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
      "dt_update": "2017-01-19T16:21:00.026Z",
      "dt_create": "2017-01-19T16:21:00.026Z",
      "__v": 0,
      "id": "5880e76c506ad98d05a60dd6"
    },
    {
      "_id": "5880e773cfaedb517e22cb65",
      "nombre": "RI",
      "codigo": "Rhode Island RI",
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
      "dt_update": "2017-01-19T16:21:07.149Z",
      "dt_create": "2017-01-19T16:21:07.149Z",
      "__v": 0,
      "id": "5880e773cfaedb517e22cb65"
    },
    {
      "_id": "5880e77acfaedb517e22cb66",
      "nombre": "TN",
      "codigo": "Tennessee TN",
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
      "dt_update": "2017-01-19T16:21:14.762Z",
      "dt_create": "2017-01-19T16:21:14.762Z",
      "__v": 0,
      "id": "5880e77acfaedb517e22cb66"
    },
    {
      "_id": "5880e789cfaedb517e22cb67",
      "nombre": "TX",
      "codigo": "Texas TX",
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
      "dt_update": "2017-01-19T16:21:29.048Z",
      "dt_create": "2017-01-19T16:21:29.048Z",
      "__v": 0,
      "id": "5880e789cfaedb517e22cb67"
    },
    {
      "_id": "5880e79c8d0b347e058a7082",
      "nombre": "UT",
      "codigo": "Utah UT",
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
      "dt_update": "2017-01-19T16:21:48.162Z",
      "dt_create": "2017-01-19T16:21:48.162Z",
      "__v": 0,
      "id": "5880e79c8d0b347e058a7082"
    },
    {
      "_id": "5880e7a58d0b347e058a7083",
      "nombre": "VT",
      "codigo": "Vermont VT",
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
      "dt_update": "2017-01-19T16:21:57.230Z",
      "dt_create": "2017-01-19T16:21:57.230Z",
      "__v": 0,
      "id": "5880e7a58d0b347e058a7083"
    },
    {
      "_id": "5880e7accfaedb517e22cb68",
      "nombre": "VA",
      "codigo": "Virginia VA",
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
      "dt_update": "2017-01-19T16:22:04.213Z",
      "dt_create": "2017-01-19T16:22:04.213Z",
      "__v": 0,
      "id": "5880e7accfaedb517e22cb68"
    },
    {
      "_id": "5880e7b306e9a48305c3a6db",
      "nombre": "WV",
      "codigo": "Virginia Occidental WV",
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
      "dt_update": "2017-01-19T16:22:11.333Z",
      "dt_create": "2017-01-19T16:22:11.333Z",
      "__v": 0,
      "id": "5880e7b306e9a48305c3a6db"
    },
    {
      "_id": "5880e7bc06e9a48305c3a6dc",
      "nombre": "WA",
      "codigo": "Washington WA",
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
      "dt_update": "2017-01-19T16:22:20.126Z",
      "dt_create": "2017-01-19T16:22:20.126Z",
      "__v": 0,
      "id": "5880e7bc06e9a48305c3a6dc"
    },
    {
      "_id": "5880e7c6506ad98d05a60dd7",
      "nombre": "WI",
      "codigo": "Wisconsin WI",
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
      "dt_update": "2017-01-19T16:22:30.066Z",
      "dt_create": "2017-01-19T16:22:30.066Z",
      "__v": 0,
      "id": "5880e7c6506ad98d05a60dd7"
    },
    {
      "_id": "5880e7d0506ad98d05a60dd8",
      "nombre": "WY",
      "codigo": "Wyoming WY",
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
      "dt_update": "2017-01-19T16:22:40.430Z",
      "dt_create": "2017-01-19T16:22:40.430Z",
      "__v": 0,
      "id": "5880e7d0506ad98d05a60dd8"
    },
    {
      "_id": "5880e7e006e9a48305c3a6dd",
      "nombre": "DC",
      "codigo": "Washington DC",
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
      "dt_update": "2017-01-19T16:22:56.478Z",
      "dt_create": "2017-01-19T16:22:56.478Z",
      "__v": 0,
      "id": "5880e7e006e9a48305c3a6dd"
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
    },
    {
      "_id": "5880eb788d0b347e058a708c",
      "titulo": "Nana",
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
      "dt_update": "2017-01-19T16:38:16.885Z",
      "dt_create": "2017-01-19T16:38:16.885Z",
      "__v": 0,
      "id": "5880eb788d0b347e058a708c"
    },
    {
      "_id": "5880eb88506ad98d05a60de6",
      "titulo": "Limpieza",
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
      "dt_update": "2017-01-19T16:38:32.234Z",
      "dt_create": "2017-01-19T16:38:32.234Z",
      "__v": 0,
      "id": "5880eb88506ad98d05a60de6"
    },
    {
      "_id": "5880eba6506ad98d05a60de7",
      "titulo": "Renta",
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
      "dt_update": "2017-01-19T16:39:02.698Z",
      "dt_create": "2017-01-19T16:39:02.698Z",
      "__v": 0,
      "id": "5880eba6506ad98d05a60de7"
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
      "_id": "586fd3a12db6c92956a22711",
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
      "id": "586fd3a12db6c92956a22711"
    },
    {
      "_id": "586fd3a12db6c92956a22712",
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
      "id": "586fd3a12db6c92956a22712"
    },
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
    },
    {
      "_id": "586fd3a12db6c92956a22714",
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
      "id": "586fd3a12db6c92956a22714"
    }
    ,
    {
      "_id": "586fd3a12db6c92956a22715",
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
      "id": "586fd3a12db6c92956a22715"
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
  DELETEESTADO (state) {
    state.search.selectedEstado = null
  },
  ACTUALIZATIPO (state, message) {
    state.search.selectedTipo = message
  },
  DELETETIPO (state) {
    state.search.selectedTipo = null
  },
  ACTUALIZACATEGORIA (state, message) {
    state.search.selectedCategoria = message
  },
  DELETECATEGORIA (state) {
    state.search.selectedCategoria = null
  },
  SETPARAMETROSBUSQUEDA (state, params) {
    state.search.searchParams = params
  },
  DELETEPARAMETROSBUSQUEDA (state) {
    state.search.searchParams = {}
    console.log('ya se vacio', state.search.searchParams)
  },
  FILLTIPOSJOBS (state, array) {
    console.log('el array', array)
    state.tipotrabajo = array
  }
}

const getters = {
  currentJob: state => {
    var url = state.route.params.id // return url
    return state.jobs.filter(job => job.id === url)
  },
  jobCat: (state, idCat) => {
    return state.categorias.filter(cat => cat.id === idCat)
  },

  currentUrl: state => state.route.params.producto
}

const actions = {
  clearSearch({commit}) {
    commit('DELETEPARAMETROSBUSQUEDA')
    commit('DELETEESTADO')
    commit('DELETETIPO')
    commit('DELETECATEGORIA')
  },
  fillTipos({commmit},) {
    commit('FILLTIPOSJOBS')
  },
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
