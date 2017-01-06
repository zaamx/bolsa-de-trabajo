<template>
  <div class="page">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Publicaaar!!</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueForm from 'vue-form-2'

Vue.use(VueForm, {
  layout:'form-horizontal'
})

export default {
	data() {
		return{
			contenido: 'Hello'
		}
	},
  components: {
    // Search,
    // indexFeed
  }
}
</script>
