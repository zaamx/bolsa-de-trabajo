<template>
  <div class="page single-job">
    <div class="job-image-header" style="background-image: url('https://static.pexels.com/photos/289704/pexels-photo-289704.jpeg');">


    </div>

    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card" >
            <div class="card-block">
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
                <div class="col">
                  <img src="https://static.pexels.com/photos/289704/pexels-photo-289704.jpeg"  class="img-fluid" alt="">
                  <div class="margin-s-top">
                    <b>Comparte este anuncio</b>
                  </div>

                  <div class="row text-center margin-s-top">
                    <div class="col">
                      <a href="">
                        F
                      </a>
                    </div>
                    <div class="col">
                      <a href="">
                        F
                      </a>
                    </div>
                    <div class="col">
                      <a href="">
                        F
                      </a>
                    </div>
                    <div class="col">
                      <a href="">
                        F
                      </a>
                    </div>
                    <div class="col">
                      <a href="">
                        F
                      </a>
                    </div>
                  </div>
                  <router-link to="/" class="btn btn-outline-info col margin-s-top">
                    Regresar a la bolsa de trabajo
                  </router-link>
                  <div class="contact-data">
                    <dl>
                      <dt>Correo electrónico</dt>
                      <dd>usuario@usuario.com</dd>
                      <dt>Teléfono</dt>
                      <dd>{{ actual.area_code }} -  {{ actual.phone_number }}</dd>
                    </dl>
                  </div>
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
export default {
	data() {
		return{
			contenido: 'Hello',
      post: [],
      datas: null,
      actual: null
		}
	},
  computed: {
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
      this.post = this.$store.getters.currentJob
      this.current()
    },
    current () {
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
    // indexFeed
  }
}
</script>
<style lang="scss">
.job-image-header {
  min-height: 300px;
}
</style>
