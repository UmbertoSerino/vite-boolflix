<template lang="">
  <div>
    <ol>
      <li v-for="movie in store.moviesList" :key="movie.id">
        <h2 v-if="store.moviesList.length === 0">Error, please search another movie</h2>
        <p> <strong>Title:</strong> {{ movie.title }} </p>
        <h2 v-if="movie.title !== movie.original_title"> <strong>Original Title:</strong> {{ movie.original_title}}</h2>
        <p> <strong>Language:</strong> {{ movie.original_language }}</p>
        <p> <strong>Overview: </strong> {{ movie.overview }} </p>
        <p> <strong>Vote Average: </strong> {{ movie.vote_average }}</p>
        <img :src="movie.poster_path" alt="">
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
        };
    },
}
</script>
<style lang="scss" scoped></style>