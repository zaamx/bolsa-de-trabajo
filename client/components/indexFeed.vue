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

        <div class="feed-jobs" v-if="categorias">
          <h1 v-for="categoria in this.categorias">
            {{ categoria.titulo }}
          </h1>
          <!-- <div class="card">
            <div class="card-image">
              <img src="http://placehold.it/400x400" alt="">
            </div>
            <h4>Titulo</h4>
            <p>Lorem ipsum dolor sit.</p>
          </div> -->
        </div>


      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
		return{
			loading: true,
      categorias: null,
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
    this.getPosts()
  },
  methods: {
    getPosts () {
      this.error = this.categorias = null
      // this.loading = true
      console.log(this.$http.options.root)
      // GET /someUrl
      this.$http.get('categoria').then((response) => {
        this.categorias = response.body.data
        this.loading = false
        console.log('la respuesta es -->', response)
        console.log('en categorias', this.categorias)
      }, (response) => {
        // error callback
        this.error = err.toString()
      });
    }
  }


}
</script>

<style lang="scss">

</style>
