<!-- stampa lista dei film -->

<template>
    <section>
        <div v-for="(element, i) in store.movies">
            <SingleCard :movie="element"></SingleCard>
        </div>
    </section>
</template>

<script>
import SingleCard from "./SingleCard.vue";

import {store, fetchMovies} from "../store";

export default {
    components: {SingleCard},
    data() {
        return {
            store
        }
    },
    created(){
        fetchMovies()
    }
    
}

</script>