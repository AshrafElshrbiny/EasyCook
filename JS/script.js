const tabs = document.querySelectorAll(".tab");
const nextBtn = document.querySelector(".recipe-btn");
const themeToggle = document.querySelector(".theme-toggle");
const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector(".search-input");
const suggestions = document.querySelector(".suggestions");
const recipeImg = document.querySelector(".recipe-image img");
const imageModal = document.querySelector(".image-modal");
const modalImage = document.querySelector(".modal-image");
const closeImage = document.querySelector(".close-image");



tabs.forEach((tab) => {

    tab.addEventListener("click", () => {

        tabs.forEach(item => {
            item.classList.remove("active");
        });

        tab.classList.add("active");

        const tabName = tab.textContent.trim();

        if (tabName === "Ingredients") {

            currentTab = "ingredients";

            renderIngredients(recipes[currentIndex]);
        }

        else if (tabName === "Instructions") {

            currentTab = "instructions";

            renderInstructions(recipes[currentIndex]);
        }

        else if (tabName === "Nutrition") {

            currentTab = "nutrition";

            renderNutrition(recipes[currentIndex]);
        }

        else if (tabName === "Chef's Tips") {

            currentTab = "tips";

            renderTips(recipes[currentIndex]);
        }

    });

});


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});


searchForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const query = searchInput.value.trim();

    if (query) {

        searchRecipe(query);

    }

});
searchInput.addEventListener("input", () => {

    const value = searchInput.value.toLowerCase().trim();

    suggestions.innerHTML = "";

    if (!value) {
        recipes = allRecipes;
        currentIndex = 0;

        renderRecipe(recipes[currentIndex]);

        suggestions.style.display = "none";
        return;
    }
    suggestions.style.display = "block";

    const results = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(value)
    );

    results.slice(0, 5).forEach(recipe => {

        const suggestion = document.createElement("div");

        suggestion.classList.add("suggestion");

        suggestion.textContent = recipe.name;

        suggestion.addEventListener("click", (e) => {

            e.stopPropagation();

            searchInput.value = recipe.name;

            suggestions.innerHTML = "";
            suggestions.style.display = "none";

            renderRecipe(recipe);
        });

        suggestions.appendChild(suggestion);

    });

});
document.addEventListener("click", (e) => {

    if (!e.target.closest(".search-container")) {
        suggestions.innerHTML = "";
    }

});


nextBtn.addEventListener("click", () => {

    nextRecipe();

});
recipeImg.addEventListener("click", () => {

    modalImage.src = recipeImg.src;

    imageModal.classList.add("show");

});
//

closeImage.addEventListener("click", () => {

    imageModal.classList.remove("show");

});

imageModal.addEventListener("click", (e) => {

    if (e.target === imageModal) {

        imageModal.classList.remove("show");

    }

});