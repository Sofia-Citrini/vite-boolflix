<template>
    <section class="py-3" :class="(store.clickSerchBtn === true) ? 'd-none' : 'd-block'">
        <div class="container">
            <div class="row g-3">
                <div class="title">FILM PIÚ POPOLARI</div>
                <p>Elenco degli attuali film popolari su BOOLFLIX. Questo elenco si aggiorna quotidianamente.</p>

                <div class="col-4 col-md-3 col-lg-2"
                    v-for="(popMovie, i) in store.popularMovies">
                    <div class="my-card">
                        <div class="img-container">
                            <img v-if="popMovie.poster_path !== null"
                                :src="`https://image.tmdb.org/t/p/w342${popMovie.poster_path}`" alt=""
                                class="img-fluid">
                            <img v-else
                                src="https://images.pexels.com/photos/6373688/pexels-photo-6373688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                class="img-fluid">
                        </div>
                        <div class="my-card-body p-2">
                            <div class="fw-bolder text-uppercase text-center py-2">{{ popMovie.title }}</div>
                            <div class="py-2">
                                <div class="text">Titolo originale </div>
                                <div class="lh-1">{{ popMovie.original_title }}</div>
                            </div>
                            <div class="py-2" v-show="popMovie.overview !== ''">
                                <div class="text">Overview</div>
                                <p>{{ popMovie.overview }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
import { store } from "../store";
export default {
    data() {
        return {
            store
        }
    }
}

</script>

<style scoped lang="scss">
@use "../styles/partials/utilities" as *;
@use "../styles/partials/variables" as *;

p {
    color: #fff
}
</style>