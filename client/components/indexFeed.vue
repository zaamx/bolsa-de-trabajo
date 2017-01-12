<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="is-loading" v-if="loading">
          cargando morro
        </div>
        <div class="is-error" v-if="error">
            {{ error }}
        </div>

        <div class="row" v-if="jobs">
          <div class="col-12 col-sm-6 col-md-4  col-lg-3" v-for="job in this.jobs">
            <div class="card margin-s-top">
              <router-link :to=" '/trabajos/' + job.id">
                <img class="card-img-top img-fluid"  src="http://placehold.it/400x400" alt="Card image cap">
              </router-link>

              <div class="card-block">
                <h4 class="card-title">{{ job.titulo }}</h4>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div class="card-footer">
                <router-link :to=" '/trabajos/' + job.id" class="btn btn-info">
                  Ver anuncio
                </router-link>
                <!-- <small class="text-muted">Last updated 3 mins ago</small> -->
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import stamplay from 'store/stamplay'
export default {
  data() {
		return{
			loading: true,
      jobs: null,
      error: null
		}
	},
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.getJobs()
    // this.getStamplay()
  },
  methods: {
    getJobs () {
      this.error = this.jobs = null
      // this.loading = true

      // Cambiar para
      if (this.jobs === null) {
        this.jobs = this.$store.state.jobs
        this.loading = false
      }

      // GET /someUrl
      // this.$http.get('jobs').then((response) => {
      //   this.jobs = response.body.data
      //   this.loading = false
      //   console.log('chambas', this.jobs)
      // }, (response) => {
      //   // error callback
      //   this.error = err.toString()
      // });

    }
  }

}
</script>

<style lang="scss">

</style>
