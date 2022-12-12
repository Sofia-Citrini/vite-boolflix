<!-- searchbar: input + button -->

<template>
    <header>
        <div>
            <input type="text" v-model="filterMovies">
            <button @click="onSearchClick">Cerca</button>
        </div>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                filterMovies:""
            }
        },
        methods: {
            onSearchClick(){
                this.$emit("searchName", this.filterMovies);
            }
        }
    }
</script>