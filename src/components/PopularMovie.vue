<template>
    <section class="py-3" :class="(store.clickSerchBtn === true) ? 'd-none' : 'd-block'">
        <div class="container">
            <div class="row g-3">
                <div class="title">FILM PIÚ POPOLARI</div>
                <p>Elenco degli attuali film popolari su BOOLFLIX. Questo elenco si aggiorna quotidianamente.</p>

                <div class="col-4 col-md-3 col-lg-2"
                    v-for="(popMovie, i) in store.popularMovies">
                    <SingleCard :movie="popMovie"></SingleCard>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
import { store } from "../store";
import SingleCard from "./SingleCard.vue";

export default {
    data() {
        return {
            store
        };
    },
    components: { SingleCard }
}

</script>

<style scoped lang="scss">
@use "../styles/partials/utilities" as *;
@use "../styles/partials/variables" as *;

p {
    color: #fff
}
</style>