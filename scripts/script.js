const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  const menu = document.querySelector(".nav-items");

  menu.classList.toggle("shown");
  menuBtn.classList.toggle("fixed");

  if (this.src.includes("icon-menu-close.svg")) {
    this.src = "../assets/images/icon-menu.svg";
  } else {
    this.src = "../assets/images/icon-menu-close.svg";
  }
}
