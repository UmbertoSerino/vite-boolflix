<template lang="">
  <div>
    <ol>
      <li v-for="movie in store.moviesList" :key="movie.id">
        <p> <strong>Title:</strong> {{ movie.title }} </p>
        <p v-if="movie.title !== movie.original_title"> 
          <strong>Original Title:</strong> {{ movie.original_title}}</p>
          <div class="container-img">
              <img :src="store.urlImg + movie.poster_path" :alt="`Poster of ${movie.title}`">
          </div>
        <p> <strong>Language:</strong>
          <img v-if="languageFlags[movie.original_language]" :src="getImagePath(languageFlags[movie.original_language])" :alt="`${movie.original_language} flag`">
            <span v-else> {{ movie.original_language}}</span>
        </p>
        <p> <strong>Overview: </strong> {{ movie.overview }} </p>
          <div class="container-star-average">
            <p> <strong>Vote Average: </strong></p>
              <div v-for="star in 5">
                <i v-if="star <= movie.nextAverage" class="fa-solid fa-star"></i>         
                <i v-else class="fa-regular fa-star"></i>
              </div>
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
      languageFlags: {
        it: '../assets/img/it-flag.gif',
        fr: '../assets/img/fr-flag.gif',
        de: '../assets/img/gm-flag.gif',
        es: '../assets/img/sp-flag.gif',
        en: '../assets/img/en-flag.gif',
      },
    }
  },
  methods: {
    getImagePath(imgPath) {
      return new URL(imgPath, import.meta.url).href;

    }
  }
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