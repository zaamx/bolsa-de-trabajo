<template>
  <div class="">

    <div class="is-loading" v-if="loading">
      cargando buscador
    </div>

    <div class="is-error" v-if="error">
        {{ error }}
    </div>

    <div class="form-group" v-if="estados">
      <label for="cat-selector">Estados</label>
      <select class="form-control" name="cat-selector">
        <option :value=" estado._id "  v-for="estado in this.estados">
          {{ estado.codigo }} -  {{ estado.nombre }}
        </option>
      </select>
    </div>

  </div>
</template>

<script>
export default {
  data() {
		return{
			loading: true,
      error: null,
      estados: null
      // estados: null
		}
	},
  computed: {
    // count() {
    //   return this.$store.state.count
    // }
  },
  created () {
    this.getEstados()
  },
  methods: {
    getEstados () {
      this.error = this.estados = null

      // Cambiar para
      if (this.estados === null) {
        this.estados = this.$store.state.estados.data
        this.loading = false
      }

      // Descomentar para produccion

      // this.$http.get('estado').then((response) => {
      //   this.estados = response.body.data
      //   this.loading = false
      //   console.log('la respuesta es -->', response)
      //   console.log('en estados', this.estados)
      // }, (response) => {
      //   this.error = err.toString()
      // });
    }
  }
}
</script>

<style lang="scss">
</style>
