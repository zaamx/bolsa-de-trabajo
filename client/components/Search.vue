<template>
  <div class="search-wrapper padding-l margin-l-bottom">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <h1 class="display-4 text-white">Bolsa de trabajo</h1>
            <p class="lead text-white">
              La mejor manera de encontrar u ofrecer trabajo a la comunidad hispana
            </p>

            <router-link to="/publicar-anuncio" class="btn btn-info col-6 margin-xs">
              Publicar anuncio
            </router-link>
          </div>
          <div class="col-md-4">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/UxxvsZ6EDPo" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">

            <SearchForm>
            </SearchForm>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
import SearchForm from 'components/SearchForm'
export default {
  data() {
		return{
		}
	},
  components: {
    SearchForm
  }
}
</script>

<style lang="scss">

.search-wrapper {
    display: block;
    width: 100%;
    min-height: 200px;
    // background: silver;
    // opacity: 0.63;
    background-image: url('../assets/contractor-checklist.jpg');
    background-size: cover;
    position: relative;
    // z-index: -1;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left:0;
      width: 100%;
      height: 100%;
      opacity: 0.63;
      background-image: linear-gradient(-266deg, #3023AE 0%, #53A0FD 47%, #B4EC51 99%);
      z-index: 0;
    }

}
</style>
