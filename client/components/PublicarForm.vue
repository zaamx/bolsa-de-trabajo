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
              <input type="text" class="form-control" placeholder="Tu nombre" v-model="nuevoanuncio.anunciante" name="nuevoanuncio.anunciante"  v-validate data-vv-rules="required" data-vv-as="Nombre">
              <span v-show="errors.has('nuevoanuncio.anunciante')" >
                <span v-for="error in errors.collect('nuevoanuncio.anunciante')" class="form-control-feedback">
                  {{ error }}
                </span>
              </span>
            </div>

            <div :class="{'form-group': true, 'has-danger': errors.has('nuevoanuncio.email')}" >
              <label class="form-control-label"  for="nuevoanuncio.email">Correo electrónico</label>
              <input type="email" class="form-control" placeholder="tumail@dominio.com" v-model="nuevoanuncio.email" name="nuevoanuncio.email"  v-validate data-vv-rules="required|email" data-vv-as="Correo electrónico">
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
                  <input type="number" class="form-control" placeholder="555" v-model="nuevoanuncio.area_code" name="nuevoanuncio.area_code"  v-validate data-vv-rules="required|numeric" data-vv-as="Area Code">
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
                  <input type="number" class="form-control" placeholder="1999" v-model="nuevoanuncio.monto" name="nuevoanuncio.monto"  v-validate data-vv-rules="required|numeric" data-vv-as="Monto">
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
                <div class="upload-compita  margin-xl-bottom">
                  <form class="dropzone" id="uploaders">

                  <div id="dropzone-message" style="display: none">
                    <span class="dropzone-title">Drop files here or click to select</span>
                    <span class="dropzone-info">You can upload multiple files at once</span>
                  </div>
                </form>
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
                <router-link to="/" class="btn btn-link">
                  Cancelar
                </router-link>

                <button type="submit"  name="sendForm" id="sendForm" class="btn btn-outline-info" v-bind:disabled="disabledButton">
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
import Dropzone from 'dropzone'
Dropzone.autoDiscover = false

export default {
  data() {
		return {
      error : null,
      loading: null,
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
      disabledButton: false
		}
	},
  computed: {

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
      dictDefaultMessage: '<p class="muted">Haz click para subir tus imagenes o arrastralos a esta zona, solo puedes subir una imagen de hasta 2 MB cada una<p>',
      autoProcessQueue: false
    }
    // Instantiate Dropzone
    this.dropzone = new Dropzone('#uploaders', options)
    // url cambia por el id de la nueva publicación
    vm.dropzone.on('processing', (file) => {
      vm.dropzone.options.url = 'http://hispanojobs.stamplayapp.com/api/cobject/v1/jobs/' + vm.urlSuccessPost
    })
    vm.dropzone.on('success', function (file, response) {
      vm.$router.push({ path: '/trabajos/'+ vm.urlSuccessPost })
    })
  },
  watch: {

  },
  created () {
    this.getCategorias()
    this.getTipoTrabajo()
    this.getEstados()
    this.getPayForm()
  },
  methods: {
    resetForm () {

    },
    validateForm () {

      // Validate All returns a promise and provides the validation result.
      this.$validator.validateAll().then(success => {
        if (! success) {
          // handle error
          return;
        }
        else {
          this.disabledButton = true;
          this.publishForm()
        }
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
      var self = this
      var query = self.nuevoanuncio
      Stamplay.Object('jobs').save(query).then(function(res) {
        // console.log('se publico ->', res)
        self.urlSuccessPost = res._id


        // validar si el dropzone tiene algo en espera,
        // si tiene algo, se processa.
        // Si no tiene nada se redirecciona

        var popo = self.dropzone.getQueuedFiles().length

        console.log('la ->', popo)
        
        if(self.dropzone.getQueuedFiles().length > 0){
            setTimeout(() => {
                self.sendImage()
            }, 200)
        } else {
          self.$router.push({ path: '/trabajos/'+ self.urlSuccessPost })
        }
            

      }, function(err) {
        self.disabledButton = true;
        // console.log('st error ->', err)
      })
    },
    sendImage() {
      this.dropzone.processQueue()
    }
  },
  components: {

  }
}
</script>

<style >
@import '../../node_modules/dropzone/dist/dropzone.css';
</style>
