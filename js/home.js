const grid = document.getElementById("recipeGrid");
const searchInput = document.getElementById("searchInput");
const difficultyFilter = document.getElementById("difficultyFilter");

function renderRecipes() {
  const recipes = getRecipes(); // from recipeService.js
  let filtered = recipes;

  const search = searchInput.value.toLowerCase();
  filtered = filtered.filter((r) => r.title.toLowerCase().includes(search));

  if (difficultyFilter.value !== "all") {
    filtered = filtered.filter((r) => r.difficulty === difficultyFilter.value);
  }

  grid.innerHTML = "";

  if (filtered.length === 0) {
    grid.innerHTML = `
  <p style="text-align:center; padding:20px; font-size:18px; color:#ff5722; font-weight:600;">
    🍽️ Oops! No delicious recipes match your search.
  </p>`;

    return;
  }

  filtered.forEach((r) => {
    const card = document.createElement("div");
    card.className = "card";
    card.onclick = () => (location.href = `recipe.html?id=${r.id}`);

    const imageUrl = r.image || ""; // leave empty to show fallback text
    card.innerHTML = `
      <div class="image-container">
        <img src="${imageUrl}" alt="${r.title}">
        <span class="image-fallback">Image Not Found</span>
      </div>
      <h3>${r.title}</h3>
      <p>${r.description.substring(0, 60)}...</p>
      <small>${r.difficulty} • ${r.prep} mins</small>
    `;

    const img = card.querySelector("img");
    const fallback = card.querySelector(".image-fallback");

    // Show fallback text if image is missing or fails to load
    if (!imageUrl) {
      img.style.display = "none";
      fallback.style.display = "flex";
    }
    img.onerror = () => {
      img.style.display = "none";
      fallback.style.display = "flex";
    };

    grid.appendChild(card);
  });
}

searchInput.addEventListener("input", renderRecipes);
difficultyFilter.addEventListener("change", renderRecipes);

renderRecipes();
