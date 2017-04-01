<template>
  <div class="form---pub">
    <div class="card">
      <div class="card-block">
        <form class="" @submit.prevent="validateForm">

          <div class="container-fluid">
            <div class="row">
              <div class="col-12 text-right">
                  <a href="" class="btn btn-sm btn-info" @click.prevent="assitantStart()">
                    Si necesitas ayuda haz click aquí <i class="fa fa-question-circle" aria-hidden="true"></i>
                  </a>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6"  data-step="1" data-intro="Selecciona una opción por ejemplo: Jardinero">
                <div :class="{'form-group': true, 'has-danger': errors.has('nuevoanuncio.rel_tipotrabajo')}">
                  <label class="form-control-label"  for="nuevoanuncio.rel_tipotrabajo">Categoría del trabajo</label>
                  <select class="form-control" name="nuevoanuncio.rel_tipotrabajo" v-model="nuevoanuncio.rel_tipotrabajo"  v-validate data-vv-rules="required" data-vv-as="Tipo de trabajo">
                    <option disabled > -- Selecciona una opción -- </option>
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

              <div class="col-md-6" data-step="2" data-intro="Ponle nombre a tu oferta, por ejemplo: Ofrezco servicios de jardinería / Solicito jardinero ">
                <div :class="{'form-group': true, 'has-danger': errors.has('nuevoanuncio.titulo')}" >
                    <label class="form-control-label"  for="nuevoanuncio.titulo">Título del anuncio</label>
                    <input type="text" class="form-control" v-model="nuevoanuncio.titulo" name="nuevoanuncio.titulo"  v-validate data-vv-rules="required" data-vv-as="Titulo">
                    <span v-show="errors.has('nuevoanuncio.titulo')" >
                      <span v-for="error in errors.collect('nuevoanuncio.titulo')" class="form-control-feedback">
                        {{ error }}
                      </span>
                    </span>
                  </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6" data-step="3" data-intro="Las personas necesitarán saber el nombre de tu empresa, por ejemplo: Mecanica Nacional, Despacho Ruiz ">
                <div :class="{'form-group': true, 'has-danger': errors.has('nuevoanuncio.anunciante')}"  >
                  <label class="form-control-label"  for="nuevoanuncio.anunciante">Nombre de la empresa</label>
                  <input type="text" class="form-control" v-model="nuevoanuncio.anunciante" name="nuevoanuncio.anunciante"  v-validate data-vv-rules="required" data-vv-as="Nombre">
                  <span v-show="errors.has('nuevoanuncio.anunciante')" >
                    <span v-for="error in errors.collect('nuevoanuncio.anunciante')" class="form-control-feedback">
                      {{ error }}
                    </span>
                  </span>
                </div>
              </div>

              <div class="col-md-6" data-step="4" data-intro="Las personas necesitarán contactar con alguien de tu empresa, por ejemplo: Recursos Humanos, Juan Perez">
                <div :class="{'form-group': true, 'has-danger': errors.has('nuevoanuncio.persona_contacto')}"  >
                  <label class="form-control-label"  for="nuevoanuncio.persona_contacto">Persona de contacto</label>
                  <input type="text" class="form-control" v-model="nuevoanuncio.persona_contacto" name="nuevoanuncio.persona_contacto"  v-validate data-vv-rules="" data-vv-as="Nombre">
                  <span v-show="errors.has('nuevoanuncio.persona_contacto')" >
                    <span v-for="error in errors.collect('nuevoanuncio.persona_contacto')" class="form-control-feedback">
                      {{ error }}
                    </span>
                  </span>
                </div>
              </div>

            </div>


            <div class="row">
              <div class="col-md-4" data-step="5" data-intro="Se necesita un correo electrónico para qué te puedan contactar, por ejemplo: juan@google.com, o bender@yahoo.com">
                <div :class="{'form-group': true, 'has-danger': errors.has('nuevoanuncio.email')}" >
                  <label class="form-control-label"  for="nuevoanuncio.email">Correo electrónico</label>
                  <input type="email" class="form-control" v-model="nuevoanuncio.email" name="nuevoanuncio.email"  v-validate data-vv-rules="email" data-vv-as="Correo electrónico">
                  <span v-show="errors.has('nuevoanuncio.email')" >
                    <span v-for="error in errors.collect('nuevoanuncio.email')" class="form-control-feedback">
                      {{ error }}
                    </span>
                  </span>
                </div>
              </div>
              <div class="col-md-4" data-step="6" data-intro="Proporciona un número de celular para qué te contacten, por ejemplo: (555) 555 5555">

                <div :class="{'form-group': true, 'has-danger': errors.has('nuevoanuncio.phone_number_string')}" >
                  <label class="form-control-label"  for="nuevoanuncio.phone_number_string">Teléfono celular</label>

                  <input  class="form-control" v-model="nuevoanuncio.phone_number_string" v-mask="'(###) ###-####'" name="nuevoanuncio.phone_number_string"  v-validate data-vv-rules="required" data-vv-as="Telefóno">

                  <span v-show="errors.has('nuevoanuncio.phone_number_string')" >
                    <span v-for="error in errors.collect('nuevoanuncio.phone_number_string')" class="form-control-feedback">
                      {{ error }}
                    </span>
                  </span>
                </div>

              </div>

              <div class="col-md-4" data-step="7" data-intro="Selecciona un estado para saber en donde se aplica tu oferta, por ejemplo: Texas">

                <div :class="{'form-group': true, 'has-danger': errors.has('nuevoanuncio.rel_estado')}" >
                  <label class="form-control-label"  for="nuevoanuncio.rel_estado">Estado</label>
                  <select class="form-control" name="nuevoanuncio.rel_estado" v-model="nuevoanuncio.rel_estado"  v-validate data-vv-rules="required" data-vv-as="Estado">
                    <option disabled > -- Selecciona una opción -- </option>
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



            </div>
            <div class="row">
              
              <div class="col-md-4" data-step="8" data-intro="Escribe  la ciudad donde aplica tu oferta, por ejemplo: Houston">
                <div :class="{'form-group': true, 'has-danger': errors.has('nuevoanuncio.ciudad')}" >
                  <label class="form-control-label"  for="nuevoanuncio.ciudad">Ciudad</label>
                  <input type="text" class="form-control" v-model="nuevoanuncio.ciudad" name="nuevoanuncio.ciudad"  v-validate data-vv-rules="required" data-vv-as="Ciudad">
                  <span v-show="errors.has('nuevoanuncio.ciudad')" >
                    <span v-for="error in errors.collect('nuevoanuncio.ciudad')" class="form-control-feedback">
                      {{ error }}
                    </span>
                  </span>
                </div>
              </div>
              <div class="col-md-4" data-step="9" data-intro="Escribe el código postal donde aplica tu oferta, por ejemplo: 06030">
                <div :class="{'form-group': true, 'has-danger': errors.has('nuevoanuncio.zip')}">
                  <label class="form-control-label"  for="nuevoanuncio.zip">Código postal</label>
                  <input  type="text" class="form-control" v-model="nuevoanuncio.zip" name="nuevoanuncio.zip"  v-validate data-vv-rules="required|numeric" data-vv-as="Código Postal">
                  <span v-show="errors.has('nuevoanuncio.zip')" >
                    <span v-for="error in errors.collect('nuevoanuncio.zip')" class="form-control-feedback">
                      {{ error }}
                    </span>
                  </span>
                </div>
              </div>
              <div class="col-md-4" data-step="10" data-intro="Sí lo conoces, anota los 4 dígitos adicionales de tu código postal">
                <div :class="{'form-group': true, 'has-danger': errors.has('nuevoanuncio.extra_zip')}">
                  <label class="form-control-label"  for="nuevoanuncio.extra_zip">&nbsp;</label>
                  <input type="text" class="form-control"  v-model="nuevoanuncio.extra_zip" name="nuevoanuncio.extra_zip"  v-validate data-vv-rules="numeric" data-vv-as="Extra zip">
                  <span v-show="errors.has('nuevoanuncio.extra_zip')" >
                    <span v-for="error in errors.collect('nuevoanuncio.extra_zip')" class="form-control-feedback">
                      {{ error }}
                    </span>
                  </span>
                </div>
              </div>



            </div>
            


            <div class="row">
              <div class="col-md-6"  data-step="11" data-intro="Escribe el monto que ofreces en dolares, por ejemplo: $100">
                <div class="form-group" >
                  <label class="form-control-label"  for="">Monto ofrecido en dolares</label>
                  <div :class="{'input-group': true, 'has-danger': errors.has('nuevoanuncio.monto')}">
                    <span class="input-group-addon">$</span>
                    <input type="number" class="form-control"  v-model="nuevoanuncio.monto" name="nuevoanuncio.monto"  v-validate data-vv-rules="required|numeric" data-vv-as="Monto">
                    <span class="input-group-addon">.00</span>

                  </div>
                  <span v-show="errors.has('nuevoanuncio.monto')" >
                    <span v-for="error in errors.collect('nuevoanuncio.monto')" class="form-control-feedback">
                      {{ error }}
                    </span>
                  </span>
                </div>
              </div>
              <div class="col-md-6" data-step="12" data-intro="Selecciona que tipo de pago ofreces para el monto anterior">

                <div :class="{'form-group': true, 'has-danger': errors.has('nuevoanuncio.rel_tipopago')}" >
                  <label class="form-control-label"  for="nuevoanuncio.rel_tipopago">Periodo de pago</label>
                  <select class="form-control" name="nuevoanuncio.rel_tipopago" v-model="nuevoanuncio.rel_tipopago"  v-validate data-vv-rules="required" data-vv-as="Tipo de pago">
                    <option disabled > -- Selecciona una opción -- </option>
                    <option :value=" payform._id "  v-for="payform in this.tipoSorted">

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
              <div class="col-md-12"  data-step="13" data-intro="Describre de que tratan tu oferta, por ejemplo: Se solicitan servicios de jardinería a domicilio. Persona seriea, eficiente y honesta. Se requiere: mantenimiento de jardín con mi propia herramienta.">
                <div :class="{'form-group': true, 'has-danger': errors.has('nuevoanuncio.descripcion')}" >
                  <label class="form-control-label"  for="nuevoanuncio.descripcion">Descripción</label>
                  <textarea name="nuevoanuncio.descripcion" rows="8" cols="80" class="form-control" v-model="nuevoanuncio.descripcion"  v-validate data-vv-rules="required" data-vv-as="Descripción">
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
              <div class="col-md-12"  data-step="14" data-intro="¿Tienes una imagen de tu servicio? Subela aquí.">
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
              <div class="col-md-12 text-right"  data-step="15" data-intro="Acepta los terminso y condiciones para publicar tu oferta.">
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

                <button type="submit"  name="sendForm" id="sendForm" class="btn btn-primary" v-bind:disabled="disabledButton"  data-step="16" data-intro="Por ultimo haz click en este botón para publicar tu oferta.">
                  Publicar oferta
                </button>
              </div>
            </div>

          </div> 
        </form>


      </div>
    </div>
    <div class="loader-ss" v-if="loading"></div>
  </div>
