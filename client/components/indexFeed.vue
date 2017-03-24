<template>
  <div class="container" id="feedResults">
    <div class="row">
      <div class="col-md-12">
        <!-- <div class="is-loading" v-if="loading">
          cargando morro
        </div>
        <div class="is-error" v-if="error">
            {{ error }}
        </div> -->

        <div class="card-columns" v-if="this.items">
            <div class="card" v-for="job in this.items">
              <!-- <img class="card-img-top" src="..." alt="card image cap"> -->
              <router-link :to=" '/trabajos/' + job.id">
                <img class="card-img-top" :src="job.imagen" alt="" v-if="job.imagen">
                <img class="card-img-top" src="../assets/default-img.jpg" alt="" v-else>
              </router-link>
              <div class="card-block">
                <h5 class="card-title">{{ job.titulo }}</h5>
                <router-link :to=" '/trabajos/' + job.id" class="btn btn-primary">
                  Ver anuncio
                </router-link>
              </div>
            </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: null
    // isLoading: true
  },
  data() {
		return{
			loading: true,
      jobs: null,
      error: null
		}
	},
  computed: {
  },
  created () {
  },
  methods: {
  }

}
</script>

<style lang="scss">
//@import '../../node_modules/bootstrap/scss/bootstrap.scss';

#feedResults {
  .card {
    min-height: 100%;
    position: relative;
    img {
      width:100%;
      height:auto;
    }
    .img-container {
      position: relative;
      overflow: auto;
      img {
        height: 200px;

      }
    }
  }
}

// .card-columns {
//   @include media-breakpoint-only(sm) {
//     column-count: 4 !important;
//   }
//   @include media-breakpoint-only(lg) {
//     column-count: 5 !important;
//   }
//   @include media-breakpoint-only(xl) {
//     column-count: 6 !important;
//   }
// }
</style>
