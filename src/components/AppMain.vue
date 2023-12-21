<script>
import AppSearch from './AppSearch.vue';
import { store } from '../js/store';
export default {
  name: 'AppMain',
  components: {
    AppSearch
  },
  data() {
    return {
      store,
    };
  },
  methods: {

  },
};
</script>

<template>
  <h1>Main</h1>
  <AppSearch />
  <div v-for="movie in store.moviesList" :key="movie.id">
    <ol>
      <li>
        <h2>Title: {{ movie.title }} </h2>
        <p> Original Title: {{ movie.original_title }}</p>
        <p>Language {{ movie.original_language }}</p>
        <p>Vote Average: {{ movie.vote_average }}</p>
      </li>
    </ol>

  </div>
</template>

<style lang="scss" scoped></style>
