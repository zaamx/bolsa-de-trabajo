<template>
  <div class="page">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Publicar anuncio {{ contenido }}</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <PublicarForm class="padding-m margin-xl-top">
          </PublicarForm>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import PublicarForm from 'components/PublicarForm'
export default {
	data() {
		return{
			contenido: 'Hello'
		}
	},
  components: {
    PublicarForm
  }
}
</script>
