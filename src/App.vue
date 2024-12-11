<template>
  <div id="app">
    <MovieAppHeader @search="filterMovies" />
    <MovieBox :movies="filteredMovies" />
    <MovieAppFooter />
  </div>
</template>

<script>
import MovieAppHeader from "./components/MovieAppHeader.vue";
import MovieBox from "./components/MovieBox.vue";
import MovieAppFooter from "./components/MovieAppFooter.vue";

export default {
  name: "App",
  components: {
    MovieAppHeader,
    MovieBox,
    MovieAppFooter,
  },
  data() {
    return {
      movies: [],
      searchQuery: "",
      filteredMovies: [],
    };
  },
  methods: {
    async fetchMovies() {
      try {
        const response = await fetch(`${process.env.VUE_APP_API_BASE_URL}`);
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();
        this.movies = data;
        console.log("Fetched Movies:", this.movies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    },

    filterMovies(query) {
      this.searchQuery = query;
      this.filteredMovies = this.movies.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
    },
  },
  // Now I can fetch movies when the component is mounted
  mounted() {
    this.fetchMovies().then(() => {
      this.filteredMovies = this.movies; // Populate filteredMovies with all movies initially
    });
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  color: rgb(51, 51, 51);
  background: rgb(18, 18, 18);
  min-height: 100vh;
  padding-bottom: 3%;
}
</style>
