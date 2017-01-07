<template>
  <div class="page">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
            <h1>single {{ contenido }}</h1>
            <div class="" v-for="item in post">
              {{ item.id }}
              {{ item.anunciante }}
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
      datas: null
		}
	},
  computed: {
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
      console.log('de este lado', this.post)
      // var current
      // this.post.forEach(function (element) {
      //   current = element.title
      // })
      // this.$store.commit('ACTUALIZATITULO', current)
    }
  },
  components: {
    // indexFeed
  }
}
</script>
