document.addEventListener("DOMContentLoaded", () => {
  // Select the menu toggle button and the menu container
  const menuOpen = document.querySelector(".menu-open");
  const menuClose = document.querySelector(".menu-close");
  const mobileMenu = document.querySelector(".mobile-menu");

  // Check if both elements exist
  if (menuOpen && menuClose && mobileMenu) {
    // Add click event listener to the open button
    menuOpen.addEventListener("click", function () {
      // Toggle the 'hidden' class on the mobile menu
      mobileMenu.classList.toggle("hidden");
    });
    // Add click event listener to the close button
    menuClose.addEventListener("click", function () {
      // Toggle the 'hidden' class on the mobile menu
      mobileMenu.classList.toggle("hidden");
    });
  }
});
