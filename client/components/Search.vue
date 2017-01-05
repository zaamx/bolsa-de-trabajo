<template>
  <div class="search-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <h1>Bolsa de trabajo</h1>
            <p class="lead">
              La mejor manera de encontrar u ofrecer trabajo a la comunidad hispana
            </p>

            <a href="#" class="btn btn-info">
                Publicar anuncio
            </a>
          </div>
          <div class="col-md-4">
              video
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <form action="" class="search-comp">
              <div class="col-md-4">
                <div class="form-group">
                  <label for="job-input">Palabra clave</label>
                  <input type="text" name="job-input" value="" class="form-control" placeholder="Jardinero, ingeniero, etc.">
                </div>
              </div>
              <div class="col-md-2">
                <div class="form-group">
                  <label for="cat-selector">Palabra clave</label>
                  <select class="form-control" name="cat-selector">
                    <option value="">opciones</option>
                    <option value="">opciones</option>
                    <option value="">opciones</option>
                    <option value="">opciones</option>
                    <option value="">opciones</option>
                  </select>
                </div>
              </div>
              <div class="col-md-2">
                <div class="form-group">
                  <label for="cat-selector">Estado</label>
                  <select class="form-control" name="cat-selector">
                    <option value="">estado</option>
                    <option value="">estado</option>
                    <option value="">estado</option>
                    <option value="">estado</option>
                    <option value="">estado</option>
                  </select>
                </div>
              </div>
              <div class="col-md-2">
                <a href="#" class="btn btn-success">Buscar</a>
              </div>
            </form>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count
    }
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
