const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  const menu = document.querySelector(".nav-items");
  const modal = document.querySelector(".modal");

  menu.classList.toggle("shown");
  modal.classList.toggle("shown");
  menuBtn.classList.toggle("fixed");

  if (menuBtn.src.includes("icon-menu-close.svg")) {
    menuBtn.setAttribute("src", "assets/images/icon-menu.svg")
  } else {
    menuBtn.setAttribute("src", "assets/images/icon-menu-close.svg");
  }
}
