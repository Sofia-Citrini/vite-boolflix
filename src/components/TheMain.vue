<!-- stampa lista dei film -->

<template>
    <section>
        <div class="container pb-5">
            <div class="title">FILM</div>
            <div class="row g-3">
                <div class="col-4 col-md-3 col-lg-2"
                    v-for="(element, i) in store.movies">
                    <SingleCard :movie="element"></SingleCard>
                </div>
            </div>

            <div class="pt-5 title">SERIE TV</div>
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

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

    .title{
        font-family:'Bebas Neue', cursive;
        font-size: 2rem;
        color: #fff;
    }

    .container{
        min-height: 100%;
    }
</style>
