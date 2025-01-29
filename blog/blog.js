


const articles = [
    {
        id: 1,
        title: "Wind and Truth: Book Five of the Stormlight Archive (The Stormlight Archive, 5)",
        date: "December 6th, 2024",
        description:
          "Dalinar Kholin challenged the evil god Odium to a contest of champions with the future of Roshar on the line. The Knights Radiant have only ten days to prepare―and the sudden ascension of the crafty and ruthless Taravangian to take Odium’s place has thrown everything into disarray.",
        imgSrc: "Book5SLA.jpg",
        imgAlt: "Book cover for Wind and Truth",
        ages: "10-16",
        genre: "Fantasy",
        stars: "⭐⭐⭐☆☆",
      },
    {
        id: 2,
        title: "Words of Radiance: Book Two of the Stormlight Archive (The Stormlight Archive, 2)",
        date: "March 4, 2014",
        description:
          "Expected by his enemies to die the miserable death of a military slave, Kaladin survived to be given command of the royal bodyguards, a controversial first for a low-status darkeyes. Now he must protect the king and Dalinar from every common peril as well as the distinctly uncommon threat of the Assassin, all while secretly struggling to master remarkable new powers that are somehow linked to his honorspren, Syl.",
        imgSrc: "Book2SLA.jpg",
        imgAlt: "Book cover for Words of Radiance",
        ages: "12-16",
        genre: "Fantasy",
        stars: "⭐☆☆☆☆",
      },
    {
      id: 3,
      title: "Belgariad Book One: Pawn of Prophecy",
      date: "Feb 12, 2022",
      description:
        "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
      imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
      imgAlt: "Book cover for Pawn of Prophecy",
      ages: "12-16",
      genre: "Fantasy",
      stars: "⭐⭐⭐⭐⭐",
    },
  ];
  
  // Select the container where articles will go
  const articlesContainer = document.querySelector("#articles-container");
  
  // Function to render articles
  function renderArticles() {
    articles.forEach((article) => {
      // Create a new article element
      const articleElement = document.createElement("article");
      articleElement.classList.add("article"); // Add a class for styling
  
      // Create the HTML content
      const articleHTML = `
      <div class="metaBook">
          <h5>${article.date}</h5>
          <p>${article.ages}</p>
          <p>${article.genre}</p>
          <p>${article.stars}</p>
      </div>
      <div class="mainBook">
          <h3>${article.title}</h3>
          <img src="${article.imgSrc}" alt="${article.imgAlt}">
          <p>${article.description}
              <a href="#">Read More...</a> 
          </p>
      </div>
  `;
  
      // Add the HTML to the article element
      articleElement.innerHTML = articleHTML;
  
      // Append the article to the container
      articlesContainer.appendChild(articleElement);
    });
  }
  
  // Call the function to render the articles
  renderArticles();