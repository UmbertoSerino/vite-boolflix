<script setup>
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
@use './style/general.scss' as*;
@use '../node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss' as*
</style>
