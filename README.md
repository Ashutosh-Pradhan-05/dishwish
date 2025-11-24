# 🍽️ DISHWISH - Recipe Manager App

DishWish is a simple, responsive web application developed by using HTML, CSS, JavaScript to manage your recipes. Users can **add, edit, view, delete**, and **search recipes** by name or difficulty. The app stores data in the browser’s `localStorage`, making it a lightweight and fast client-side solution.

## 📁 Project Structure

```

DISHWISH/
│
├── css/
│   ├── detail.css
│   ├── form.css
│   ├── home.css
│   └── styles.css
│
├── images/
│   ├── favicon.ico
│   └── imagenotfound.png
│
├── js/
│   ├── detail.js
│   ├── form.js
│   ├── home.js
│   ├── recipeService.js
│   ├── storage.js
│   └── ui.js
│
├── pages/
│   ├── form.html
│   └── recipe.html
│
├── index.html
└── README.md

```

## 🖥️ Features

- **Add Recipe:** Users can add a new recipe with title, description, ingredients, steps, preparation time, difficulty, and optional image URL.
- **Edit Recipe:** Edit any existing recipe.
- **Delete Recipe:** Remove a recipe from local storage with confirmation.
- **View Recipe:** View full recipe details.
- **Search & Filter:** Search recipes by name or filter by difficulty.
- **Responsive Design:** Works on mobile, tablet, and desktop.
- **Alerts & Confirmations:** Friendly alerts/confirmations for save, edit, cancel, and delete actions.

## 🎨 UI & UX Highlights

- Gradient backgrounds for forms and cards for better visual appeal.
- Buttons with hover effects:
  - Cancel → Red gradient
  - Save → Green gradient
  - Edit/Delete → Visual feedback
- Responsive layout:
  - Form width ~70% on laptops/desktops, full width on mobile.
  - Stacked buttons on small screens.
- Image fallback if recipe image is missing.

## ⚙️ How to Run the App

1. **Clone the repository:**

```bash
git clone https://github.com/username/DishWish.git
cd DishWish
```

2. **Open `index.html` in a web browser**:

- No server setup is required; the app runs entirely on client-side.
- Recommended browsers: Chrome, Firefox, Edge.

3. **Usage:**

   - Home page displays all recipes.
   - Use the **“Add Recipe”** link to create a new recipe.
   - Click **“View Recipe”** button on any recipe card to see details.
   - Edit or delete recipes from the details page.

## 🗂️ Data Structure in `localStorage`

The app stores recipes in `localStorage` under the key `recipes`.
Each recipe is stored as an object:

```json
{
  "id": 1699999999999,
  "title": "Drumstick (Moringa) Curry",
  "description": "A delicious and mildly spicy drumsticks curry blended with traditional Indian spices for 2 people.",
  "ingredients": [ "2 fresh green drumsticks", "1 medium-sized onion"],[.....],[......],
  "steps": ["Turn on gas", "Take a cooking pan", "Place it on the gas"],[.........],[........], [.....],
  "prep": 45,
  "difficulty": "Medium",
  "image": "https://images.pexels.com/photos/20466259/pexels-photo-20466259.jpeg"
}
```

- `id` → unique numeric timestamp
- `title`, `description` → string
- `ingredients`, `steps` → arrays of strings (comma-separated in form)
- `prep` → number (minutes)
- `difficulty` → string (`Easy`, `Medium`, `Hard`)
- `image` → optional string (URL)

---

## 💡 Assumptions & Limitations

- The app is **client-side only**; data is stored in browser localStorage.
- Works best on **modern browsers**.
- No backend or authentication; all users share the same data in localStorage.
- Images must be valid URLs. If missing, a fallback is shown.
- Recipe IDs are generated using `Date.now()`, so collisions are unlikely but possible if recipes are added at the same millisecond.
- Navigation is based on relative paths, so moving files outside the provided structure may break links.

## ⚠️ Known Issues

- Image fallback works, but broken URLs still attempt to load briefly before hiding.
- Editing a recipe does not auto-scroll to top on page load.
- `localStorage` is cleared manually or when browser storage is cleared.
- Only supports **comma-separated ingredients and steps**, so extra commas may cause formatting issues.

## 📌 Notes on Deployment

- Use **relative paths** for HTML, CSS, JS, and images for GitHub Pages.
- Examples:

  - From `index.html` → `pages/form.html` → `pages/form.html`
  - From `pages/form.html` → root → `../index.html`

- Avoid leading slashes (`/`) for file paths; GitHub Pages interprets them as root domain paths.

## 🔗 Social Links

- GitHub Profile: [https://github.com/Ashutosh-Pradhan-05](https://github.com/Ashutosh-Pradhan-05)
- LinkedIn: [https://www.linkedin.com/in/ashutosh-pradhan05](https://www.linkedin.com/in/ashutosh-pradhan05)
- Twitter/X: [https://x.com/Ashutoshtwitind](https://x.com/Ashutoshtwitind)

## 👨‍💻 Author

**Ashutosh Pradhan**
© 2025 All Rights Reserved

## 🙏 Thank You

Thank you for checking out **DishWish!**
Feel free to use, modify, and contribute to make it even better.
