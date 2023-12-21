<template lang="">
  <div>
    <ol>
      <li v-for="movie in store.seriesList" :key="movie.id">
        <h2>Title: {{ movie.original_name }} </h2>
        <p> Original Title: {{ movie.original_title }}</p>
        <p>Language: {{ movie.original_language }}</p>
        <p>Vote Average: {{ movie.vote_average }}</p>
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