<template>
  <div class="form---">
    <div class="card">
      <div class="card-block">
        <form class="" @submit.prevent="validateForm">

          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6">
                <div :class="{'form-group': true, 'has-danger': errors.has('nuevoanuncio.rel_categoria')}" >
                  <label class="form-control-label"  for="nuevoanuncio.rel_categoria">Categoría del aviso</label>
                  <select class="form-control" name="nuevoanuncio.rel_categoria" v-model="nuevoanuncio.rel_categoria"  v-validate data-vv-rules="required" data-vv-as="Categoria">
                    <option disabled> -- select an option -- </option>
                    <option :value=" categoria._id "  v-for="categoria in this.catList">
                      {{ categoria.titulo }}
                    </option>
                  </select>
                  <span v-show="errors.has('nuevoanuncio.rel_categoria')" >
                    <span v-for="error in errors.collect('nuevoanuncio.rel_categoria')" class="form-control-feedback">
                      {{ error }}
                    </span>
                  </span>
                </div>



              </div>

              <div class="col-md-6">
                <div :class="{'form-group': true, 'has-danger': errors.has('nuevoanuncio.rel_tipotrabajo')}" >
                  <label class="form-control-label"  for="nuevoanuncio.rel_tipotrabajo">Tipo del aviso</label>
                  <select class="form-control" name="nuevoanuncio.rel_tipotrabajo" v-model="nuevoanuncio.rel_tipotrabajo"  v-validate data-vv-rules="required" data-vv-as="Tipo de trabajo">
                    <option disabled> -- select an option -- </option>
                    <option :value=" job._id "  v-for="job in this.jobsList">
                      {{ job.titulo }}
                    </option>
                  </select>
                  <span v-show="errors.has('nuevoanuncio.rel_tipotrabajo')" >
                    <span v-for="error in errors.collect('nuevoanuncio.rel_tipotrabajo')" class="form-control-feedback">
                      {{ error }}
                    </span>
                  </span>
                </div>

              </div>
            </div>

            <div :class="{'form-group': true, 'has-danger': errors.has('nuevoanuncio.titulo')}" >
              <label class="form-control-label"  for="nuevoanuncio.titulo">Titulo del anuncio</label>
              <input type="text" class="form-control" placeholder="Ej. Solicito jardinero" v-model="nuevoanuncio.titulo" name="nuevoanuncio.titulo"  v-validate data-vv-rules="required" data-vv-as="Titulo">
              <span v-show="errors.has('nuevoanuncio.titulo')" >
                <span v-for="error in errors.collect('nuevoanuncio.titulo')" class="form-control-feedback">
                  {{ error }}
                </span>
              </span>
            </div>

            <div class="clearfix"></div>

            <div :class="{'form-group': true, 'has-danger': errors.has('nuevoanuncio.anunciante')}" >
              <label class="form-control-label"  for="nuevoanuncio.anunciante">Nombre del anunciante</label>
              <input type="text" class="form-control" placeholder="Ej. Solicito jardinero" v-model="nuevoanuncio.anunciante" name="nuevoanuncio.anunciante"  v-validate data-vv-rules="required" data-vv-as="Nombre">
              <span v-show="errors.has('nuevoanuncio.anunciante')" >
                <span v-for="error in errors.collect('nuevoanuncio.anunciante')" class="form-control-feedback">
                  {{ error }}
                </span>
              </span>
            </div>

            <div :class="{'form-group': true, 'has-danger': errors.has('nuevoanuncio.email')}" >
              <label class="form-control-label"  for="nuevoanuncio.email">Correo electrónico</label>
              <input type="email" class="form-control" placeholder="5555 5555" v-model="nuevoanuncio.email" name="nuevoanuncio.email"  v-validate data-vv-rules="required|email" data-vv-as="Correo electrónico">
              <span v-show="errors.has('nuevoanuncio.email')" >
                <span v-for="error in errors.collect('nuevoanuncio.email')" class="form-control-feedback">
                  {{ error }}
                </span>
              </span>
            </div>

            <div class="row">
              <div class="col-md-4">

                <div :class="{'form-group': true, 'has-danger': errors.has('nuevoanuncio.area_code')}" >
                  <label class="form-control-label"  for="nuevoanuncio.area_code">Area code</label>
                  <input type="number" class="form-control" placeholder="Ej. Juan Perez" v-model="nuevoanuncio.area_code" name="nuevoanuncio.area_code"  v-validate data-vv-rules="required|numeric" data-vv-as="Area Code">
                  <span v-show="errors.has('nuevoanuncio.area_code')" >
                    <span v-for="error in errors.collect('nuevoanuncio.area_code')" class="form-control-feedback">
                      {{ error }}
                    </span>
                  </span>
                </div>

              </div>
              <div class="col-md-8">

                <div :class="{'form-group': true, 'has-danger': errors.has('nuevoanuncio.phone_number')}" >
                  <label class="form-control-label"  for="nuevoanuncio.phone_number">Teléfono</label>
                  <input type="number" class="form-control" placeholder="5555 5555" v-model="nuevoanuncio.phone_number" name="nuevoanuncio.phone_number"  v-validate data-vv-rules="required|numeric" data-vv-as="Telefóno">
                  <span v-show="errors.has('nuevoanuncio.phone_number')" >
                    <span v-for="error in errors.collect('nuevoanuncio.phone_number')" class="form-control-feedback">
                      {{ error }}
                    </span>
                  </span>
                </div>

              </div>
            </div>
            <div class="row">
              <div class="col-md-6">

                <div :class="{'form-group': true, 'has-danger': errors.has('nuevoanuncio.rel_estado')}" >
                  <label class="form-control-label"  for="nuevoanuncio.rel_estado">Estado</label>
                  <select class="form-control" name="nuevoanuncio.rel_estado" v-model="nuevoanuncio.rel_estado"  v-validate data-vv-rules="required" data-vv-as="Estado">
                    <option disabled> -- select an option -- </option>
                    <option :value=" state._id "  v-for="state in this.estList">
                      {{ state.codigo }} -  {{ state.nombre }}
                    </option>
                  </select>
                  <span v-show="errors.has('nuevoanuncio.rel_estado')" >
                    <span v-for="error in errors.collect('nuevoanuncio.rel_estado')" class="form-control-feedback">
                      {{ error }}
                    </span>
                  </span>
                </div>

              </div>
              <div class="col-md-6">

                <div :class="{'form-group': true, 'has-danger': errors.has('nuevoanuncio.ciudad')}" >
                  <label class="form-control-label"  for="nuevoanuncio.ciudad">Ciudad</label>
                  <input type="text" class="form-control" placeholder="Ej. Houston" v-model="nuevoanuncio.ciudad" name="nuevoanuncio.ciudad"  v-validate data-vv-rules="required" data-vv-as="Ciudad">
                  <span v-show="errors.has('nuevoanuncio.ciudad')" >
                    <span v-for="error in errors.collect('nuevoanuncio.ciudad')" class="form-control-feedback">
                      {{ error }}
                    </span>
                  </span>
                </div>

              </div>
            </div>
            <div class="row">
              <div class="col-md-6">

                <div :class="{'form-group': true, 'has-danger': errors.has('nuevoanuncio.monto')}" >
                  <label class="form-control-label"  for="">Monto ofrecido USD</label>
                  <input type="number" class="form-control" placeholder="Ej. Houston" v-model="nuevoanuncio.monto" name="nuevoanuncio.monto"  v-validate data-vv-rules="required|numeric" data-vv-as="Monto">
                  <span v-show="errors.has('nuevoanuncio.monto')" >
                    <span v-for="error in errors.collect('nuevoanuncio.monto')" class="form-control-feedback">
                      {{ error }}
                    </span>
                  </span>
                </div>

              </div>
              <div class="col-md-6">

                <div :class="{'form-group': true, 'has-danger': errors.has('nuevoanuncio.rel_tipopago')}" >
                  <label class="form-control-label"  for="nuevoanuncio.rel_tipopago">Tipo de Pago</label>
                  <select class="form-control" name="nuevoanuncio.rel_tipopago" v-model="nuevoanuncio.rel_tipopago"  v-validate data-vv-rules="required" data-vv-as="Tipo de pago">
                    <option disabled> -- select an option -- </option>
                    <option :value=" payform._id "  v-for="payform in this.payList">
                      {{ payform.titulo }}
                    </option>
                  </select>
                  <span v-show="errors.has('nuevoanuncio.rel_tipopago')" >
                    <span v-for="error in errors.collect('nuevoanuncio.rel_tipopago')" class="form-control-feedback">
                      {{ error }}
                    </span>
                  </span>
                </div>

              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div :class="{'form-group': true, 'has-danger': errors.has('nuevoanuncio.descripcion')}" >
                  <label class="form-control-label"  for="nuevoanuncio.descripcion">Descripción</label>
                  <textarea name="nuevoanuncio.descripcion" rows="8" cols="80" placeholder="Descripcion del puesto" class="form-control" v-model="nuevoanuncio.descripcion"  v-validate data-vv-rules="required" data-vv-as="Descripción">
                  </textarea>
                    <span v-show="errors.has('nuevoanuncio.descripcion')" >
                      <span v-for="error in errors.collect('nuevoanuncio.descripcion')" class="form-control-feedback">
                        {{ error }}
                      </span>
                    </span>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <label class="form-control-label"  for="">Imagen</label>
                <div class="upload-compita card card-outline-primary margin-xl-bottom">
                  :newUrl="urlSuccessPost"
                  :url="urlSuccessPost"
                  <DropVue
                    id="imagen"

                    ref="imagen"


                    :useCustomDropzoneOptions="true"
                    :dropzoneOptions="opcionesx"
                    v-on:vdropzone-fileAdded="fileAddedImage"
                    v-on:vdropzone-success="successImage"
                    v-on:vdropzone-error="errorImage"
                    v-on:vdropzone-removedFile="removedFileImage"
                    v-on:vdropzone-sending="sendingImage"
                    ></DropVue>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div :class="{'form-group': true, 'has-danger': errors.has('terminos')}" >
                  <div class="checkbox">
                    <label>
                      <input type="checkbox" name="terminos" v-model="terminos"  v-validate data-vv-rules="required" data-vv-as="Terminos y condiciones">
                      Acepto los <a href="">Términos y condiciones</a> y <a href="">Política de privacidad</a>
                    </label>
                  </div>
                  <span v-show="errors.has('terminos')" >
                    <span v-for="error in errors.collect('terminos')" class="form-control-feedback">
                      {{ error }}
                    </span>
                  </span>

                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12 text-right" >
                <button type="button" name="button" class="btn btn-link">
                  Cancelar
                </button>
                <button type="submit"   name="button" class="btn btn-outline-info" >
                  Publicar anuncio
                </button>
              </div>
            </div>

          </div>
        </form>


      </div>
    </div>
  </div>
