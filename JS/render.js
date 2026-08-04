const recipeTitle = document.querySelector(".recipe-title");
const recipeInfo = document.querySelector(".recipe-info");
const recipeImage = document.querySelector(".recipe-image img");

const recipeCategory = document.querySelector(".recipe-category");
const recipeTime = document.querySelector(".recipe-time");
const recipeDifficulty = document.querySelector(".recipe-difficulty");
const recipeServings = document.querySelector(".recipe-servings");

const calories = document.querySelector(".recipe-calories h2");
const tabContent = document.querySelector(".tab-content");

function renderRecipe(recipe) {

    recipeTitle.textContent = recipe.name;

    recipeInfo.textContent =
        `${recipe.name} is a delicious ${recipe.cuisine} recipe that serves ${recipe.servings} people.`;

    recipeImage.src = recipe.image;

    recipeCategory.textContent = recipe.cuisine;

    recipeTime.textContent = recipe.cookTimeMinutes + " min";

    recipeDifficulty.textContent = recipe.difficulty;

    recipeServings.textContent = "Serves " + recipe.servings;

    calories.textContent = recipe.caloriesPerServing;

   if (currentTab === "ingredients") {
    renderIngredients(recipe);
}

else if (currentTab === "instructions") {
    renderInstructions(recipe);
}

else if (currentTab === "nutrition") {
    renderNutrition(recipe);
}

else if (currentTab === "tips") {
    renderTips(recipe);
}
}

function renderIngredients(recipe) {

    tabContent.innerHTML = `
        <div class="ingredients">

            ${recipe.ingredients.map(ingredient => `
                <div class="ingredient">
                    <i class="fa-solid fa-check"></i>
                    ${ingredient}
                </div>
            `).join("")}

        </div>
    `;
}
function renderInstructions(recipe) {

    tabContent.innerHTML = `
        <div class="steps">

            ${recipe.instructions.map((step, index) => `
                <div class="step">
                    <span class="step-number">${index + 1}</span>
                    <span>${step}</span>
                </div>
            `).join("")}

        </div>
    `;
}
function renderNutrition(recipe) {

    tabContent.innerHTML = `
        <div class="nutrition">

            <div class="nutrition-card">
            <i class="fa-solid fa-fire"></i>
                <span>Calories</span>
                <h3>${recipe.caloriesPerServing}</h3>
            </div>

            <div class="nutrition-card">
            <i class="fa-solid fa-users"></i>
                <span>Servings</span>
                <h3>${recipe.servings}</h3>
            </div>

            <div class="nutrition-card">
            <i class="fa-regular fa-clock"></i>
                <span>Cook Time</span>
                <h3>${recipe.cookTimeMinutes} min</h3>
            </div>

            <div class="nutrition-card">
             <i class="fa-solid fa-utensils"></i>
                <span>Difficulty</span>
                <h3>${recipe.difficulty}</h3>
            </div>

        </div>
    `;
}
function renderTips(recipe) {

    tabContent.innerHTML = `

        <div class="tips">

            <div class="tip">
                <i class="fa-solid fa-lightbulb"></i>
                Best served fresh with ${recipe.cuisine} style.
            </div>

            <div class="tip">
                <i class="fa-solid fa-lightbulb"></i>
                Difficulty level: ${recipe.difficulty}.
            </div>

            <div class="tip">
                <i class="fa-solid fa-lightbulb"></i>
                This recipe serves ${recipe.servings} people.
            </div>

        </div>
    `;
}