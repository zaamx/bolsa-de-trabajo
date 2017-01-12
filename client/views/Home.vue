<template>
  <div class="page">
    <Search>
    </Search>
    <indexFeed :items="defaultJobs" v-if="defaultJobs">
    </indexFeed>
  </div>
</template>

<script>
import Search from 'components/Search'
import indexFeed from 'components/indexFeed'
export default {
	data() {
		return{
			contenido: 'Hello',
      loading: true,
      error: null,
      defaultJobs: null
		}
	},
  created ()  {
    this.getDefaultJobs()
    // this.getStamplay()
  },
  methods: {
    getDefaultJobs () {
      this.error = this.defaultJobs = null
      // this.loading = true

      // Cambiar para
      if (this.defaultJobs === null) {
        this.defaultJobs = this.$store.state.jobs
        this.loading = false
      }
    }
    ,
    getStamplay() {
      var self = this
      // console.log('stamplay ->', Stamplay)
      self.error = self.defaultJobs = null

      Stamplay.Object('jobs').get({}).then(function(res) {
        console.log('procesa')
        if (self.defaultJobs === null) {
          self.defaultJobs = res.data
          self.loading = false
        }
      }, function(err) {
        console.log('st error', err)
        self.error = err.toString()
      })
    }
  },
  components: {
    Search,
    indexFeed
  }
}
</script>
