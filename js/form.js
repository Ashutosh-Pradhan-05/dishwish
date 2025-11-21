const form = document.getElementById("recipeForm");
const params2 = new URLSearchParams(location.search);
const editId = params2.get("id");

if (editId) {
  document.getElementById("formTitle").innerText = "Edit Recipe";
  loadRecipeForEdit(editId);
}

function loadRecipeForEdit(id) {
  const r = getRecipe(id);
  title.value = r.title;
  description.value = r.description;
  ingredients.value = r.ingredients.join(", ");
  steps.value = r.steps.join(", ");
  prep.value = r.prep;
  difficulty.value = r.difficulty;
  image.value = r.image;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const recipeData = {
    id: editId ? Number(editId) : Date.now(),
    title: title.value,
    description: description.value,
    ingredients: ingredients.value.split(",").map((i) => i.trim()),
    steps: steps.value.split(",").map((i) => i.trim()),
    prep: Number(prep.value),
    difficulty: difficulty.value,
    image: image.value,
  };

  if (editId) updateRecipe(editId, recipeData);
  else addRecipe(recipeData);

  location.href = "index.html";
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("recipeForm");
  const cancelBtn = document.getElementById("cancelBtn");

  let isDirty = false; // Track if form has changes

  // Mark form as dirty on any input change
  form.addEventListener("input", () => {
    isDirty = true;
  });

  // Cancel button click
  cancelBtn.addEventListener("click", (e) => {
    if (isDirty) {
      const confirmLeave = confirm(
        "You have unsaved changes. Are you sure you want to leave?"
      );
      if (!confirmLeave) return; // Stay on page
    }
    // Navigate to home if confirmed or form not dirty
    location.href = "index.html";
  });

  // Header Home link click confirmation
  document.querySelectorAll('a[href="index.html"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      if (isDirty) {
        const confirmLeave = confirm(
          "You have unsaved changes. Are you sure you want to leave?"
        );
        if (!confirmLeave) {
          e.preventDefault();
        }
      }
    });
  });

  const difficultySelect = document.getElementById("difficulty");
  const saveBtn = document.querySelector(".btn-save");

  saveBtn.addEventListener("click", (e) => {
    if (difficultySelect.value === "") {
      e.preventDefault(); // Stop form submission
      alert("Please select a valid difficulty level.");
    }
  });

  // Warn on browser/tab close or refresh
  window.addEventListener("beforeunload", (e) => {
    if (isDirty) {
      e.preventDefault();
      e.returnValue = ""; // Required for Chrome
    }
  });
});
