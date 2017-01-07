<template>
  <div class="col-md-12">
    <hr>
    <!-- <div class="feed-jobs" v-if="comps"> -->
    <div class="feed-jobs" >

      <form action="" class="search-comp">
        <div class="col-md-4">
          <div class="form-group">
            <label for="job-input">Palabra clave</label>
            <input type="text" name="job-input" value="" class="form-control" placeholder="Jardinero, ingeniero, etc." v-model="busquedaTxt">
            <br>
            {{ busquedaTxt }}
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
              <a href="#" class="btn btn-success">Buscar</a>
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
      busquedaTxt: null
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
  methods: {

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
