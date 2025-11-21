const detailBox = document.getElementById("recipeDetail");

const params = new URLSearchParams(location.search);
const recipe = getRecipe(params.get("id"));
// Back button navigation
const backButton = document.getElementById("backButton");
backButton.addEventListener("click", () => {
  // Go back to previous page if possible, else go to home
  if (document.referrer && document.referrer.includes("index.html")) {
    history.back();
  } else {
    location.href = "index.html";
  }
});

if (!recipe) {
  detailBox.innerHTML = "<p>Recipe not found.</p>";
} else {
  detailBox.innerHTML = `
        <img src="${recipe.image || "https://via.placeholder.com/300"}">

        <h2>${recipe.title}</h2>
        <p>${recipe.description}</p>

        <h3>Ingredients</h3>
        <ul>${recipe.ingredients.map((i) => `<li>${i}</li>`).join("")}</ul>

        <h3>Steps</h3>
        <ol>${recipe.steps.map((s) => `<li>${s}</li>`).join("")}</ol>

        <p><strong>Prep Time:</strong> ${recipe.prep} mins</p>
        <p><strong>Difficulty:</strong> ${recipe.difficulty}</p>

        <div class="actions">
            <button class="btn-edit" onclick="location.href='form.html?id=${
              recipe.id
            }'">Edit</button>
            <button class="btn-delete" onclick="removeRecipe()">Delete</button>
        </div>
    `;
}

function removeRecipe() {
  if (confirm("Delete this recipe?")) {
    deleteRecipe(recipe.id);
    location.href = "index.html";
  }
}
