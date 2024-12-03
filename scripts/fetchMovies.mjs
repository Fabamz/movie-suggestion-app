import fetch from "node-fetch";
import fs from "fs";

const API_KEY = "52d73f963730a0a6f3cbf9b4b3353d0b";
const API_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;

const genreMap = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

async function fetchAndSaveMovies() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    const transformedMovies = data.results.map((movie) => ({
      title: movie.title || "Unknown Title",
      genre: movie.genre_ids.map((id) => genreMap[id]).join(", ") || "Unknown",
      pgRating: "PG-13",
      description: movie.overview || "No description available.",
      year: movie.release_date ? movie.release_date.split("-")[0] : "N/A",
      imageUrl: movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "https://via.placeholder.com/500x750?text=No+Image",
    }));

    const dbData = { movies: transformedMovies };
    fs.writeFileSync("db.json", JSON.stringify(dbData, null, 2));
    console.log("Movies saved to db.json successfully!");
  } catch (error) {
    console.error("Error fetching or saving movies:", error);
  }
}

fetchAndSaveMovies();

