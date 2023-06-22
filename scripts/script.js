const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  const menu = document.querySelector(".nav-items");
  const modal = document.querySelector(".modal");

  [menu, modal].forEach((item) => item.classList.toggle("shown"));
  
  switchMenuButton(this);
}

function switchMenuButton(btn) {
  if (btn.src.includes("icon-menu-close.svg")) {
    btn.setAttribute("src", "assets/images/icon-menu.svg")
  } else {
    btn.setAttribute("src", "assets/images/icon-menu-close.svg");
  }

  btn.classList.toggle("fixed");
}