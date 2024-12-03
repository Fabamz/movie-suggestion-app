<template>
  <div class="movie-box">
    <div v-for="movie in movies" :key="movie.title" class="movie-card">
      <img :src="movie.imageUrl" alt="Movie Poster" />
      <h3>{{ movie.title }}</h3>
      <p>Genre: {{ movie.genre }}</p>
      <p>Year: {{ movie.year }}</p>
      <p>Rating: {{ movie.pgRating }}</p>
      <p class="movie-des">{{ movie.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["movies"], // Accepts filteredMovies from the parent
};
</script>

<style scoped>
.movie-box {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.movie-card {
  background: #222;
  color: #fff;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.movie-card img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}

.movie-des {
  font-family: "Georgia", serif;
  font-size: 0.9rem; 
  font-style: italic; 
  background: rgba(255, 255, 255, 0.1); 
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3) 0 2px 4px rgb(0, 0, 0, 0.3); 
  color: rgb(155, 128, 128); 
  line-height: 1.4; 
  text-align: justify;
}
</style>
