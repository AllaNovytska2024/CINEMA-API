const API_KEY = "69ab59c6359e39bbafc12fde78abf982";

async function getMovieRecommendations() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ru-RU&page=1`
    );
    const data = await response.json();

    const movieRecommendationsContainer = document.getElementById(
      "movie-recommendations"
    );
    movieRecommendationsContainer.innerHTML = "";

    data.results.forEach((movie) => {
      const movieElement = document.createElement("div");
      movieElement.classList.add("movie");

      const poster = document.createElement("img");
      poster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      poster.alt = movie.title;
      const title = document.createElement("h3");
      title.textContent = movie.title;

      const rating = document.createElement("p");
      rating.textContent = `Рейтинг: ${movie.vote_average}`;

      movieElement.appendChild(poster);
      movieElement.appendChild(title);
      movieElement.appendChild(rating);
      movieRecommendationsContainer.appendChild(movieElement);
    });
  } catch (error) {
    console.error("Ошибка:", error);
  }
}
getMovieRecommendations();
