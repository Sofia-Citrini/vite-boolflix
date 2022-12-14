<template>
  <TheHeader @searchName="onSearch"></TheHeader>
  <TheMain></TheMain>

  <footer class="py-4 flex-shrink-0"></footer>

</template>

<script>
  import TheHeader from "./components/TheHeader.vue";
  import TheMain from "./components/TheMain.vue";

  import {store, fetchMovies, fetchSeries} from "./store";

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

        fetchMovies();
        fetchSeries();
      }
    },
  }

</script>

<style lang="scss">
  @use "./styles/general.scss";
  @use "./styles/partials/variables" as *;

  .page{
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: $background-color;
    background-repeat: no-repeat;
    overflow: auto;
  }
  
</style>
