<template>
  <div class="">

    <div class="is-loading" v-if="loading">
      cargando buscador
    </div>

    <div class="is-error" v-if="error">
        {{ error }}
    </div>

    <div class="form-group" v-if="tipoTrabajo">
      <label for="cat-selector">Tipo de trabajo:</label>
      <select class="form-control" name="cat-selector" v-model="selectedTipo">
        <option :value=" tipoTrabajo._id "  v-for="tipoTrabajo in this.tipoTrabajo">
          {{ tipoTrabajo.titulo }}
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
      tipoTrabajo: null,
      selectedTipo: null
      // estados: null
		}
	},
  computed: {
    // count() {
    //   return this.$store.state.count
    // }
  },
  watch: {
    selectedTipo: 'pushTipoStore'
  },
  created () {
    this.getTipoTrabajo()
  },
  methods: {
    getTipoTrabajo () {
      this.error = this.tipoTrabajo = null

      // Cambiar para
      if (this.tipoTrabajo === null) {
        this.tipoTrabajo = this.$store.state.tipotrabajo
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
    },
    pushTipoStore () {
      this.$store.commit('ACTUALIZATIPO', this.selectedTipo)
      console.log('Tipo en store =', this.$store.state.search.selectedTipo)
    }
  }
}
</script>

<style lang="scss">
</style>
