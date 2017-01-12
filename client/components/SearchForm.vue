<template>
  <div class="col-md-12">
    <hr>
    <!-- <div class="feed-jobs" v-if="comps"> -->
    <div class="search-box padding-xs-bottom padding-xs-left padding-xs-right" >

      <form action="" class="search-comp">
        <div class="container-fluid">
          <div class="row align-items-center">


              <div class="col-12 col-sm-12 col-lg-4">
                <div class="form-group">
                  <label for="job-input">Palabra claveSS  das</label>
                  <input type="text" name="job-input" value="" class="form-control" placeholder="Jardinero, ingeniero, etc." v-model="titulo">
                  <!-- {{  selectedEstado }}
                  {{  selectedTipo }} -->
                </div>
              </div>

              <div class="col-12  col-sm-6 col-lg-2">
                <selectCategorias>
                </selectCategorias>
              </div>

              <div class="col-12 col-sm-6 col-lg-2">
                <selectEstados>
                </selectEstados>
              </div>

              <div class="col-12 col-sm-6 col-lg-2">
                <selectTipo>
                </selectTipo>
              </div>

              <div class="col-12  col-sm-6 col-lg-2">

                <div class="form-group">
                  <b-button variant="outline-success margin-l-top col-12" @click="searchFn">
                    Buscar
                  </b-button>
                </div>
              </div>
          </div>
        </div>
      </form>
    </div>

  </div>
</template>

<script>
import selectEstados from 'components/selectEstados'
import selectCategorias from 'components/selectCategorias'
import selectTipo from 'components/selectTipo'

export default {
  data() {
		return{
      titulo: null,
      where: null,
      searchResults: []
		}
	},
  computed: {
    // count() {
    //   return this.$store.state.count
    // }

    selectedCategoria () {
      return this.$store.state.search.selectedCategoria
    },
    selectedEstado () {
      return this.$store.state.search.selectedEstado
    },
    selectedTipo () {
      return this.$store.state.search.selectedTipo
    }
  },
  created () {
  },
  watch: {
     //titulo: 'searchFn'
  },
  methods: {
    searchFn () {

      this.where = { $or : [] };

      if(this.titulo) {
        this.where.$or.push({ titulo: { "$regex" : "^"+ this.titulo, "$options" :"i" } } )
      }

      if (this.selectedCategoria) {
        console.log("this.selectedCategoria",this.where.$or);
        this.where.$or.push({rel_categoria: {"$in": [this.selectedCategoria]}})
      }
      if (this.selectedEstado) {
        this.where.$or.push({rel_estado: {"$in": [this.selectedEstado]} })
      }
      if (this.selectedTipo) {
        this.where.$or.push({rel_tipotrabajo: {"$in": [this.selectedTipo]} })
      }

      this.where = JSON.stringify(this.where)

      console.log('las json', this.where)

      // GET /someUrl
      this.$http.get('jobs',{ params: {where: this.where}}).then((response) => {
        console.log('la respuesta', response)
        this.searchResults = response.body.data;
        console.log();

        // this.loading = false
        console.log('chambas', this.searchResults)
      }, (response) => {
        // error callback
        console.log('el error -->', err.toString())
        this.error = err.toString()
      });





      // "rel_categoria" : {
      //         "$in" : "586d736906e9a48305c34a42"
      //       },
      //       "rel_estado" : {
      //         "$in" : "586d736906e9a48305c34a42"
      //       },
      //       "rel_tipotrabajo" : {
      //         "$in" : "586d736906e9a48305c34a42"
      //       },

    }
  },
  components: {
    selectEstados,
    selectCategorias,
    selectTipo
  }
}

</script>

<style lang="scss">
.search-box {
  background: white;
  // color:silver;
  overflow: hidden;
  height: 100%;
  .form-group {
    margin: 0 !important;
    label {
      color: silver;
      font-size: 0.7rem;
      margin:0;
    }
  }
}
</style>
