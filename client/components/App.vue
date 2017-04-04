<template>
  <div id="app">
    <header>
      <b-navbar toggleable >

    <b-nav-toggle target="nav_collapse"></b-nav-toggle>
    <a class="navbar-brand" href="http://hispanoclub.com/" target="_blank">
      <img src="../assets/logo-sitio.png" alt="">
    </a>

    <b-collapse is-nav id="nav_collapse">
      
      <b-nav is-nav-bar>
        <b-nav-item to="/">Buscar trabajos</b-nav-item>
        <b-nav-item to="/trabajos">Ver todos los trabajos</b-nav-item>
        
      </b-nav>
      
      <b-nav is-nav-bar class="ml-auto">
        
        <!-- Navbar dropdowns -->
        <router-link class="nav-item btn btn-outline-primary" to="/publicar-anuncio" active-class="active">
          Empresa / Publicar empleos
        </router-link>

        <!-- <b-nav-item to="/publicar-anuncio">Publicar trabajo</b-nav-item> -->
        
        <!-- <b-nav-item-dropdown right-alignment>
          <template slot="text">
            <span style="font-weight: bold;">
              <i class="fa fa-th" aria-hidden="true"></i>
            </span>
          </template>
          <b-nav-item>Grupo Hispano Club:</b-nav-item>
          <b-nav-item>Membresía</b-nav-item>
          <b-nav-item>Bolsa de trabajo</b-nav-item>
          <b-nav-item>Noticias</b-nav-item>
        </b-nav-item-dropdown> -->
       
      </b-nav>
    </b-collapse>
  </b-navbar>
    </header>
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
      }, 400)

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
body {
  background:#fbfbfb !important;
  // padding-bottom:100px;
}

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
.page {
  padding-bottom:100px;
}
.dropdown {
  a {
    font-size:0.8rem;
  }
}
.navbar-brand {
  img {
    height:50px;
    width:auto;
  }
}
.dropzone {
  border: 2px dotted rgba(0, 0, 0, 0.3) !important;
  background:#fbfbfb !important;
}
.only-print {
  display:none;
}
</style>
