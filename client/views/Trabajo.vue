<template>
  <div class="page single-job">
    <!-- <div class="job-image-header a" :style="{backgroundImage: 'red', 'background-image': 'url(' + actual.imagen + ')'}" v-if="actual.imagen" :title="actual.imagen">
        &nbsp;
    </div> -->
    <div class="job-image-header" style="background-image: url('https://static.pexels.com/photos/289704/pexels-photo-289704.jpeg');" >
        &nbsp;
    </div>


    <div class="container" id="contenido-single" v-if="actual">
      <div class="row">
        <div class="col-md-10 offset-md-1">
          <div class="card" >
            <div class="card-block" >
              <div class="row">
                <div class="col-8">
                  <h1 class="display-4 margin-l-bottom">{{ actual.titulo }}</h1>
                  <dl class="row">
                    <dt class="col-xs-12 col-md-6 col-lg-4">Categoría del aviso</dt>
                    <!-- .rel_categoria -->
                    <dd class="col col-md-6 col-lg-8">
                      {{ getCurrentCat }}
                    </dd>
                    <dt class="col-xs-12 col-md-6 col-lg-4">Tipo de trabajo</dt>
                    <dd class="col col-md-6 col-lg-8">{{ getCurrentJobKind }}</dd>
                    <dt class="col-xs-12 col-md-6 col-lg-4">Nombre del anunciante</dt>
                    <dd class="col col-md-6 col-lg-8">{{ actual.anunciante }}</dd>

                    <dt class="col-xs-12 col-md-6 col-lg-4">Persona de contacto</dt>
                    <dd class="col col-md-6 col-lg-8">{{ actual.persona_contacto }}</dd>

                    <dt class="col-xs-12 col-md-6 col-lg-4">Estado</dt>
                    <dd class="col col-md-6 col-lg-8">{{ getCurrentEdo }}</dd>
                    <dt class="col-xs-12 col-md-6 col-lg-4">Ciudad</dt>
                    <dd class="col col-md-6 col-lg-8">{{ actual.ciudad }}</dd>
                    <dt class="col-xs-12 col-md-6 col-lg-4">Monto ofrecido (USD)</dt>
                    <dd class="col col-md-6 col-lg-8"> {{ actual.monto }}</dd>
                    <dt class="col-xs-12 col-md-6 col-lg-4">Tipo de pago</dt>
                    <dd class="col col-md-6 col-lg-8">{{ getCurrentPay }}</dd>
                  </dl>
                  <strong>Descripción</strong>
                  <p>
                    {{ actual.descripcion }}
                  </p>
                </div>
                <div class="col-4">
                  <router-link to="/" class="btn btn-secondary col margin-s-bottom">
                    Ver más trabajos

                  </router-link>
                  <div class="" >
                    <carga :imagen="actual.imagen">
                    </carga>
                  </div>
                  <div class="margin-s-top">
                    <b>Comparte este anuncio</b>
                  </div>

                  <div class="row text-center margin-s-top">
                    <social-sharing :url="getCurrentUrl" inline-template>
                      <div>
                        <network network="facebook" class="btn btn-secondary">
                          <i class="fa fa-facebook"></i>  
                        </network>
                        <network network="twitter" class="btn btn-secondary">
                          <i class="fa fa-twitter"></i>
                        </network>
                        <network network="googleplus" class="btn btn-secondary">  
                          <i class="fa fa-google-plus"></i>
                        </network>
                        <network network="pinterest" class="btn btn-secondary">
                          <i class="fa fa-pinterest"></i>
                        </network>
                      </div>
                    </social-sharing>
                  </div>
                  <button class="btn btn-primary col margin-s-top" @click="datosContacto = !datosContacto">
                    <span  v-if="datosContacto">
                      Ocultar contacto
                    </span>
                    <span v-else>
                      Ver contacto
                    </span>
                  </button>
                  <transition name="fade">
                    <div class="card margin-s-top" v-if="datosContacto">
                      <div class="card-block">
                        <dl v-if="actual.email">
                          <dt>Correo electrónico</dt>
                          <dd>{{ actual.email }}</dd>
                        </dl>
                        <dl v-if="actual.phone_number_string">
                          <dt>Teléfono</dt>
                          <dd>{{ actual.phone_number_string }}</dd>
                        </dl>
                      </div>

                    </div>
                  </transition>

                </div>
              </div>

            <div class="card-text" >

            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {IS_LOCAL, FULL_URL} from 'config/Ambientes.js'
// import socialSharing from 'vue-social-sharing'
import carga from 'components/carga'
export default {
	data() {
		return{
			contenido: 'Hello',
      post: [],
      datas: null,
      actual: null,
      datosContacto: false
		}
	},
  computed: {
    getCurrentUrl () {
      var urlShare = FULL_URL + '/#' + this.$store.state.route.path
      return urlShare
    },
    getCurrentCat () {
      return this.getCurrentItem('rel_categoria', 'categorias', 'titulo')
    },
    getCurrentJobKind () {
      return this.getCurrentItem ('rel_tipotrabajo','tipotrabajo','titulo')
    },
    getCurrentEdo () {
      return this.getCurrentItem ('rel_estado','estados','codigo')
    },
    getCurrentPay () {
      return this.getCurrentItem ('rel_tipopago','tipopago','titulo')
    },
    getImageUrl () {
      return actual.imagen
    }
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      if (IS_LOCAL) {
        this.post = this.$store.getters.currentJob
        this.current(this.post, this.actual)
      }
      else {
        this.getFromSt()
      }
    },
    getFromSt() {
      var self = this
      var url = self.$store.state.route.params.id


      Stamplay.Object('jobs').get({_id: url}).then(function(res) {

        if (self.actual === null) {

          var actualPost
          res.data.forEach(function (element) {
            actualPost = element
          })
          self.actual = actualPost
          // self.loading = false
          console.log('en actual ->', self.actual)

        }
      }, function(err) {
        self.error = err.toString()
      })

    },
    current (array, exit) {
      var actualPost
      this.post.forEach(function (element) {
        actualPost = element
      })
      this.actual = actualPost
    },
    getCurrentItem (rel, stateItem, key) { // Multiextractor de relaciones desde el store
      var itemLocal, itemsStore, nameItem

      if (this.actual[rel]) { // el item local tiene categoria, tipo de trabajo, etc

        this.actual[rel].forEach(function (element) { // each de si, si tiene cat, etc.
          itemLocal = element
        })
        itemsStore = this.$store.state[stateItem].filter(item => item.id === itemLocal)
        if (itemsStore) { // si hay objetos que machen en el store
          itemsStore.forEach(function (item) {
            nameItem = item[key]
          })
        } else {
          nameItem = 'No disponible'
        }
      } else { // si el item local no tiene cat, trabajo, etc
        nameItem = 'No disponible'
      }
      return nameItem
    }

  },
  components: {
    carga
  }
}
</script>
<style lang="scss">
.job-image-header {
  min-height: 300px;
}
#contenido-single {
  margin-top:-200px;
}

</style>
