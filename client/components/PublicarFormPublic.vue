<template>
  <div class="form---">
    <!-- <div class="card"> -->
      <!-- <div class="card-block"> -->
        <form class="" @submit.prevent="validateForm">
          <slick ref="slick" :options="slickOptions" v-on:afterChange="checa">
            <div class="field-slide">
              <div class="container-fluid">
                <div class="row align-items-center">
                  <div class="col-md-12">
                    <h1 class="h2 text-center margin-xl-top text-white">Contesta las siguientes preguntas para anunciarte </h1>
                    <p class="lead text-white text-center">
                      Anuncia tus servicios, profesión u oferta para conseguir más trabajo. 
                    </p>
                    <hr>
                    <div :class="{'form-group': true, 'has-danger': errors.has('pre_rel_categoria')}" >
                      <label class="form-control-label"  for="pre_rel_categoria">Categoría del aviso</label>
                      <select class="form-control form-control-lg" name="pre_rel_categoria" v-model="pre_rel_categoria"  v-validate data-vv-rules="required" data-vv-as="Categoria">
                        <option disabled> -- select an option -- </option>
                        <option :value=" categoria._id "  v-for="categoria in this.catList">
                          {{ categoria.titulo }}
                        </option>
                      </select>

                      <span v-show="errors.has('pre_rel_categoria')" >
                        <span v-for="error in errors.collect('pre_rel_categoria')" class="form-control-feedback">
                          {{ error }}
                        </span>
                      </span>
                      
                    </div>
                      
                      <div v-if="pre_rel_categoria">
                        <button type="button" class="btn btn-warning" @click="next">
                          Siguiente 
                        </button>
                      </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="field-slide">
              <div class="container-fluid">
                <div class="row align-items-center">
                  <div class="col-md-12">
                    <div :class="{'form-group': true, 'has-danger': errors.has('pre_rel_tipotrabajo')}" >
                      <label class="form-control-label"  for="pre_rel_tipotrabajo">Tipo del aviso</label>
                      <select class="form-control form-control-lg" name="pre_rel_tipotrabajo" v-model="pre_rel_tipotrabajo"  v-validate data-vv-rules="required" data-vv-as="Tipo de trabajo">
                        <option disabled> -- select an option -- </option>
                        <option :value=" job._id "  v-for="job in this.jobsList">
                          {{ job.titulo }}
                        </option>
                      </select>
                      <span v-show="errors.has('pre_rel_tipotrabajo')" >
                        <span v-for="error in errors.collect('pre_rel_tipotrabajo')" class="form-control-feedback">
                          {{ error }}
                        </span>
                      </span>
                    </div>
                    <div v-if="pre_rel_tipotrabajo">
                        <button type="button" class="btn btn-warning" @click="next">
                          Siguiente 
                        </button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="field-slide">
              <div class="container-fluid">
                <div class="row align-items-center">
                  <div class="col-md-12">
                    <div :class="{'form-group': true, 'has-danger': errors.has('nuevoanuncio.titulo')}" >
                      <label class="form-control-label"  for="nuevoanuncio.titulo">Titulo del anuncio</label>
                      <input type="text" class="form-control form-control-lg"  v-model="nuevoanuncio.titulo" name="nuevoanuncio.titulo"  v-validate data-vv-rules="required" data-vv-as="Titulo">
                      <span v-show="errors.has('nuevoanuncio.titulo')" >
                        <span v-for="error in errors.collect('nuevoanuncio.titulo')" class="form-control-feedback">
                          {{ error }}
                        </span>
                      </span>
                    </div>
                    <div v-if="nuevoanuncio.titulo">
                        <button type="button" class="btn btn-warning" @click="next">
                          Siguiente 
                        </button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="field-slide">
              <div class="container-fluid">
                <div class="row align-items-center">
                  <div class="col-md-12">
                    <div :class="{'form-group': true, 'has-danger': errors.has('nuevoanuncio.anunciante')}" >
                      <label class="form-control-label"  for="nuevoanuncio.anunciante">Nombre del anunciante</label>
                      <input type="text" class="form-control form-control-lg" placeholder="Tu nombre" v-model="nuevoanuncio.anunciante" name="nuevoanuncio.anunciante"  v-validate data-vv-rules="required" data-vv-as="Nombre">
                      <span v-show="errors.has('nuevoanuncio.anunciante')" >
                        <span v-for="error in errors.collect('nuevoanuncio.anunciante')" class="form-control-feedback">
                          {{ error }}
                        </span>
                      </span>
                    </div>
                    <div v-if="nuevoanuncio.anunciante">
                        <button type="button" class="btn btn-warning" @click="next">
                          Siguiente 
                        </button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="field-slide">
              <div class="container-fluid">
                <div class="row align-items-center">
                  <div class="col-md-12">
                    <div :class="{'form-group': true, 'has-danger': errors.has('nuevoanuncio.email')}" >
                      <label class="form-control-label"  for="nuevoanuncio.email">Correo electrónico</label>
                      <input type="email" class="form-control form-control-lg" placeholder="tumail@dominio.com" v-model="nuevoanuncio.email" name="nuevoanuncio.email"  v-validate data-vv-rules="required|email" data-vv-as="Correo electrónico">
                      <span v-show="errors.has('nuevoanuncio.email')" >
                        <span v-for="error in errors.collect('nuevoanuncio.email')" class="form-control-feedback">
                          {{ error }}
                        </span>
                      </span>
                    </div>
                    <div v-if="nuevoanuncio.email">
                        <button type="button" class="btn btn-warning" @click="next">
                          Siguiente 
                        </button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="field-slide">
              <div class="container-fluid">
                <div class="row align-items-center">
                  <div class="col-md-12">
                    <div :class="{'form-group': true, 'has-danger': errors.has('nuevoanuncio.phone_number')}" >
                      <label class="form-control-label"  for="nuevoanuncio.phone_number">Teléfono</label>

                      <input  class="form-control form-control-lg" v-model="nuevoanuncio.phone_number" placeholder="(999)-999-9999" v-mask="'(###) ###-####'" name="nuevoanuncio.phone_number"  v-validate data-vv-rules="required" data-vv-as="Telefóno">

                      <span v-show="errors.has('nuevoanuncio.phone_number')" >
                        <span v-for="error in errors.collect('nuevoanuncio.phone_number')" class="form-control-feedback">
                          {{ error }}
                        </span>
                      </span>
                    </div>
                    {{nuevoanuncio.phone_number}}
                    <div v-if="nuevoanuncio.phone_number">
                        <button type="button" class="btn btn-warning" @click="next">
                          Siguiente 
                        </button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="field-slide">
              <div class="container-fluid">
                <div class="row align-items-center">
                  <div class="col-md-12">
                    <div :class="{'form-group': true, 'has-danger': errors.has('pre_rel_estado')}" >
                      <label class="form-control-label"  for="pre_rel_estado">Estado</label>
                      <select class="form-control form-control-lg" name="pre_rel_estado" v-model="pre_rel_estado"  v-validate data-vv-rules="required" data-vv-as="Estado">
                        <option disabled> -- select an option -- </option>
                        <option :value=" state._id "  v-for="state in this.estList">
                          {{ state.codigo }} -  {{ state.nombre }}
                        </option>
                      </select>
                      <span v-show="errors.has('pre_rel_estado')" >
                        <span v-for="error in errors.collect('pre_rel_estado')" class="form-control-feedback">
                          {{ error }}
                        </span>
                      </span>
                    </div>
                    <div v-if="pre_rel_estado">
                        <button type="button" class="btn btn-warning" @click="next">
                          Siguiente 
                        </button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="field-slide">
              <div class="container-fluid">
                <div class="row align-items-center">
                  <div class="col-md-12">
                    <div :class="{'form-group': true, 'has-danger': errors.has('nuevoanuncio.ciudad')}" >
                      <label class="form-control-label"  for="nuevoanuncio.ciudad">Ciudad</label>
                      <input type="text" class="form-control form-control-lg" placeholder="Ej. Houston" v-model="nuevoanuncio.ciudad" name="nuevoanuncio.ciudad"  v-validate data-vv-rules="required" data-vv-as="Ciudad">
                      <span v-show="errors.has('nuevoanuncio.ciudad')" >
                        <span v-for="error in errors.collect('nuevoanuncio.ciudad')" class="form-control-feedback">
                          {{ error }}
                        </span>
                      </span>
                    </div>
                    <div v-if="nuevoanuncio.ciudad">
                        <button type="button" class="btn btn-warning" @click="next">
                          Siguiente 
                        </button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="field-slide">
              <div class="container-fluid">
                <div class="row align-items-center">
                  <div class="col-md-12">
                    <div :class="{'form-group': true, 'has-danger': errors.has('nuevoanuncio.zip')}" >
                      <label class="form-control-label"  for="nuevoanuncio.zip">Código postal</label>
                      <input type="text" class="form-control form-control-lg" placeholder="06030" v-model="nuevoanuncio.zip" name="nuevoanuncio.zip"  v-validate data-vv-rules="required" data-vv-as="Código Postal">
                      <span v-show="errors.has('nuevoanuncio.zip')" >
                        <span v-for="error in errors.collect('nuevoanuncio.zip')" class="form-control-feedback">
                          {{ error }}
                        </span>
                      </span>
                    </div>
                    <div v-if="nuevoanuncio.zip">
                        <button type="button" class="btn btn-warning" @click="next">
                          Siguiente 
                        </button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="field-slide">
              <div class="container-fluid">
                <div class="row align-items-center">
                  <div class="col-md-12">
                    <div :class="{'form-group': true, 'has-danger': errors.has('nuevoanuncio.extra_zip')}" >
                      <label class="form-control-label"  for="nuevoanuncio.extra_zip">Extra código postal</label>
                      <input type="text" class="form-control form-control-lg" placeholder="0000" v-model="nuevoanuncio.extra_zip" name="nuevoanuncio.extra_zip"  v-validate data-vv-rules="required" data-vv-as="Extra zip">
                      <span v-show="errors.has('nuevoanuncio.extra_zip')" >
                        <span v-for="error in errors.collect('nuevoanuncio.extra_zip')" class="form-control-feedback">
                          {{ error }}
                        </span>
                      </span>
                    </div>
                    <div v-if="nuevoanuncio.extra_zip">
                        <button type="button" class="btn btn-warning" @click="next">
                          Siguiente 
                        </button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="field-slide">
              <div class="container-fluid">
                <div class="row align-items-center">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label class="form-control-label"  for="">Monto ofrecido en dolares</label>
                      <div :class="{'input-group': true, 'has-danger': errors.has('nuevoanuncio.monto')}" >
                        <span class="input-group-addon">$</span>
                        <input type="number" class="form-control form-control-lg" placeholder="1999" v-model="nuevoanuncio.monto" name="nuevoanuncio.monto"  v-validate data-vv-rules="required|numeric" data-vv-as="Monto">
                        <span class="input-group-addon">.00</span>

                      </div>
                      <span v-show="errors.has('nuevoanuncio.monto')" >
                        <span v-for="error in errors.collect('nuevoanuncio.monto')" class="form-control-feedback">
                          {{ error }}
                        </span>
                      </span>
                    </div>
                    <div v-if="nuevoanuncio.monto">
                        <button type="button" class="btn btn-warning" @click="next">
                          Siguiente 
                        </button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="field-slide">
              <div class="container-fluid">
                <div class="row align-items-center">
                  <div class="col-md-12">
                    <div :class="{'form-group': true, 'has-danger': errors.has('pre_rel_tipopago')}" >
                      <label class="form-control-label"  for="pre_rel_tipopago">Tipo de Pago</label>
                      <select class="form-control form-control-lg" name="pre_rel_tipopago" v-model="pre_rel_tipopago"  v-validate data-vv-rules="required" data-vv-as="Tipo de pago">
                        <option disabled> -- select an option -- </option>
                        <option :value=" payform._id "  v-for="payform in this.payList">
                          {{ payform.titulo }}
                        </option>
                      </select>
                      <span v-show="errors.has('pre_rel_tipopago')" >
                        <span v-for="error in errors.collect('pre_rel_tipopago')" class="form-control-feedback">
                          {{ error }}
                        </span>
                      </span>
                    </div>
                    <div v-if="pre_rel_tipopago">
                        <button type="button" class="btn btn-warning" @click="next">
                          Siguiente 
                        </button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="field-slide">
              <div class="container-fluid">
                <div class="row align-items-center">
                  <div class="col-md-12">
                    <div :class="{'form-group': true, 'has-danger': errors.has('nuevoanuncio.descripcion')}" >
                      <label class="form-control-label"  for="nuevoanuncio.descripcion">Descripción</label>
                      <textarea name="nuevoanuncio.descripcion" rows="8" cols="80" placeholder="Descripcion del puesto" class="form-control form-control-lg" v-model="nuevoanuncio.descripcion"  v-validate data-vv-rules="required" data-vv-as="Descripción">
                      </textarea>
                      <span v-show="errors.has('nuevoanuncio.descripcion')" >
                        <span v-for="error in errors.collect('nuevoanuncio.descripcion')" class="form-control-feedback">
                          {{ error }}
                        </span>
                      </span>
                    </div>
                    <div v-if="nuevoanuncio.descripcion">
                        <button type="button" class="btn btn-warning" @click="next">
                          Siguiente 
                        </button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="field-slide">
              <div class="container-fluid">
                <div class="row align-items-center">
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
                    <div >
                        <button type="button" class="btn btn-warning" @click="next">
                          Siguiente 
                        </button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="field-slide">
              <div class="container-fluid">
                <div class="row align-items-center">
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
                    <div v-if="terminos">
                        <button type="button" class="btn btn-warning" @click="next">
                          Siguiente 
                        </button>
                      </div>


                  </div>
                </div>
              </div>
            </div>
            <div class="field-slide">
              <div class="container-fluid">
                <div class="row align-items-center">
                  <div class="col-md-12 text-right" >


                    <router-link to="/" class="btn btn-link btn-lg">
                      Cancelar
                    </router-link>

                    <button type="submit"  name="sendForm" id="sendForm" class="btn btn-primary  btn-lg" v-bind:disabled="disabledButton">
                      Publicar anuncio
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </slick>
        </form>


      <!-- </div> -->
    <!-- </div> -->
  </div>
