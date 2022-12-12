<!-- card del singolo film/serie -->

<template>
    <ul>
        <li>Titolo: {{movie.title}}</li>
        <li>Titolo Originale: {{movie.original_title}}</li>
        <li>Lingua: {{movie.original_language}}</li>
        <li>Voto: {{movie.vote_average}}</li>
    </ul>
</template>

<script>
    export default {
        props: {
            movie: {
                type: Object,
                required: true
            }
        }
    }

</script>