</template>

<script>

import orderBy from 'vue-orderby-mixin'
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
      phone: '',
      nuevoanuncio: {
        anunciante: '',
        area_code: '',
        descripcion: '',
        persona_contacto: '',
        monto: '',
        phone_number_string: '',
        rel_categoria: ['586d73e98d0b347e058a13b8'],
        rel_estado: [],
        rel_tipotrabajo: [],
        rel_tipopago: [],
        titulo: '',
        email: '',
        ciudad: '',
        imagen: '',
        zip:'',
        extra_zip: ''
      },
      terminos: '',
      urlSuccessPost: '',
      disabledButton: false
		}
	},
  mixins: { orderBy },
  computed: {
    tipoSorted() {
      return this.orderBy(this.payList, 'priority', 'ASC')
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


    vm.intro = window.introJs.setOptions({ 
      'showProgress': 'true',
      'nextLabel': 'Siguiente',
      'prevLabel': 'Anterior',
      'skipLabel': 'Omitir',
      'doneLabel': 'Finalizar',
    });
    // vm.intro = window.introJs.setOption('showProgress', true)

    // setTimeout(function(){
    //   vm.intro.start() 
    // }, 800)
    

    vm.intro.onchange(function () {
      
      $(arguments).find(":input").focus();

    });

    
  },
  watch: {

  },
  created () {
    this.getCategorias()
    this.getTipoTrabajo()
    this.getEstados()
    this.getPayForm()
  },
  beforeDestroy () {
    this.dropzone.destroy();
    this.assitantStop();
  }, 
  methods: {
    resetForm () {

    },
    sortResults(json,prop, asc) {
      json = json.sort(function(a, b) {
        if (asc) {
          return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
        } else {
          return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
        }
      });

      return
    },
    validateForm () {

      this.$validator.validateAll().then(() => {
                // eslint-disable-next-line
                    this.disabledButton = true;
                    this.loading = true;
                    this.publishForm()
            }).catch(() => {
                // eslint-disable-next-line
                $(document).scrollTop( 0 )
                // return;
                // alert('Correct them errors!');
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
        self.loading = false;
        // console.log('st error ->', err)
      })
    },
    sendImage() {
      this.dropzone.processQueue()
    },
    assitantStart() {
      this.intro.start() 
    },
    assitantStop() {
      this.intro.exit()
    }

  },
  components: { 
    
  }
}
</script>

<style lang="scss">
@import '../../node_modules/dropzone/dist/dropzone.css';
.form---pub {
  .form-group {
    min-height:94px;
  }
}
.loader-ss  {
  position:fixed;
  background: rgba(#000, 0.8);
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index:9999;
}

// @import '../../node_modules/intro.js/minified/introjs.min.css';
</style>
