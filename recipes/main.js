

//grape soda

//event listener search button
const searchButton = document.querySelector('#search-button'); // Adjust to your search button
searchButton.addEventListener('click', searchHandler);




import recipes from './recipes.js';

// Function to generate a random number between 0 and num - 1
function random(num) {
    return Math.floor(Math.random() * num);
}

// Function to get a random recipe from the list
function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum];
}

// Template function to generate HTML for tags
function tagsTemplate(tags) {
    let html = '';
    tags.forEach(tag => {
        html += `<li>${tag}</li>`;
    });
    return html;
}


// Template function to generate HTML for the rating stars
function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }
    html += `</span>`;
    return html;
}


// Template function to generate HTML for a recipe
function recipeTemplate(recipe) {
    return `<figure class="recipe">
        <img src="images/${recipe.image}" alt="Image of ${recipe.name}" />
        <figcaption>
            <ul class="recipe__tags">
                ${tagsTemplate(recipe.tags)}
            </ul>
            <h2><a href="#">${recipe.name}</a></h2>
            <p class="recipe__ratings">
                ${ratingTemplate(recipe.rating)}
            </p>
            <p class="recipe__description">${recipe.description}</p>
        </figcaption>
    </figure>`;
}

// Function to render recipes
function renderRecipes(recipeList) {
    const recipeContainer = document.querySelector('#recipe-container'); // Adjust the selector to your container
    let html = '';
    recipeList.forEach(recipe => {
        html += recipeTemplate(recipe);
    });
    recipeContainer.innerHTML = html;
}


// Initialize the page with a random recipe
function init() {
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]); // Pass a single recipe in an array for rendering
}
init();




// Function to filter recipes based on a search query
function filter(query) {
    const filtered = recipes.filter(recipe => {
        return recipe.name.toLowerCase().includes(query) ||
               recipe.description.toLowerCase().includes(query) ||
               recipe.tags.some(tag => tag.toLowerCase().includes(query)) ||
               recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query));
    });

    const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name)); // Sort by name
    return sorted;
}


// Event handler for the search functionality
function searchHandler(e) {
    e.preventDefault();
    const searchQuery = document.querySelector('#search-input').value.toLowerCase(); // Adjust to your search input element
    const filteredRecipes = filter(searchQuery);
    renderRecipes(filteredRecipes); // Render filtered list of recipes
}

// to test
console.log(getRandomListEntry(recipes));

