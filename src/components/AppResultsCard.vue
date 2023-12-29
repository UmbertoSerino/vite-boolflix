<template lang="">
  <div>
    <p>result: <span>
      {{ searchResult() }}
    </span>
    <span v-if="searchResult() == 0">
      - No data found. Please perform a new search.
    </span>
    <span v-if="searchResult() == 'Gaetano Perrone' ">
      I did not find any "Gaetano Perrone" please see in the list horror or crazy list
    </span>
  </p>
  </div>
<article enter-class="d-flex">
  <div class="card text-bg-dark my_wrapper" v-for="movie in store.moviesList" :key="movie.id">
    <img class="card-img my_wrapper-img" :src="store.urlImg + movie.poster_path" :alt="`Poster of ${movie.title}`">
    <div class="my_container-card">
      <h5 class="card-title">Title: {{ movie.title }} </h5>
      <h5 v-if="movie.title !== movie.original_title"> 
            Original Title:{{ movie.original_title}}</h5>
    </div>
    <!-- Altro -->
    <ul class="list-group list-group-flush my_list">
      <li class="list-group-item">
        <div class="d-flex">
          <div>
            <p>
              Language:
            </p>
          </div>
          <div class="container-flag">
            <img v-if="languageFlags[movie.original_language]" :src="getImagePath(languageFlags[movie.original_language])" :alt="`${movie.original_language} flag`">
                <span v-else> {{ movie.original_language}}</span>
          </div>
        </div>   
      </li>
      <li class="list-group-item">
        Overview:  {{ movie.overview }} 
      </li>
      <li class="list-group-item">          
        <div class="container-star-average">
          <p> Vote Average: </p>
            <div v-for="star in 5">
              <i v-if="star <= movie.nextAverage" class="fa-solid fa-star"></i>         
              <i v-else class="fa-regular fa-star"></i>
            </div>
        </div>
      </li>
    </ul>
  </div>
</article>

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
        it: '../assets/img-language-flags/it-flag.gif',
        fr: '../assets/img-language-flags/fr-flag.gif',
        de: '../assets/img-language-flags/gm-flag.gif',
        es: '../assets/img-language-flags/sp-flag.gif',
        en: '../assets/img-language-flags/en-flag.gif',
      },
    }
  },
  methods: {
    getImagePath(imgPath) {
      return new URL(imgPath, import.meta.url).href;

    },
    searchResult() {
      return this.store.moviesList.length;
    }
  }
}
</script>


<style lang="scss" scoped>
@use '../style/general.scss' as*;
@use '../style/partials/variables' as*;

article {
  display: flex;
  overflow-y: auto;

  div.my_wrapper {
    min-width: 250px;
    max-width: 220px;
    margin-right: 1rem;
    position: relative;


    .my_container-card {
      background-color: $bg-color;
      font-size: .3rem;
      margin: 1rem;
      padding: 1rem;
      position: absolute;
    }

    img.my_wrapper-img {
      width: 100%;
    }


    ul.my_list {
      top: 0;
      left: 0;
      display: none;
      opacity: 0;
      transition: display 1s, opacity 15s linear;
    }

    &:hover ul.my_list {
      display: block;
      opacity: 1;
      transition: display 1s, opacity 15s linear;
    }
  }

  div.container-flag {
    width: 25px;
    height: 18px;
    margin-left: .5rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
}



// star
div.container-star-average {
  display: flex;
  align-items: center;

  i {
    color: gold;
  }
}
</style>