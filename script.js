const containerFilm = document.querySelector("#container-film");
const loader = document.querySelector("#loader");
const formWrapper = document.querySelector("#form-wrapper");

fetch(
  `https://newsapi.org/v2/everything?q=film&from=2024-08-28&sortBy=publishedAt&apiKey=a0713f75db1548e9bc1f7510938d863b`
)
  .then((res) => res.json())
  .then(data => {
    const film = data.articles;
    film.map(film => {
    const card = document.createElement("div");
    card.className = "film-card";

    const heading= document.createElement("h3");
    heading.textContent = film.title;
    
    

    const description = document.createElement("p");
    description.textContent = `description: ${film.description}`;
    console.log(film);

    const author = document.createElement("h4");
    author.textContent = film.author;

    const publishedAt = document.createElement("p");
    publishedAt.textContent = film.publishedAt;

    const img = document.createElement("img");
    img.src = film.urlToImage[0];
    console.log("create!");

    card.append(title, author, description, publishedAt, urlToImage);
    // product.reviews.map(el => {
    //   const review = document.createElement("p");
    //   review.textContent = `"${el.comment}" by ${el.reviewerName}`;
    //   card.append(review)
    // });
    containerFilm.append(card);
  });
  loader.classList.toggle("loader-hide");
})
.catch(error => {
    loader.classList.toggle("loader-hide");

    const serverError = document.createElement("p");
    serverError.classList.add("error-message");
    serverError.style.color = "red";
    if (error.message === "Failed to fetch") {
      serverError.textContent = `Server error: не получилось отправить запрос 😞`;
    } else {
      serverError.textContent = `Server error: ${error.message} 😞`;
    }
    
  });


  

