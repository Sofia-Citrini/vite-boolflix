<!-- card del singolo film/serie -->

<template>
    <div class="my-card">
        <div class="img-container">
            <img v-if="movie.poster_path !== null" 
                :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`"  alt="" class="img-fluid">
            <img v-else
                src="https://images.pexels.com/photos/6373688/pexels-photo-6373688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-fluid">
        </div>
        <div class="my-card-body p-2">
            <div class="fw-bolder text-uppercase text-center py-2">{{keyTitle}}</div>
            <div class="py-2">
                <div class="text">Titolo originale </div>
                <div class="lh-1">{{keyTitleOriginal}}</div>
            </div>
            <div class="py-2">
                <div class="text">Voto</div>
                <div>{{ratingStar}}</div>
            </div>
            <div class="py-2">
                <div class="text" :class="(movie.original_language === '') ? 'd-none' : 'd-block'">Lingua</div>
                <div><lang-flag :iso="movie.original_language"></lang-flag></div>
            </div>
            <div class="py-2" :class="(movie.overview === '') ? 'd-none' : 'd-block'">
                <div class="text">Overview</div>
                <p>{{movie.overview}}</p>
            </div>
            
            <!-- <ul>
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
                <li><div><i class="fa-regular fa-star"></i></div></li>
            </ul> -->
        </div>
    </div>
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
            },
            ratingStar(){
                let vote = this.movie.vote_average
                let partialRating = (vote / 2)
                let rating = Math.round(partialRating);
        
                return rating
            }
        }
    }

</script>

<style scoped lang="scss">
@use "../styles/partials/variables" as *;
    .my-card {
        position: relative;

        .my-card-body{
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            overflow-y: auto;
            display: none;
            color: #fff;

            .text{
                font-size: .7rem;
                font-weight: 600;
            }

            p {
                font-size: .9rem;
                line-height: 1rem;
                text-align: justify;
            }
        }
    }

    .my-card:hover .my-card-body{
        display: block;
        background-color:rgba($color-secondary, .8);
    }


</style>