<template>
  <div class="form---">
    <pre>
      form : {{ $v}}
    </pre>
    <div class="card">
      <div class="card-block">
        <form class="" action="index.html" method="post">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group" v-bind:class="{ 'has-danger': $v.nuevoanuncio.rel_categoria.$error }">
                  <label class="form-control-label"  for="nuevoanuncio.rel_categoria">Categoría del aviso</label>
                  <select class="form-control" name="nuevoanuncio.rel_categoria" v-model="nuevoanuncio.rel_categoria" @blur="$v.nuevoanuncio.rel_categoria.$touch()">
                    <option disabled> -- select an option -- </option>
                    <option :value=" categoria._id "  v-for="categoria in this.catList">
                      {{ categoria.titulo }}
                    </option>
                  </select>
                  <span class="form-control-feedback" v-if="!$v.nuevoanuncio.rel_categoria.required">El campo es requerido</span>
                </div>



              </div>

              <div class="col-md-6">
                <div class="form-group" v-bind:class="{ 'has-danger': $v.nuevoanuncio.rel_tipotrabajo.$error }">
                  <label class="form-control-label"  for="nuevoanuncio.rel_tipotrabajo">Tipo del aviso</label>
                  <select class="form-control" name="nuevoanuncio.rel_tipotrabajo" v-model="nuevoanuncio.rel_tipotrabajo" @blur="$v.nuevoanuncio.rel_tipotrabajo.$touch()">
                    <option disabled> -- select an option -- </option>
                    <option :value=" job._id "  v-for="job in this.jobsList">
                      {{ job.titulo }}
                    </option>
                  </select>
                  <span class="form-control-feedback" v-if="!$v.nuevoanuncio.rel_tipotrabajo.required">El campo es requerido</span>
                </div>

              </div>
            </div>

            <div class="form-group" v-bind:class="{ 'has-danger': $v.nuevoanuncio.titulo.$error }">
              <label class="form-control-label"  for="nuevoanuncio.titulo">Titulo del anuncio</label>
              <input type="text" class="form-control" placeholder="Ej. Solicito jardinero" v-model="nuevoanuncio.titulo" name="nuevoanuncio.titulo" @blur="$v.nuevoanuncio.titulo.$touch()">
              <span class="form-control-feedback" v-if="!$v.nuevoanuncio.titulo.required">El campo es requerido</span>
              <!-- <span class="form-control-feedback" v-if="!$v.nuevoanuncio.titulo.minLength">Name must be longer than 3 let1ters.</span> -->
            </div>

            <div class="clearfix"></div>

            <div class="form-group" v-bind:class="{ 'has-danger': $v.nuevoanuncio.anunciante.$error }">
              <label class="form-control-label"  for="nuevoanuncio.anunciante">Nombre del anunciante</label>
              <input type="text" class="form-control" placeholder="Ej. Solicito jardinero" v-model="nuevoanuncio.anunciante" name="nuevoanuncio.anunciante" @blur="$v.nuevoanuncio.anunciante.$touch()">
              <span class="form-control-feedback" v-if="!$v.nuevoanuncio.anunciante.required">El campo es requerido</span>
              <!-- <span class="form-control-feedback" v-if="!$v.nuevoanuncio.anunciante.minLength">Name must be longer than 8 let1ters.</span> -->
            </div>

            <div class="form-group" v-bind:class="{ 'has-danger': $v.nuevoanuncio.email.$error }">
              <label class="form-control-label"  for="nuevoanuncio.email">Correo electrónico</label>
              <input type="email" class="form-control" placeholder="5555 5555" v-model="nuevoanuncio.email" name="nuevoanuncio.email" @blur="$v.nuevoanuncio.email.$touch()">
              <span class="form-control-feedback" v-if="!$v.nuevoanuncio.email.required">El campo es requerido</span>
              <span class="form-control-feedback" v-if="!$v.nuevoanuncio.email.email">Ingresa un correo electrónico valido</span>
            </div>

            <div class="row">
              <div class="col-md-4">

                <div class="form-group" v-bind:class="{ 'has-danger': $v.nuevoanuncio.area_code.$error }">
                  <label class="form-control-label"  for="nuevoanuncio.area_code">Area code</label>
                  <input type="number" class="form-control" placeholder="Ej. Juan Perez" v-model="nuevoanuncio.area_code" name="nuevoanuncio.area_code" @blur="$v.nuevoanuncio.area_code.$touch()">
                  <span class="form-control-feedback" v-if="!$v.nuevoanuncio.area_code.required">El campo es requerido</span>
                </div>

              </div>
              <div class="col-md-8">

                <div class="form-group" v-bind:class="{ 'has-danger': $v.nuevoanuncio.phone_number.$error }">
                  <label class="form-control-label"  for="nuevoanuncio.phone_number">Teléfono</label>
                  <input type="number" class="form-control" placeholder="5555 5555" v-model="nuevoanuncio.phone_number" name="nuevoanuncio.phone_number" @blur="$v.nuevoanuncio.phone_number.$touch()">
                  <span class="form-control-feedback" v-if="!$v.nuevoanuncio.phone_number.required">El campo es requerido</span>
                </div>

              </div>
            </div>
            <div class="row">
              <div class="col-md-6">

                <div class="form-group" v-bind:class="{ 'has-danger': $v.nuevoanuncio.rel_estado.$error }">
                  <label class="form-control-label"  for="nuevoanuncio.rel_estado">Estado</label>
                  <select class="form-control" name="nuevoanuncio.rel_estado" v-model="nuevoanuncio.rel_estado" @blur="$v.nuevoanuncio.rel_estado.$touch()">
                    <option disabled> -- select an option -- </option>
                    <option :value=" state._id "  v-for="state in this.estList">
                      {{ state.codigo }} -  {{ state.nombre }}
                    </option>
                  </select>
                  <span class="form-control-feedback" v-if="!$v.nuevoanuncio.rel_estado.required">El campo es requerido</span>
                </div>

              </div>
              <div class="col-md-6">

                <div class="form-group" v-bind:class="{ 'has-danger': $v.nuevoanuncio.ciudad.$error }">
                  <label class="form-control-label"  for="nuevoanuncio.ciudad">Ciudad</label>
                  <input type="text" class="form-control" placeholder="Ej. Houston" v-model="nuevoanuncio.ciudad" name="nuevoanuncio.ciudad" @blur="$v.nuevoanuncio.ciudad.$touch()">
                  <span class="form-control-feedback" v-if="!$v.nuevoanuncio.ciudad.required">El campo es requerido</span>
                </div>

              </div>
            </div>
            <div class="row">
              <div class="col-md-6">

                <div class="form-group" v-bind:class="{ 'has-danger': $v.nuevoanuncio.monto.$error }">
                  <label class="form-control-label"  for="">Monto ofrecido USD</label>
                  <input type="number" class="form-control" placeholder="Ej. Houston" v-model="nuevoanuncio.monto" name="monto" @blur="$v.nuevoanuncio.monto.$touch()">
                  <span class="form-control-feedback" v-if="!$v.nuevoanuncio.monto.required">El campo es requerido</span>
                </div>

              </div>
              <div class="col-md-6">

                <div class="form-group" v-bind:class="{ 'has-danger': $v.nuevoanuncio.rel_tipopago.$error }">
                  <label class="form-control-label"  for="nuevoanuncio.rel_tipopago">Tipo de Pago</label>
                  <select class="form-control" name="nuevoanuncio.rel_tipopago" v-model="nuevoanuncio.rel_tipopago" @blur="$v.nuevoanuncio.rel_tipopago.$touch()">
                    <option disabled> -- select an option -- </option>
                    <option :value=" payform._id "  v-for="payform in this.payList">
                      {{ payform.titulo }}
                    </option>
                  </select>
                  <span class="form-control-feedback" v-if="!$v.nuevoanuncio.rel_tipopago.required">El campo es requerido</span>
                </div>

              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group" v-bind:class="{ 'has-danger': $v.nuevoanuncio.descripcion.$error }">
                  <label class="form-control-label"  for="nuevoanuncio.descripcion">Descripción</label>
                  <textarea name="descripcion" rows="8" cols="80" placeholder="Descripcion del puesto" class="form-control" v-model="nuevoanuncio.descripcion" @blur="$v.nuevoanuncio.descripcion.$touch()"></textarea>

                  <span class="form-control-feedback" v-if="!$v.nuevoanuncio.descripcion.required">El campo es requerido</span>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <label class="form-control-label"  for="">Imagen</label>
              </div>
            </div>

            <!-- <div class="row">
              <div class="col-md-12">
                <div class="form-group" v-bind:class="{ 'has-danger': $v.terminos.$error }">
                  <div class="checkbox">
                    <label>
                      <input type="checkbox" value="" v-model="terminos" @blur="$v.terminos.$touch()">
                      Acepto los <a href="">Términos y condiciones</a> y <a href="">Política de privacidad</a>
                    </label>
                  </div>
                  <span class="form-control-feedback" v-if="!$v.terminos.required">El campo es requerido</span>
                </div>
              </div>
            </div> -->

            <div class="row">
              <div class="col-md-12 text-right" >
                <button type="button" name="button" class="btn btn-link">
                  Cancelar
                </button>
                <button type="button" :disabled="$v.nuevoanuncio.$invalid"  name="button" class="btn btn-outline-info" @click="validateForm">
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
// import Vue from 'vue'import Vuelidate from 'vuelidate'

