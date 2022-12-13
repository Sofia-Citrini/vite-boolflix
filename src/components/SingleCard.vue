<!-- card del singolo film/serie -->

<template>
    <ul>
        <li>Titolo: {{keyTitle}}</li>
        <li>Titolo Originale: {{keyTitleOriginal}}</li>
        <li>Lingua: {{movie.original_language}}</li>
        <li>Voto: {{movie.vote_average}}</li>
        <li v-if="movie.poster_path !== null">
            <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" 
            alt="">
        </li>
        <li v-else>No poster image</li>
        <li><lang-flag :iso="movie.original_language"></lang-flag></li>
    </ul>
</template>

<script>
import LangFlag from 'vue-lang-code-flags';

    export default {
        components: {LangFlag},
        props: {
            movie: {
                type: Object,
                required: true
            }
        },
        computed: {
            keyTitle(){
                if (this.movie.title){
                    return this.movie.title;
                } else if(this.movie.name) {
                    return this.movie.name;
                }
            },
            keyTitleOriginal(){
                if (this.movie.original_title){
                    return this.movie.original_title;
                } else if(this.movie.original_name) {
                    return this.movie.original_name
                }
            }
        }
    }

</script>

<style scoped lang="scss">
</style>