function toggleMenu() {
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
}

function storeUTMParameters() {
  const queryParams = new URLSearchParams(window.location.search);
  const utmParams = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
  ];

  utmParams.forEach((param) => {
    const value = queryParams.get(param);
    if (value) localStorage.setItem(param, value);
  });
}

function fillHiddenUTMFields() {
  const utmParams = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
  ];

  utmParams.forEach((param) => {
    const element = document.getElementById(param);
    const value = localStorage.getItem(param);
    if (element && value) {
      element.value = value;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  toggleMenu();
  storeUTMParameters();
  fillHiddenUTMFields();
});
