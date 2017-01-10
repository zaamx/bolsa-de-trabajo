<template>
  <div class="search-wrapper">
    <div class="card">
      <form class="" action="index.html" method="post">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group" v-bind:class="{ 'form-group--error': $v.rel_categoria.$error }">
                <label for="rel_categoria">Categoría del aviso</label>
                <select class="form-control" name="rel_categoria" v-model="rel_categoria" @blur="$v.rel_categoria.$touch()">
                  <option disabled> -- select an option -- </option>
                  <option :value=" categoria._id "  v-for="categoria in this.catList">
                    {{ categoria.titulo }}
                  </option>
                </select>
              </div>
              <span class="form-group__message" v-if="!$v.rel_categoria.required">Field is required</span>


            </div>

            <div class="col-md-6">
              <div class="form-group" v-bind:class="{ 'form-group--error': $v.rel_tipotrabajo.$error }">
                <label for="rel_tipotrabajo">Tipo del aviso</label>
                <select class="form-control" name="rel_tipotrabajo" v-model="rel_tipotrabajo" @blur="$v.rel_tipotrabajo.$touch()">
                  <option disabled> -- select an option -- </option>
                  <option :value=" job._id "  v-for="job in this.jobsList">
                    {{ job.titulo }}
                  </option>
                </select>
              </div>
              <span class="form-group__message" v-if="!$v.rel_tipotrabajo.required">Field is required</span>

            </div>
          </div>

          <div class="form-group" v-bind:class="{ 'form-group--error': $v.titulo.$error }">
            <label for="titulo">Titulo del anuncio</label>
            <input type="text" class="form-control" placeholder="Ej. Solicito jardinero" v-model="titulo" name="titulo" @blur="$v.titulo.$touch()">
          </div>
          <span class="form-group__message" v-if="!$v.titulo.required">Field is required</span>
          <span class="form-group__message" v-if="!$v.titulo.minLength">Name must be longer than 3 letters.</span>

          <div class="clearfix"></div>

          <div class="form-group" v-bind:class="{ 'form-group--error': $v.anunciante.$error }">
            <label for="anunciante">Nombre del anunciante</label>
            <input type="text" class="form-control" placeholder="Ej. Solicito jardinero" v-model="anunciante" name="anunciante" @blur="$v.anunciante.$touch()">
          </div>
          <span class="form-group__message" v-if="!$v.anunciante.required">Field is required</span>

          <div class="row">
            <div class="col-md-4">

              <div class="form-group" v-bind:class="{ 'form-group--error': $v.area_code.$error }">
                <label for="area_code">Area code</label>
                <input type="text" class="form-control" placeholder="Ej. Juan Perez" v-model="area_code" name="area_code" @blur="$v.area_code.$touch()">
              </div>
              <span class="form-group__message" v-if="!$v.area_code.required">Field is required</span>

            </div>
            <div class="col-md-8">

              <div class="form-group" v-bind:class="{ 'form-group--error': $v.phone_number.$error }">
                <label for="phone_number">Teléfono</label>
                <input type="text" class="form-control" placeholder="5555 5555" v-model="phone_number" name="phone_number" @blur="$v.phone_number.$touch()">
              </div>
              <span class="form-group__message" v-if="!$v.phone_number.required">Field is required</span>

            </div>
          </div>
          <div class="row">
            <div class="col-md-6">

              <div class="form-group" v-bind:class="{ 'form-group--error': $v.rel_estado.$error }">
                <label for="rel_estado">Estado</label>
                <select class="form-control" name="rel_estado" v-model="rel_estado" @blur="$v.rel_estado.$touch()">
                  <option disabled> -- select an option -- </option>
                  <option :value=" state._id "  v-for="state in this.estList">
                    {{ state.codigo }} -  {{ state.nombre }}
                  </option>
                </select>
              </div>
              <span class="form-group__message" v-if="!$v.rel_estado.required">Field is required</span>

            </div>
            <div class="col-md-6">

              <div class="form-group" v-bind:class="{ 'form-group--error': $v.ciudad.$error }">
                <label for="ciudad">Ciudad</label>
                <input type="text" class="form-control" placeholder="Ej. Houston" v-model="ciudad" name="ciudad" @blur="$v.ciudad.$touch()">
              </div>
              <span class="form-group__message" v-if="!$v.ciudad.required">Field is required</span>

            </div>
          </div>
          <div class="row">
            <div class="col-md-6">

              <div class="form-group" v-bind:class="{ 'form-group--error': $v.monto.$error }">
                <label for="">Monto ofrecido</label>
                <input type="text" class="form-control" placeholder="Ej. Houston" v-model="monto" name="monto" @blur="$v.monto.$touch()">
              </div>
              <span class="form-group__message" v-if="!$v.monto.required">Field is required</span>

            </div>
            <div class="col-md-6">

              <div class="form-group" v-bind:class="{ 'form-group--error': $v.rel_tipopago.$error }">
                <label for="rel_tipopago">Tipo de Pago</label>
                <select class="form-control" name="rel_tipopago" v-model="rel_tipopago" @blur="$v.rel_tipopago.$touch()">
                  <option disabled> -- select an option -- </option>
                  <option :value=" payform._id "  v-for="payform in this.payList">
                    {{ payform.titulo }}
                  </option>
                </select>
              </div>
              <span class="form-group__message" v-if="!$v.rel_tipopago.required">Field is required</span>

            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group" v-bind:class="{ 'form-group--error': $v.descripcion.$error }">
                <label for="descripcion">Descripción</label>
                <textarea name="descripcion" rows="8" cols="80" placeholder="Descripcion del puesto" class="form-control" v-model="descripcion" @blur="$v.descripcion.$touch()"></textarea>

              </div>
              <span class="form-group__message" v-if="!$v.descripcion.required">Field is required</span>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <label for="">Imagen</label>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group" v-bind:class="{ 'form-group--error': $v.terminos.$error }">
                <div class="checkbox">
                  <label>
                    <input type="checkbox" value="" v-model="terminos" @blur="$v.terminos.$touch()">
                    Acepto los <a href="">Términos y condiciones</a> y <a href="">Política de privacidad</a>
                  </label>
                </div>
              </div>
              <span class="form-group__message" v-if="!$v.terminos.required">Field is required</span>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12 text-right" >
              <button type="button" name="button" class="btn btn-default">
                Cancelar
              </button>
              <button type="button" name="button" class="btn btn-info" @click="validateForm">
                Publicar anuncio
              </button>
            </div>
          </div>

        </div>
      </form>

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


</style>
