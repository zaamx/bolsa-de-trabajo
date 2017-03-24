<template>
  <div class="margin-l-top">
    <!-- <div class="feed-jobs" v-if="comps"> -->
    <div class="search-box  padding-xs-left padding-xs-right" >

      <form action="" class="search-comp">
        <div class="container-fluid">
          <div class="row align-items-center">


              <div class="col-12 col-sm-12 col-lg-4">
                <div class="form-group">
                  <label for="job-input">Palabra clave:</label>
                  <input type="text" name="job-input" id="job-input" autofocus value="" class="form-control" placeholder="Jardinero, ingeniero, etc." v-model="titulo">
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
                  <b-button variant="success" style="width:100%;margin-top:2px;" @click="searchFn">
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
      where: null
		}
	},
  computed: {
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
        this.where.$or.push({ titulo: { "$regex" : this.titulo, "$options" :"i" } } )
      }

      if (this.selectedCategoria) {
        this.where.$or.push({rel_categoria: {"$in": [this.selectedCategoria]}})
      }
      if (this.selectedEstado) {
        this.where.$or.push({rel_estado: {"$in": [this.selectedEstado]} })
      }
      if (this.selectedTipo) {
        this.where.$or.push({rel_tipotrabajo: {"$in": [this.selectedTipo]} })
      }

      this.where = JSON.stringify(this.where)

      this.$store.commit('SETPARAMETROSBUSQUEDA', this.where)

      console.log('parametros', this.$store.state.search.searchParams)

      this.$router.push({path: 'buscar'})
    },
    clean () {
      this.where = { $or : [] };
    }
  },
  beforeDestroy() {
    this.clean()
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
  border-radius: 2px;
  box-shadow: 4px silver;
box-shadow: 0px 1px 7px 0px rgba(0,0,0,0.50);

  .col-12 {
    border-right:1px solid silver ;
    &:last-child {
      border-right: none;
    }
  }
  .form-group {
    margin: 0 !important;
    label {
      color: silver;
      font-size: 0.7rem;
      margin:0;
    }
    .form-control {
      border:none;
    }
  }
}
</style>
