<template>
  <div class="page">
    <div class="container">
      <div class="row">
        <div class="col-md-10 offset-md-1">
          <h1 class="display-4 text-center">Subir anuncio</h1>
          <uploadFile class="padding-m margin-xl-top">
          </uploadFile>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import uploadFile from 'components/uploadFile'
export default {
	data() {
		return{
			contenido: 'Hello'
		}
	},
  components: {
    uploadFile
  }
}
</script>