</template>

<script>
import Slick from 'vue-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Dropzone from 'dropzone'
Dropzone.autoDiscover = false

export default {
  data() {
		return {
      slickOptions: {
        slidesToShow: 1,
        infinite: false,
        touchMove: false,
        draggable: false,
        arrows:false,
        vertical:true
      },
      error : null,
      loading: null,
      catList: null,
      jobsList: null,
      estList: null,
      payList: null,
      phone: '',
      pre_rel_categoria: '',
      pre_rel_estado: '',
      pre_rel_tipotrabajo: '',
      pre_rel_tipopago: '',
      pre_phone_number: '',
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
        imagen: '',
        zip:'',
        extra_zip: ''
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
    pre_phone_number: 'fn_phone_number',
    pre_rel_categoria:  'fn_rel_cat',
    pre_rel_estado: 'fn_rel_edo',
    pre_rel_tipotrabajo:'fn_rel_tipotrab',
    pre_rel_tipopago:'fn_rel_tipopago'
  },
  created () {
    this.getCategorias()
    this.getTipoTrabajo()
    this.getEstados()
    this.getPayForm()
  },
  beforeDestroy () {
    this.dropzone.destroy();
  }, 
  methods: {
    resetForm () {

    },
    fn_rel_cat () {
      this.nuevoanuncio.rel_categoria.push(this.pre_rel_categoria)
    },
    fn_rel_edo () {
      this.nuevoanuncio.rel_estado.push(this.pre_rel_estado)
    },
    fn_rel_tipotrab () {
      this.nuevoanuncio.rel_tipotrabajo.push(this.pre_rel_tipotrabajo)
    },
    fn_rel_tipopago () {
      this.nuevoanuncio.rel_tipopago.push(this.pre_rel_tipotrabajo)
    },
    fn_phone_number () {
      //this.pre_phone_number

      // var desired = stringToReplace.replace(/[^\w\s]/gi, '')
    },
    checa (event, slick, currentSlide) {
      console.log('ya paso')
      // console.log('el id', arguments)
      console.log('el id', currentSlide)
    },
    validateForm () {

      // Validate All returns a promise and provides the validation result.
      // this.$validator.validateAll().then(success => {
      //   if (!success) {
      //     // handle error
      //     return;
      //   }
      //   else {
      //     this.disabledButton = true;
      //     this.publishForm()
      //   }
      // });
      this.$validator.validateAll().then(() => {
                // eslint-disable-next-line
                    this.disabledButton = true;
                    this.publishForm()
            }).catch(() => {
                // eslint-disable-next-line
                    return;
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
        // console.log('st error ->', err)
      })
    },
    sendImage() {
      this.dropzone.processQueue()
    },

    next() {
      this.$refs.slick.next();
    },

    prev() {
      this.$refs.slick.prev();
    },
  },
  components: { 
    Slick
  }
}
</script>

<style lang="scss">


.field-slide {
  .container-fluid {
    .row {
      min-height: calc( 100vh - 78px);
      hr {
        border-color: white;
      }
      label {
        color:white;
        font-size: 1.8rem;
      }
      .form-control  {
          background-color: rgba( #fff, 0.2 );
          color:#fff;
          &:placeholder {
            color:red;
          }
          option {
            color:black;
          } 
        }

      .control-group {

      }
    } 
  }
}
@import '../../node_modules/dropzone/dist/dropzone.css'
</style>
