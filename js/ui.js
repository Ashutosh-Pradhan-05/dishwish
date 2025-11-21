document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const closeMenu = document.getElementById("closeMenu");

  if (!menuToggle || !navMenu || !closeMenu) return;

  // Open menu
  menuToggle.addEventListener("click", () => {
    navMenu.classList.add("open");
  });

  // Close menu
  closeMenu.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });

  // Close menu when clicking a link
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
    });
  });
});
