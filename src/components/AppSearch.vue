<template>
    <div class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" v-model="searchred" @keyup.enter="store.getMoviesList(searchred)">
        <button class="btn btn-danger" type="submit" @click="store.getMoviesList(searchred)">Search</button>
    </div>
</template>

<script>
import { store } from '../js/store';
export default {
    name: 'AppSearch',
    data() {
        return {
            store,
            searchred: '',
        };
    },
};
</script>
  
<style lang="scss" scoped></style>
  