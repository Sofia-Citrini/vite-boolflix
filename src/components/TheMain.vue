<!-- stampa lista dei film -->

<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-2"
                    v-for="(element, i) in store.movies">
                    <SingleCard :movie="element"></SingleCard>
                </div>
            </div>

            <div class="row">
                <div class="col-2"
                    v-for="(element, i) in store.series">
                    <SingleCard :movie="element"></SingleCard>
                </div>
            </div>
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
