fetch(
  `https://newsapi.org/v2/everything?q=film&from=2024-08-28&sortBy=publishedAt&apiKey=a0713f75db1548e9bc1f7510938d863b`
)
  .then((res) => res.json())
  .then((data) => {
    const card = document.createElement("div");
    card.className = "cinemaNews-card";

    const h3 = document.createElement("h3");
    h3.textContent = `Title: ${data.title}`;

    const p = document.createElement("p");
    p.textContent = `description: ${data.description}`;
    console.log(data);

    const h4 = document.createElement("h4");
    h4.textContent = `author: ${data.author}`;

    const h5 = document.createElement("h5");
    h5.textContent = `publishedAt: ${data.publishedAt}`;


  });
