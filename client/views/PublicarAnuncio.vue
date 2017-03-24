<template>
  <div class="page publicar-empresa">
    <div class="container">
      <div class="row">
        <div class="col-md-10 offset-md-1">
          <h1 class="h2 text-center margin-xl-top text-white">Si eres empresa publica aquí tus ofertas de empleo</h1>
          <!-- <p class="lead">
            Publica tus ofertas de empleo aquí  
          </p> -->
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
<style lang="scss">
.publicar-empresa  {
  background:#222228;
}
</style>
