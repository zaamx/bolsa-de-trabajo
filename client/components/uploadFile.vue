<template>
  <div>
    <div class="upload-compita card card-outline-primary">
      <form class="dropzone">

      <div id="dropzone-message" style="display: none">
        <span class="dropzone-title">Drop files here or click to select</span>
        <span class="dropzone-info">You can upload multiple files at once</span>
      </div>
    </form>
    </div>
    <hr>
    <button class="btn btn-outline-info" @click="sendImage">
      enviar img
    </button>
  </div>
</template>

<script>
// import DropVue from 'components/DropVue'
import Dropzone from 'dropzone'
Dropzone.autoDiscover = false

export default {
  data () {
    return {
      id: 'lorem',
      urlSuccessPost: '587c6bf3d8aa408b1480bdbf'
    }
  },
  mounted () {
    const vm = this
    let options = {
      url: '/',
      method: 'patch',
      paramName: "imagen",
      parallelUploads: 1,
      uploadMultiple: false,
      headers: {
        'Cache-Control': null,
        'X-Requested-With': null
      },
      dictDefaultMessage: 'sube cosas rata',
      autoProcessQueue: false
    }
    // Instantiate Dropzone
    this.dropzone = new Dropzone(this.$el, options)
    // Set signed upload URL for each file
    vm.dropzone.on('processing', (file) => {
      vm.dropzone.options.url = 'http://hispanojobs.stamplayapp.com/api/cobject/v1/jobs/' + vm.urlSuccessPost
    })
  },
  computed : {
  },
  methods: {
    showSuccess (file, response) {

    },
    fileAddedImage (file) {
      console.log('agregado', file)
    },
    successImage (file, response) {
      console.log('que se envio', file)
      console.log('respuesta', response)
    },
    errorImage (file) {
      console.log(file)
    },
    removedFileImage (file, error, xhr) {
      console.log('remover ',file)
    },
    sendingImage (file, xhr, formData) {
      console.log('xhr -->', xhr)
      console.log('data enviando -->', formData)
    },
    sendImage() {

      this.dropzone.processQueue()
      console.log('click en el boton')
    }
  },
  components: {

  }

}
</script>

<style lang="scss">
@import '../../node_modules/dropzone/dist/dropzone.css';
</style>
