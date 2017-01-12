<template>
  <div class="page">
    <div class="container margin-l-top">
      <div class="row">
        <div class="col-md-12">
          <h1 class="display-4">Buscando</h1>
          <SearchForm>
          </SearchForm>
          <hr>
          <indexFeed :items="searchResults" v-if="searchResults">
          </indexFeed>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import indexFeed from 'components/indexFeed'
import SearchForm from 'components/SearchForm'

export default {
	data() {
		return{
			contenido: 'Hello',
      loading: true,
      error: null,
      searchResults: null
		}
	},
  computed: {
    searchLocalParams () {
      return this.$store.state.search.searchParams
    }
  },
  created () {
    this.getFromService()
  },
  watch : {

  },
  methods: {
    getFromService () {
      this.error = this.searchResults = null

      // GET /someUrl
      this.$http.get('jobs',{ params: {where: this.searchLocalParams}}).then((response) => {

        if (this.searchResults === null) {
          this.searchResults = response.body.data;
          this.loading = false
        }
      }, (err) => {
        // error callback
        console.log('el error -->', err.toString())
        this.error = err.toString()
      });
    },
    clean () {
      this.$store.dispatch('clearSearch')
      this.searchResults = null
    }

  },
  beforeDestroy () {
    this.clean()
  },
  components: {
    indexFeed,
    SearchForm
  }
}
</script>
