<template>
  <div class="page publicar-publico">
    

    <div class="container">
      <div class="row">
        <div class="col">
          <PublicarFormPublic >
          </PublicarFormPublic>
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

import PublicarFormPublic from 'components/PublicarFormPublic'
export default {
	data() {
		return{
			contenido: 'Hello'
		}
	},
  components: {
    PublicarFormPublic
  }
}
</script>
<style lang="scss">
.publicar-publico  {
  background-color:blue;
  background-image:url(../assets/bg-jobs.png);
  margin-bottom: 0;
  padding-bottom: 0;
}
</style>
