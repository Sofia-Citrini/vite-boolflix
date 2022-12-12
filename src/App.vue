<template>
  <TheHeader @searchName="onSearch"></TheHeader>

  <TheMain></TheMain>
  
</template>

<script>
  import TheHeader from "./components/TheHeader.vue";
  import TheMain from "./components/TheMain.vue";

  import {store, fetchMovies} from "./store";

  export default {
    components: {TheHeader, TheMain},
    data() {
      return {
        store
      }
    },
    methods: {
      onSearch(searchMovie){
        this.store.searchText = searchMovie;

        fetchMovies()
      }
    },
  }

</script>

<style>
</style>
