<template>
  <div>
    <div class="upload-compita card card-outline-primary">
      <DropVue
        id="imagen"

        ref="imagen"
          :newUrl="urlSuccessPost"

        :useCustomDropzoneOptions="true"
        :dropzoneOptions="opcionesx"
        v-on:vdropzone-fileAdded="fileAddedImage"
        v-on:vdropzone-success="successImage"
        v-on:vdropzone-error="errorImage"
        v-on:vdropzone-removedFile="removedFileImage"
        v-on:vdropzone-sending="sendingImage"
        ></DropVue>
    </div>
    <hr>
    <button class="btn btn-outline-info" @click="sendImage">
      enviar img
    </button>
  </div>
</template>

<script>
import DropVue from 'components/DropVue'

export default {
  data () {
    return {
      test: 'lorem',
      urlSuccessPost: '587c5bae7e7ab52e565eca1a',
      opcionesx: {
        url: 'http://hispanojobs.stamplayapp.com/api/cobject/v1/jobs',
        init: function() {
          var vm = this
          this.on('processing', function(file) {
            console.log('test',vm)
            var url =  'http://hispanojobs.stamplayapp.com/api/cobject/v1/jobs/' + vm.urlSuccessPost;
            this.url = url
            console.log('la url de envio', this.url)
          });
        },
        method: "PUT",
        paramName: "imagen", // The name that will be used to transfer the file
        maxFilesize: 1,
        uploadMultiple: false,
        acceptedFiles: 'image/*',
        maxFiles: 1,
        // thumbnailWidth:300,
        addRemoveLinks:true,
        headers: {
          'Cache-Control': null,
          'X-Requested-With': null
        },
        autoProcessQueue: false,
        dictDefaultMessage: 'sube cosas rata'
      }
    }
  },
  computed : {
    cosas () {
      console.log('esto llego', this.urlSuccessPost)
      return  'http://hispanojobs.stamplayapp.com/api/cobject/v1/jobs/' + this.urlSuccessPost
    }
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
      this.$refs.imagen.processQueue()
      console.log('click en el boton')
    }
  },
  components: {
    DropVue
  }

}
</script>

<style lang="scss">
</style>
