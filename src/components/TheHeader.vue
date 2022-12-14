<!-- searchbar: input + button -->

<template>
    <header class="p-3 flex-shrink-1">
        <div class="d-flex justify-content-between align-items-center">
            <h1>BOOLFLIX</h1>
        
            <div class="search-group">
                <button @click="onSearchClick"><i class="fa-solid fa-magnifying-glass"></i></button>
                <input type="text" v-model="filterMovies" placeholder="Search...">
            </div>
        </div>
    </header>
</template>

<script>
import { store } from '../store';

    export default {
        data() {
            return {
                filterMovies:""
            }
        },
        methods: {
            onSearchClick(){
                this.$emit("searchName", this.filterMovies);

                store.clickSerchBtn = true;
            }
        }
    }
</script>

<style scoped lang="scss">
    @use '../styles/partials/_variables' as *;
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
    
    h1 {
        font-family: 'Bebas Neue', cursive;
        color: $color-primary;
        font-size: 3rem;
    }

    .search-group {
       
        input {
            border:none;
            width: auto;
            background-color: transparent;
            color: #fff;
        }

        button{
            border: none;
            border-radius: 50%;
            background-color: transparent;
            color: #fff;

            &:focus {
                background-color: $color-primary;
            }
        }
    }
</style>