// const defaultImage = "images/imagenotfound.png"; // For the default image

function getRecipes() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}

function saveRecipes(recipes) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
}

function getRecipe(id) {
  return getRecipes().find((r) => r.id == id);
}

function addRecipe(recipe) {
  const data = getRecipes();
  data.push(recipe);
  saveRecipes(data);
}

function updateRecipe(id, updated) {
  const data = getRecipes().map((r) => (r.id == id ? updated : r));
  saveRecipes(data);
}

function deleteRecipe(id) {
  saveRecipes(getRecipes().filter((r) => r.id != id));
}

function renderRecipes(recipes) {
  const recipeGrid = document.getElementById("recipeGrid");
  recipeGrid.innerHTML = "";

  recipes.forEach((recipe) => {
    const imageUrl = recipe.image || "images/imagenotfound.png";

    const card = document.createElement("div");
    card.className = "recipe-card";

    card.innerHTML = `
            <div class="image-container">
                <img src="${imageUrl}" alt="${recipe.title}">
                <span class="image-fallback">Image Not Found</span>
            </div>
            <h3>${recipe.title}</h3>
            <p>${recipe.description}</p>
        `;

    const img = card.querySelector("img");
    const fallback = card.querySelector(".image-fallback");

    img.onerror = () => {
      img.style.display = "none";
      fallback.style.display = "flex";
    };

    if (!imageUrl) {
      img.style.display = "none";
      fallback.style.display = "flex";
    }

    recipeGrid.appendChild(card);
  });
}
