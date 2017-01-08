<template>
  <div class="col-md-12">
    <hr>
    <!-- <div class="feed-jobs" v-if="comps"> -->
    <div class="feed-jobs" >

      <form action="" class="search-comp">
        <div class="col-md-4">
          <div class="form-group">
            <label for="job-input">Palabra claveSS  das</label>
            <input type="text" name="job-input" value="" class="form-control" placeholder="Jardinero, ingeniero, etc." v-model="titulo">
            <br>
            {{ titulo }}
            {{  selectedCategoria }}
            {{selectedTipo}}
            {{selectedEstado}}
            <!-- {{  selectedEstado }}
            {{  selectedTipo }} -->
          </div>
        </div>

        <div class="col-md-2">
          <selectCategorias>
          </selectCategorias>
        </div>

        <div class="col-md-2">
          <selectEstados>
          </selectEstados>
        </div>

        <div class="col-md-2">
          <selectTipo>
          </selectTipo>
        </div>

        <div class="col-md-2">
          <label for=""> &nbsp;</label>
          <div class="form-group">
              <a @click="searchFn" class="btn btn-success">Buscar</a>
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
    // titulo: 'searchFn'
  },
  methods: {
    searchFn () {
      if (this.titulo) {
        this.where = {
          "$and" : [
              {"titulo": { "$regex": "*"+ this.titulo +"*", "$options":"i"} }

          ]
        }

        console.log('el titulo', this.where)
      }
      if (this.selectedCategoria) {
        this.where.$and.push({rel_categoria: {$in: [this.selectedCategoria]}})
      }
      if (this.selectedEstado) {
        this.where.$and.push({rel_estado: {$in: [this.selectedEstado]} })
      }
      if (this.selectedTipo) {
        this.where.$and.push({rel_tipotrabajo: {$in: [this.selectedTipo]} })
      }

      this.where = JSON.stringify(this.where)

      console.log('las json', this.where)

      // GET /someUrl
      this.$http.get('jobs',{ params: {where: this.where}}).then((response) => {
        console.log('la respuesta', response)
        this.searchResults = response.body.data
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







// var where  = {"titulo": { "$regex" : ".*"+$scope.item.name+".*", $options: "i"  }}
// {
//   "$and" : [
//     {
//       "rel_categoria" : {
//         "$in" : "586d736906e9a48305c34a42"
//       },
//       "rel_estado" : {
//         "$in" : "586d736906e9a48305c34a42"
//       },
//       "rel_tipotrabajo" : {
//         "$in" : "586d736906e9a48305c34a42"
//       },
//       {
//         "$regex": "*Star*",
//         "$options":"i"\}
//       }
//     }
//   ]
// }


//where=\{"$or":\[\{"actions.rating.total":\{"$gt":4\}\},\{"title":"Star Wars"\}\]\}'

</script>

<style lang="scss">

.search-wrapper {
    display: block;
    width: 100%;
    min-height: 200px;
    background: silver;
}
// @import '../stylesheets/mixins/_spacing.scss';

.counter {
  margin: 100px auto;
  border-radius: 3px;
  width: 200px;
  height: 200px;
  text-align: center;
  line-height: 200px;
  font-size: 5rem;
  background-color: #f0f0f0;
  user-select: none;
}
</style>
