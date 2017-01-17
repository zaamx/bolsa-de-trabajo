<template>
  <div class="image-wrapper">
    <div class="loading-img d-flex align-items-center" v-if="loading">
      <span>
        Cargando
      </span>
    </div>
    <div class="is-image" v-if="placeImg">
      <img  :src="imagen" class="img-fluid img-thumbnail" :alt="alt" v-if="imagen">
      <img src="http://placehold.it/400x400" alt="" class="card-img-top img-fluid" v-else>
    </div>
  </div>
</template>

<script>
export default {
  name: 'carga',
  props: {
    imagen: null,
    alt: ''
  },
  data() {
    return {
      loading: true,
      placeImg: false
    }
  },
  mounted () {
    this.loadImage()
  },
  methods: {
    loadImage() {
      setTimeout(() => {
        this.placeImg = true
        this.loading = false
      }, 400)
    }
  }
}
</script>