</template>

<script>
import DropVue from 'components/DropVue'

export default {
  data() {
		return {
      catList: null,
      jobsList: null,
      estList: null,
      payList: null,
      nuevoanuncio: {
        anunciante: '',
        area_code: '',
        descripcion: '',
        monto: '',
        phone_number: '',
        rel_categoria: [],
        rel_estado: [],
        rel_tipotrabajo: [],
        rel_tipopago: [],
        titulo: '',
        email: '',
        ciudad: '',
        imagen: ''
      },
      terminos: '',
      urlSuccessPost: '',
      opcionesx: {
        // init: function() {
        //   var vm = this
        //   this.on('processing', function(file) {
        //     console.log('esto llego', vm.urlSuccessPost)
        //     var url =  'http://hispanojobs.stamplayapp.com/api/cobject/v1/jobs/' + vm.urlSuccessPost;
        //     console.log('opciones del drop', this)
        //     this.url = url
        //     console.log('la url de envio', this.url)
        //   });
        // },
        method: "PUT",
        url: function () {
          return  'http://hispanojobs.stamplayapp.com/api/cobject/v1/jobs/' + this.urlSuccessPost
        },
        // url: 'http://hispanojobs.stamplayapp.com/api/cobject/v1/jobs',
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
  computed: {

  },
  mounted () {

  },
  watch: {
    // 'nuevoanuncio.rel_categoria': 'viewFormObject'
  },
  created () {
    this.getCategorias()
    this.getTipoTrabajo()
    this.getEstados()
    this.getPayForm()
  },
  methods: {
    viewFormObject () {
      console.log('pelame')
      console.log('el form -->', this.nuevoanuncio.rel_categoria)
    },
    resetForm () {

    },
    validateForm () {
      console.log('tratando de escapar eh')
      // Validate All returns a promise and provides the validation result.
      this.$validator.validateAll().then(success => {
        if (! success) {
          // handle error
          return;
        }
        this.publishForm()
      });
    },
    getCategorias () {
      // Cambiar para
      if (this.catList === null) {
        this.catList = this.$store.state.categorias
      }
    },
    getTipoTrabajo () {
      // Cambiar para
      if (this.jobsList === null) {
        this.jobsList = this.$store.state.tipotrabajo
      }
    },
    getEstados () {
      // Cambiar para
      if (this.estList === null) {
        this.estList = this.$store.state.estados
      }
    },
    getPayForm () {
      // Cambiar para
      if (this.payList === null) {
        this.payList = this.$store.state.tipopago
      }
    },
    publishForm () {
      // var query = JSON.stringify(this.nuevoanuncio)
      var self = this
      var query = self.nuevoanuncio

      Stamplay.Object('jobs').save(query).then(function(res) {

        // console.log('se publico ->', res)
        self.urlSuccessPost = res._id
        console.log('el id de success' , self.urlSuccessPost)
        setTimeout(() => {
          self.sendImage()
        }, 200)

      }, function(err) {
        console.log('st error ->', err)

      })




    },
    // Metodos para subir la imagen
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
      console.log('se va en el succes', this.urlSuccessPost)
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
.form-group__message {
  display: none;
}
.form-group--error {
  & +  .form-group__message {
    display: block;
    color: red;
  }
}
.form-group {
  .form-control-feedback {
    display: none;
  }
  &.has-danger {
    .form-control-feedback {
      display: inline;
    }
  }
}
</style>
