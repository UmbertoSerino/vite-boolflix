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
    searchFilms() {
      this.store.getFilmsList();
    },
  },
};
</script>

<template>
  <h1>Main</h1>
  <AppSearch />
  <div v-for="movie in store.moviesList">
    <p>{{ movie.title }}</p>

  </div>
</template>

<style lang="scss" scoped></style>
