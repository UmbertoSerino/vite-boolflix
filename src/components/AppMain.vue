<script>
import { store } from '../js/store';
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
  <article class="container text-white my_wrapper">
    <AppResultsCard />
  </article>
</template>

<style lang="scss" scoped>
article.my_wrapper {
  padding-top: 150px;
}
</style>