<script>
import { store } from '../js/store';
import AppSearch from './AppSearch.vue';
import AppResultsCard from './AppResultsCard.vue';
export default {
  name: 'AppMain',
  components: {
    AppResultsCard,
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
  <h1 class="">Main</h1>
  <AppSearch />
  <AppResultsCard />
</template>

<style lang="scss" scoped></style>