import { required, minLength, between, maxLength, alpha, alphaNum, email } from 'vuelidate/lib/validators'
// Vue.use(Vuelidate)


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
      terminos: ''
		}
	},
  validations: {
    nuevoanuncio: {
      anunciante: {
        required
        // ,
        // minLength: minLength(5)
      },
      area_code: {
        required
        // ,
        // between: between(0,99999)
      },
      descripcion: {
        required
      },
      monto: {
        required
      },
      phone_number: {
        required
      },
      rel_categoria: {
        required
      },
      rel_estado: {
        required
      },
      rel_tipotrabajo: {
        required
      },
      rel_tipopago: {
        required
      },
      titulo: {
        required
        // ,
        // minLength: minLength(4)
      },
      ciudad: {
        required
      },
      email: {
        required,
        email
      },
      imagen: {
        required
      }
    },

    // terminos: {
    //   required
    // }
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
      this.$v.$reset()
    },
    validateForm () {
      this.$v.$touch()

      console.log('es valido ->', this.$v)
      // this.publishForm();
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
      var query = this.nuevoanuncio

      console.log('el json para la pub ->', query)

      Stamplay.Object('jobs').save(query).then(function(res) {
        console.log('se publico ->', res)

      }, function(err) {
        console.log('st error ->', err)

      })

    }
  },
  components: {
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
