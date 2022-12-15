<!-- card del singolo film/serie -->

<template>
    <div class="my-card">
        <div class="img-container">
            <img v-if="movie.poster_path !== null"
                :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" alt="" class="img-fluid">
            <img v-else
                src="https://images.pexels.com/photos/6373688/pexels-photo-6373688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                class="img-fluid">
        </div>
        <div class="my-card-body p-2">
            <div class="fw-bolder text-uppercase text-center py-2">{{ keyTitle }}</div>
            <div class="py-2">
                <div class="text">Titolo originale </div>
                <div class="lh-1">{{ keyTitleOriginal }}</div>
            </div>
            <div class="py-2" v-show="ratingStar !== 0">
                <div class="text">Voto</div>
                <div class="d-flex">
                    <i v-for="star in 5" class="fa-star star" :class="(star <= ratingStar) ? 'fa-solid' : 'fa-regular'"></i>
                </div>
            </div>
            <div class="py-2" v-show="movie.original_language !== ''">
                <div class="text">Lingua originale</div>
                <div><lang-flag :iso="movie.original_language"></lang-flag></div>
            </div>
            <div class="py-2" v-show="movie.overview !== ''">
                <div class="text">Overview</div>
                <p>{{ movie.overview }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import LangFlag from 'vue-lang-code-flags';

export default {
    components: { LangFlag },
    props: {
        movie: {
            type: Object,
            required: true
        }
    },
    computed: {
        keyTitle() {
            // if (this.movie.title) {
            //     return this.movie.title;
            // } else if (this.movie.name) {
            //     return this.movie.name;
            // }
            return this.movie.title ?? this.movie.name
        },
        keyTitleOriginal() {
            // if (this.movie.original_title) {
            //     return this.movie.original_title;
            // } else if (this.movie.original_name) {
            //     return this.movie.original_name
            // }
            return this.movie.original_title ?? this.movie.original_name
        },
        ratingStar() {
            const vote = Math.round(this.movie.vote_average / 2);

            return vote
        }
    }
}

</script>

<style scoped lang="scss">
@use "../styles/partials/variables" as *;
@use '../styles/partials/utilities' as *;

    .fa-star{
        color: $color-primary;
    }
</style>