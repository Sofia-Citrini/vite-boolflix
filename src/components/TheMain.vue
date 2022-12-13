<!-- stampa lista dei film -->

<template>
    <section>
        <div v-for="(element, i) in store.movies">
            <SingleCard :movie="element"></SingleCard>
        </div>
        <div v-for="(element, i) in store.series">
            <SingleCard :movie="element"></SingleCard>
        </div>
    </section>
</template>

<script>
import SingleCard from "./SingleCard.vue";

import {store} from "../store";

export default {
    components: {SingleCard},
    data() {
        return {
            store
        }
    }
}

</script>