<template>
  <div class="page">
    <div class="container">
      <div class="row">
        <div class="col-md-10 offset-md-1">
          <h1 class="display-4 text-center">Publicar anuncio</h1>
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
