<script setup>
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
@use '../node_modules/bootstrap/scss/bootstrap.scss' as*;
@use '../node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss' as*;
@use './style/general.scss' as*;
</style>
