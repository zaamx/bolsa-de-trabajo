<template>
  <div class="page publicar-publico">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="h2 text-center margin-xl-top text-white">Rellena este breve formulario para publicar tu oferta de servicios</h1>
          <PublicarFormPublicNew class="padding-m margin-xl-top">
          </PublicarFormPublicNew>
          <!-- <h1 class="h2 text-center margin-xl-top text-white">Contesta las siguientes preguntas para anunciarte </h1>
          <p class="lead text-white text-center">
            Anuncia tus servicios, profesión u oferta para conseguir más trabajo. 
          </p> -->
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import PublicarFormPublicNew from 'components/PublicarFormPublicNew'
export default {
	data() {
		return{
			contenido: 'Hello'
		}
	},
  components: {
    PublicarFormPublicNew
  }
}
</script>
<style lang="scss">
.publicar-publico  {
  background-color:#222228;
 //  background-image:url(../assets/bg-jobs.png);
  margin-bottom: 0;
  padding-bottom: 150px;
}
</style>
