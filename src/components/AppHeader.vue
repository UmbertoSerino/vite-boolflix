<template>
    <header>
        <nav class="navbar navbar-expand-lg fixed-top">
            <div class="container">
                <a class="navbar-brand" href="#"> <img class="logo-brand" src="../assets/img-logo/Brand Netflix logo.jpg" alt="logo brand"></a>
                <div class="navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Serie TV</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">Film</a>
                        </li>
                    </ul>
                </div>
                <AppSearch />
            </div>
        </nav>

    </header>
</template>

<script>
import { store } from '../js/store';
import AppSearch from './AppSearch.vue';

export default {
    name: 'AppHeader',
    components: {
        AppSearch,
    },
    data() {
        return {
            store
        };
    },
}
</script>

<style lang="scss" scoped>
@use '../style/general.scss' as*;
@use '../style/partials/variables' as*;

header {
    background-color: $bg-color-big;
    height: 75px;
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        color: white;
    }

}

img.logo-brand {
    height: 50px;
}
</style>

<!-- $bg-color-big -->