<!-- stampa lista dei film -->

<template>
    <PopularMovie></PopularMovie>
    
    <section :class="(store.clickSerchBtn === false) ? 'd-none' : 'd-block'">
        <div class="container pb-5">

            <div class="title">FILM</div>
            <div class="alert alert-danger" role="alert" 
                v-show="store.movies.length === 0">
                Spiacenti, non ci sono risultati! Cerca per trovare i tuoi film preferiti.
            </div>
            <div class="row g-3">
                <div class="col-4 col-md-3 col-lg-2"
                    v-for="(element, i) in store.movies">
                    <SingleCard :movie="element"></SingleCard>
                </div>
            </div>

            <div class="pt-5 title">SERIE TV</div>
            <div class="alert alert-danger" role="alert" 
                v-show="store.movies.length === 0">
                Spiacenti, non ci sono risultati! Cerca per trovare le tue serie preferite.
            </div>
            <div class="row g-3">
                <div class="col-4 col-md-3 col-lg-2"
                    v-for="(element, i) in store.series">
                    <SingleCard :movie="element"></SingleCard>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import SingleCard from "./SingleCard.vue";
    import PopularMovie from "./PopularMovie.vue"
    import {store, fetchPopularMovie} from "../store";

    export default {
        components: {SingleCard, PopularMovie},
        data() {
            return {
                store
            }
        },
        created(){
            fetchPopularMovie();
        }
    }
</script>

<style scoped lang="scss">
    @use '../styles/partials/utilities' as *;

    section{
        flex-grow: 1;
        overflow-y: auto;
        overflow-x: hidden;
    }
</style>
