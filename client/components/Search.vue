<template>
  <div class="search-wrapper padding-xl-top margin-l-bottom">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <h1 class="display-4 text-white text-uppercase">Bolsa de trabajo</h1>
            <p class="lead text-white">
              La mejor manera de encontrar u ofrecer trabajo a la comunidad hispana
            </p>

            <router-link to="/publicar-anuncio" class="btn btn-primary btn-lg margin-xs">
              Ofrece tus servicios aquí
            </router-link>
          </div>
          <!-- <div class="col-md-4">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/UxxvsZ6EDPo" allowfullscreen></iframe>
            </div>
          </div> -->
        </div>
        <div class="row">
          <div class="col-md-12">
            <p class="text-muted text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, nam?
            </p>
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
.embed-responsive {
  box-shadow: 0px 1px 7px 0px rgba(0,0,0,0.50);
}
.search-wrapper {
    display: block;
    width: 100%;
    min-height: 350px;
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
      opacity: 0.85;
      background:#000;
      // background-image: linear-gradient(-266deg, #B4EC51 0%, #53A0FD 47%, #3023AE 99%);
      z-index: 0;
    }

}
</style>
