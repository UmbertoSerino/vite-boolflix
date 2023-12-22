<template lang="">
  <div>
    <ol>
      <li v-for="movie in store.moviesList" :key="movie.id">
        <p> <strong>Title:</strong> {{ movie.title }} </p>
        <p v-if="movie.title !== movie.original_title"> <strong>Original Title:</strong> {{ movie.original_title}}</p>
        <p> <strong>Language:</strong> {{ movie.original_language }}</p>
        <p> <strong>Overview: </strong> {{ movie.overview }} </p>
        <p> <strong>Vote Average: </strong>
          <div>
            <i v-for="star in movie.nextAverage" class="fa-solid fa-star"></i>         
          </div>
          <i class="fa-regular fa-star"></i>
          {{ movie.nextAverage }}</p>
        <div class="container-img">
            <img :src="store.urlImg + movie.poster_path" alt="">
        </div>
      </li>
    </ol>
  </div>
</template>
<script>
import { store } from '../js/store';
export default {
  name: 'AppResultsCard',
  data() {
    return {
      store,
      searchred: '',
    }

  },
}
</script>
<style lang="scss" scoped>
div.container-img {
  width: 150px;

  img {
    width: 100%;
  }
}

i {
  color: gold;
}
</style>