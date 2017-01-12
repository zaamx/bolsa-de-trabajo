<template>
  <div class="form---">
    <div class="card">
      <div class="card-block">
        <form class="" action="index.html" method="post">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group" v-bind:class="{ 'has-danger': $v.rel_categoria.$error }">
                  <label class="form-control-label"  for="rel_categoria">Categoría del aviso</label>
                  <select class="form-control" name="rel_categoria" v-model="rel_categoria" @blur="$v.rel_categoria.$touch()">
                    <option disabled> -- select an option -- </option>
                    <option :value=" categoria._id "  v-for="categoria in this.catList">
                      {{ categoria.titulo }}
                    </option>
                  </select>
                  <span class="form-control-feedback" v-if="!$v.rel_categoria.required">El campo es requerido</span>
                </div>



              </div>

              <div class="col-md-6">
                <div class="form-group" v-bind:class="{ 'has-danger': $v.rel_tipotrabajo.$error }">
                  <label class="form-control-label"  for="rel_tipotrabajo">Tipo del aviso</label>
                  <select class="form-control" name="rel_tipotrabajo" v-model="rel_tipotrabajo" @blur="$v.rel_tipotrabajo.$touch()">
                    <option disabled> -- select an option -- </option>
                    <option :value=" job._id "  v-for="job in this.jobsList">
                      {{ job.titulo }}
                    </option>
                  </select>
                  <span class="form-control-feedback" v-if="!$v.rel_tipotrabajo.required">El campo es requerido</span>
                </div>

              </div>
            </div>

            <div class="form-group" v-bind:class="{ 'has-danger': $v.titulo.$error }">
              <label class="form-control-label"  for="titulo">Titulo del anuncio</label>
              <input type="text" class="form-control" placeholder="Ej. Solicito jardinero" v-model="titulo" name="titulo" @blur="$v.titulo.$touch()">
              <span class="form-control-feedback" v-if="!$v.titulo.required">El campo es requerido</span>
              <span class="form-control-feedback" v-if="!$v.titulo.minLength">Name must be longer than 3 let1ters.</span>
            </div>

            <div class="clearfix"></div>

            <div class="form-group" v-bind:class="{ 'has-danger': $v.nuevoanuncio.anunciante.$error }">
              <label class="form-control-label"  for="anunciante">Nombre del anunciante</label>
              <input type="text" class="form-control" placeholder="Ej. Solicito jardinero" v-model="nuevoanuncio.anunciante" name="anunciante" @blur="$v.nuevoanuncio.anunciante.$touch()">
              <span class="form-control-feedback" v-if="!$v.nuevoanuncio.anunciante.required">El campo es requerido</span>
              <span class="form-control-feedback" v-if="!$v.nuevoanuncio.anunciante.minLength">Name must be longer than 8 let1ters.</span>
            </div>

            <div class="row">
              <div class="col-md-4">

                <div class="form-group" v-bind:class="{ 'has-danger': $v.area_code.$error }">
                  <label class="form-control-label"  for="area_code">Area code</label>
                  <input type="text" class="form-control" placeholder="Ej. Juan Perez" v-model="area_code" name="area_code" @blur="$v.area_code.$touch()">
                  <span class="form-control-feedback" v-if="!$v.area_code.required">El campo es requerido</span>
                </div>

              </div>
              <div class="col-md-8">

                <div class="form-group" v-bind:class="{ 'has-danger': $v.phone_number.$error }">
                  <label class="form-control-label"  for="phone_number">Teléfono</label>
                  <input type="text" class="form-control" placeholder="5555 5555" v-model="phone_number" name="phone_number" @blur="$v.phone_number.$touch()">
                  <span class="form-control-feedback" v-if="!$v.phone_number.required">El campo es requerido</span>
                </div>

              </div>
            </div>
            <div class="row">
              <div class="col-md-6">

                <div class="form-group" v-bind:class="{ 'has-danger': $v.rel_estado.$error }">
                  <label class="form-control-label"  for="rel_estado">Estado</label>
                  <select class="form-control" name="rel_estado" v-model="rel_estado" @blur="$v.rel_estado.$touch()">
                    <option disabled> -- select an option -- </option>
                    <option :value=" state._id "  v-for="state in this.estList">
                      {{ state.codigo }} -  {{ state.nombre }}
                    </option>
                  </select>
                  <span class="form-control-feedback" v-if="!$v.rel_estado.required">El campo es requerido</span>
                </div>

              </div>
              <div class="col-md-6">

                <div class="form-group" v-bind:class="{ 'has-danger': $v.ciudad.$error }">
                  <label class="form-control-label"  for="ciudad">Ciudad</label>
                  <input type="text" class="form-control" placeholder="Ej. Houston" v-model="ciudad" name="ciudad" @blur="$v.ciudad.$touch()">
                  <span class="form-control-feedback" v-if="!$v.ciudad.required">El campo es requerido</span>
                </div>

              </div>
            </div>
            <div class="row">
              <div class="col-md-6">

                <div class="form-group" v-bind:class="{ 'has-danger': $v.monto.$error }">
                  <label class="form-control-label"  for="">Monto ofrecido</label>
                  <input type="text" class="form-control" placeholder="Ej. Houston" v-model="monto" name="monto" @blur="$v.monto.$touch()">
                  <span class="form-control-feedback" v-if="!$v.monto.required">El campo es requerido</span>
                </div>

              </div>
              <div class="col-md-6">

                <div class="form-group" v-bind:class="{ 'has-danger': $v.rel_tipopago.$error }">
                  <label class="form-control-label"  for="rel_tipopago">Tipo de Pago</label>
                  <select class="form-control" name="rel_tipopago" v-model="rel_tipopago" @blur="$v.rel_tipopago.$touch()">
                    <option disabled> -- select an option -- </option>
                    <option :value=" payform._id "  v-for="payform in this.payList">
                      {{ payform.titulo }}
                    </option>
                  </select>
                  <span class="form-control-feedback" v-if="!$v.rel_tipopago.required">El campo es requerido</span>
                </div>

              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group" v-bind:class="{ 'has-danger': $v.descripcion.$error }">
                  <label class="form-control-label"  for="descripcion">Descripción</label>
                  <textarea name="descripcion" rows="8" cols="80" placeholder="Descripcion del puesto" class="form-control" v-model="descripcion" @blur="$v.descripcion.$touch()"></textarea>

                  <span class="form-control-feedback" v-if="!$v.descripcion.required">El campo es requerido</span>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <label class="form-control-label"  for="">Imagen</label>
              </div>
            </div>

            <div class="row">
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
            </div>

            <div class="row">
              <div class="col-md-12 text-right" >
                <button type="button" name="button" class="btn btn-link">
                  Cancelar
                </button>
                <button type="button" name="button" class="btn btn-outline-info" @click="validateForm">
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

import { required, minLength, between } from 'vuelidate/lib/validators'
// Vue.use(Vuelidate)


export default {
  data() {
		return {
      catList: null,
      jobsList: null,
      estList: null,
      payList: null,
      nuevoanuncio: {
        anunciante: ''
      },
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
      ciudad: '',
      imagen: '',
      terminos: ''
		}
	},
  validations: {
    nuevoanuncio: {
      anunciante: {
        required,
        minLength: minLength(8)
      }
    },
    anunciante: {
      required
    },
    area_code: {
      required
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
      required,
      minLength: minLength(4)
    },
    ciudad: {
      required
    },
    imagen: {
      required
    },
    terminos: {
      required
    }
  },
  created () {
    this.getCategorias()
    this.getTipoTrabajo()
    this.getEstados()
    this.getPayForm()
  },
  methods: {
    resetForm () {
      this.$v.$reset()
    },
    validateForm () {
      this.$v.$touch()
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
    serializeForm () {

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
