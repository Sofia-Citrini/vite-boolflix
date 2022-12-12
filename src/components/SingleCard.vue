<!-- card del singolo film/serie -->

<template>
    <ul>
        <li>Titolo: {{keyTitle}}</li>
        <li>Titolo Originale: {{keyTitleOriginal}}</li>
        <li>Lingua: {{movie.original_language}}</li>
        <li>Voto: {{movie.vote_average}}</li>
        <li>
            <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" 
            alt="">
        </li>
    </ul>
</template>

<script>
    export default {
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