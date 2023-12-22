<template lang="">
  <div>
    <ol>
      <li v-for="movie in store.moviesList" :key="movie.id">
        <p> <strong>Title:</strong> {{ movie.title }} </p>
        <p v-if="movie.title !== movie.original_title"> <strong>Original Title:</strong> {{ movie.original_title}}</p>
        <p> <strong>Language:</strong>
          <img v-if="movie.original_language === 'it'" src="../assets/img/it-flag.gif" alt="italian flag">
          <img v-else-if="movie.original_language === 'fr'" src="../assets/img/fr-flag.gif" alt="france flag">
          <img v-else-if="movie.original_language === 'gm'" src="../assets/img/gm-flag.gif" alt="german flag">
          <img v-else-if="movie.original_language === 'es'" src="../assets/img/sp-flag.gif" alt="spanish flag">
          <img v-else-if="movie.original_language === 'uk'" src="../assets/img/uk-flag.gif" alt="uk flag">
          <p v-else> {{ movie.original_language}}</p>
        </p>
        <p> <strong>Overview: </strong> {{ movie.overview }} </p>
          <div class="container-star-average">
            <p> <strong>Vote Average: </strong></p>
              <div v-for="star in 5">
                <i v-if="star <= movie.nextAverage" class="fa-solid fa-star"></i>         
                <i v-else class="fa-regular fa-star"></i>
              </div>
            </div>
          <div class="container-img">
              <img :src="store.urlImg + movie.poster_path" :alt="`Poster of ${movie.title}`">
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

div.container-star-average {
  display: flex;
  align-items: center;

  i {
    color: gold;
  }
}
</style>