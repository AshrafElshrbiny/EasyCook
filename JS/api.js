const API_URL = "https://dummyjson.com/recipes";

let allRecipes = [];
let recipes = [];
let currentIndex = 0;
let currentTab = "ingredients";

async function getRecipes() {
    const loader = document.querySelector(".loader");
    const recipeCard = document.querySelector(".recipe-card");
    loader.style.display = "flex";
    recipeCard.style.display = "none";
    try {

        const response = await fetch(API_URL);
        const data = await response.json();

        allRecipes = data.recipes;
        recipes = allRecipes;

        setTimeout(() => {

            renderRecipe(recipes[currentIndex]);

            loader.style.display = "none";
            recipeCard.style.display = "grid";

        }, 500);
    } catch (error) {

        alert("Something went wrong");

    }

}

async function searchRecipe(query) {

    try {

        const response = await fetch(
            `https://dummyjson.com/recipes/search?q=${query}`
        );

        const data = await response.json();

        if (data.recipes.length > 0) {

            recipes = data.recipes;
            currentIndex = 0;

            renderRecipe(recipes[currentIndex]);

        } else {

            alert("Recipe not found!");

        }

    } catch (error) {

        console.log(error);

    }

}

function nextRecipe() {

    currentIndex++;

    if (currentIndex >= recipes.length) {

        currentIndex = 0;

    }

    renderRecipe(recipes[currentIndex]);

}

getRecipes();