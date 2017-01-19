<template>
  <div class="container" id="feedResults">
    <div class="row">
      <div class="col-md-12">
        <!-- <div class="is-loading" v-if="loading">
          cargando morro
        </div>
        <div class="is-error" v-if="error">
            {{ error }}
        </div> -->

        <div class="row" v-if="this.items">
          <div class="col-12 col-sm-6 col-md-4  col-lg-3" v-for="job in this.items">
            <div class="card margin-s-top">
              <router-link :to=" '/trabajos/' + job.id">
                <img  :src="job.imagen" class="img-fluid img-thumbnail" alt="" v-if="job.imagen">
                <img src="http://placehold.it/400x400" alt="" class="card-img-top img-fluid" v-else>
              </router-link>

              <div class="card-block">
                <h4 class="card-title">{{ job.titulo }}</h4>
                <!-- <p class="card-text">{{ job.descripcion }}</p> -->
                <router-link :to=" '/trabajos/' + job.id" class="btn btn-outline-info">
                  Ver anuncio
                </router-link>
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
  props: {
    items: null
    // isLoading: true
  },
  data() {
		return{
			loading: true,
      jobs: null,
      error: null
		}
	},
  computed: {
  },
  created () {
  },
  methods: {
  }

}
</script>

<style lang="scss">
#feedResults {
  .card {
    min-height: 90%;
  }
}
</style>
