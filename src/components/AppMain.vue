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
</template>

<style lang="scss" scoped></style>
