const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  const menu = document.querySelector(".nav-items");

  menu.classList.toggle("shown");
  menuBtn.classList.toggle("fixed");

  if (this.src.includes("icon-menu-close.svg")) {
    this.setAttribute("src", "assets/images/icon-menu.svg")
  } else {
    this.setAttribute("src", "assets/images/icon-menu-close.svg");
  }
}
