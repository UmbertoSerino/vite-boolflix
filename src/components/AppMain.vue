<script>
import { store } from '../js/store';
import AppSearch from './AppSearch.vue';
import AppResultsCard from './AppResultsCard.vue';
export default {
  name: 'AppMain',
  components: {
    AppSearch,
    AppResultsCard
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
  <div class="icons">
    <i class="fa-solid fa-star"></i>
  </div>
  <AppSearch />
  <AppResultsCard />
</template>

<style lang="scss" scoped></style>
