<template>
  <div id="app">
    <nav class="navbar navbar-toggleable-md navbar-inverse bg-primary">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">HispanoClub Jobs</a>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-item nav-link" to="/" active-class="active">
            Home
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
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>
<style lang="scss">
@import '../stylesheets/mixins/_resetText.scss';
@import '../stylesheets/mixins/_spacing.scss';
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
