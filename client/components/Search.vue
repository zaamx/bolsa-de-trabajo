<template>
  <div class="search-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <h1>Bolsa de trabajo</h1>
            <p class="lead">
              La mejor manera de encontrar u ofrecer trabajo a la comunidad hispana
            </p>
            <router-link to="/publicar-anuncio" class="btn btn-info">
              Publicar anuncio
            </router-link>
          </div>
          <div class="col-md-4">
              video
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
