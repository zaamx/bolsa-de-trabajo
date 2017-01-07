<template>
  <div class="page">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <indexFeed>
          </indexFeed>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import indexFeed from 'components/indexFeed'

export default {
	data() {
		return{
			contenido: 'Hello'
		}
	},
  components: {
    indexFeed
  }
}
</script>
