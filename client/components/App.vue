<template>
  <div id="app">
    <nav class="navbar navbar-toggleable-md navbar-light">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- <a class="navbar-brand" href="#">HispanoClub Jobs</a> -->
      <a class="navbar-brand" href="http://hispanoclub.com/" target="_blank">
        <img src="../assets/logo-sitio.png" alt="">
      </a>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-item nav-link" to="/" active-class="active">
            Buscar trabajos
          </router-link>
          <router-link class="nav-item nav-link" to="/trabajos" active-class="active">
            Ver todos los trabajos
          </router-link>
          <router-link class="nav-item nav-link" to="/publicar-anuncio" active-class="active">
            Publicar nuevo trabajo
          </router-link>
        </div>
      </div>
    </nav>
    <div class="loader" v-if="loading">Loading...</div>
    <div class="paginasApp" v-if="content">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
      error: null,
      content: false,
      controlLoad: true,
      cargaEdos: false,
      cargaCats: false,
      cargaPagos: false,
      cargaTipos: false
      // loadingComplete: false
    }
  },
  computed: {
    loadingComplete () {
      if ( this.controlLoad === this.cargaEdos &&
           this.controlLoad === this.cargaCats &&
           this.controlLoad === this.cargaPagos &&
           this.controlLoad === this.cargaTipos
         ) {
        return true
      }
    }
  },
  watch: {
    loadingComplete: 'removeLoading'
  },
  created () {
    this.loadEdos()
    this.loadCats()
    this.loadPagos()
    this.loadTipos()
  },
  methods: {
    loadEdos () {
      setTimeout(() => {
        this.cargaEdos = true
        console.log('edos', this.cargaEdos)
      }, 200)
    },
    loadCats () {
      setTimeout(() => {
        this.cargaCats = true
      }, 400)

    },
    loadPagos () {
      setTimeout(() => {
        this.cargaPagos = true
      }, 600)
    },
    loadTipos () {
      setTimeout(() => {
        this.cargaTipos = true
        console.log('tipos', this.cargaTipos)
      }, 4000)

      // var self = this
      // Stamplay.Object('tipo_trabajo').get({
      //   per_page : 30
      // }).then(function(res) {
      //
      //   this.$store.dispatch('clearSearch')
      //
      //   if (self.defaultJobs === null) {
      //     self.defaultJobs = res.data
      //     self.loading = false
      //   }
      // }, function(err) {
      //   console.log('st error', err)
      //   self.error = err.toString()
      // })
    },
    removeLoading () {
      this.loading = false
      this.content = true
    }

  }
}
</script>
<style lang="scss">
@import '../stylesheets/mixins/_resetText.scss';
@import '../stylesheets/mixins/_spacing.scss';
.text-uppercase {
  text-transform: uppercase;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
.navbar {
  /* Rectangle 5: */
  box-shadow: 0px 3px 4px 0px rgba(0,0,0,0.19);
  z-index: 1;
}
.btn {
  border-radius: 20px;
  text-transform: uppercase;
}

.loader,
.loader:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}
.loader {
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(0,128,255, 0.2);
  border-right: 1.1em solid rgba(0,128,255, 0.2);
  border-bottom: 1.1em solid rgba(0,128,255, 0.2);
  border-left: 1.1em solid #0080ff;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

</style>
