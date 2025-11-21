# Recipe Manager Web App

A simple, interactive, and fully responsive **Recipe Manager Web App** built using **HTML, CSS, and JavaScript**.  
This app allows users to **add, view, edit, delete, search, and filter recipes** with data persisted in the browser using **localStorage only**.

---

## 🌟 Features

- **Home Page (Recipe List)**
  - Displays all recipes in a **grid layout** (3 cards per row on desktop, 1 card on mobile)
  - Shows recipe **title, description snippet, difficulty, and prep time**
  - Supports **search by title**
  - Filter by **difficulty** (All/Easy/Medium/Hard)

- **Recipe Detail Page**
  - Displays full recipe information: title, description, ingredients, steps, prep/cook time, difficulty, and image
  - **Edit** or **Delete** recipe

- **Add/Edit Recipe Form**
  - Fields: Title, Description, Ingredients, Steps, Prep Time, Cook Time, Difficulty, Optional Image URL
  - **Client-side validation** to prevent invalid submission
  - Optional **cancel button** with confirmation prompt
  - Default fallback for missing or invalid image: shows **"Image Not Found"**

- **Responsive Design**
  - Works smoothly on **desktop and mobile**
  - Header menu collapses into a **hamburger icon** on mobile
  - Buttons and cards adjust for small screens

- **Other Features**
  - Interactive footer with **social links** (GitHub, LinkedIn, X.com)
  - Attractive gradient backgrounds for **header, body, and footer**
  - LocalStorage persists all data; supports pre-loaded recipes on first load

---

## 🚀 How to Run the App

Follow these steps to run the **Recipe Manager Web App** locally on your computer:

### 1. Clone or Download the Repository

You can either **clone the repository** using Git or **download it as a ZIP**.

**Option A – Clone using Git:**

```bash
git clone https://github.com/yourusername/recipe-manager.git

```

## 💾 Data Structure in `localStorage`

All recipes are stored under a single key: `recipes`.  
Each recipe is a JSON object with the following structure:

```json
{
  "id": "unique-id",
  "title": "Drumstick Curry",
  "description": "A flavorful South Indian curry with drumsticks.",
  "ingredients": [
    "Drumsticks - 4",
    "Onions - 2",
    "Tomatoes - 3",
    "Spices as needed"
  ],
  "steps": [
    "Wash and cut the drumsticks",
    "Prepare the masala",
    "Cook the drumsticks in masala"
  ],
  "prep": 15,
  "cook": 30,
  "difficulty": "Medium",
  "image": "https://www.pexels.com/photo/..."
}

```

## ⚙️ Assumptions and Limitations

**Assumptions:**
- Users are using a modern browser that supports **localStorage** and ES6 JavaScript.
- Recipe IDs are **unique strings**.
- Images are optional; if not provided, a **fallback placeholder or text** is displayed.
- Client-side validation is sufficient; no server-side validation is implemented.

**Limitations:**
- Data persists **only in browser localStorage**; clearing the browser deletes all recipes.
- No user authentication or multi-user support.
- Image URLs must be valid; broken links display fallback text.
- The app does not support offline caching beyond localStorage.

---

## ⚠️ Known Issues

- If `localStorage` is manually corrupted, some features may break; a page reload may be required.
- Large numbers of recipes may slightly slow down rendering.
- Image fallback does not automatically retry failed URLs.
- Mobile menu requires JavaScript; if JS fails, the menu won’t expand.
- No server-side backup or sync; recipes are only stored locally in the browser.

---

## 🙏 Acknowledgements

- Special thanks to [Pexels](https://www.pexels.com) for free recipe images.  
- Inspired by modern recipe management apps and responsive web design principles.  

---

## 📫 Contact

**Ashutosh Pradhan**  
- GitHub: [https://github.com/yourusername](https://github.com/Ashutosh-Pradhan-05)
- LinkedIn: [https://www.linkedin.com/in/yourprofile](https://www.linkedin.com/in/ashutosh-pradhan05) 
- X.com: [https://twitter.com/yourusername](https://x.com/Ashutoshtwitind)  

---

## 🎉 Thank You

Thank you for visiting this project! Feel free to fork, contribute, or give feedback.  



