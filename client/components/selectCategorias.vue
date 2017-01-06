<template>
  <div class="">

    <div class="is-loading" v-if="loading">
      cargando buscador
    </div>

    <div class="is-error" v-if="error">
        {{ error }}
    </div>

    <div class="form-group" v-if="categorias">
      <label for="cat-selector">Categorias</label>
      <select class="form-control" name="cat-selector">
        <option :value=" categoria.id "  v-for="categoria in this.categorias">
          {{ categoria.titulo }}
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
      categorias: null
      // estados: null
		}
	},
  computed: {
    // count() {
    //   return this.$store.state.count
    // }
  },
  created () {
    this.getCategorias()
  },
  methods: {
    getCategorias () {
      this.error = this.categorias = null

      // Cambiar para
      if (this.categorias === null) {
        this.categorias = this.$store.state.categorias.data
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
