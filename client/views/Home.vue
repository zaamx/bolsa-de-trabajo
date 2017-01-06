<template>
  <div class="page">
    <Search>
    </Search>
    <!-- <indexFeed>
    </indexFeed> -->

  </div>
</template>

<script>
import Search from 'components/Search'
import indexFeed from 'components/indexFeed'
export default {
	data() {
		return{
			contenido: 'Hello'
		}
	},
  components: {
    Search,
    indexFeed
  }
}
</script>
