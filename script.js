// !Burger start
(function () {
  const burgerMenu = document.querySelector(".header-burger");
  const menu = document.querySelector(".header-burger-menu")
  const menuCloseItem = document.querySelector(".burger-close");
  const wrapper = document.querySelector(".overlay");
  const navList = document.querySelector(".burger-menu-list")

  burgerMenu.addEventListener("click", () => {
    menu.classList.add("header-burger-menu-active");
    wrapper.classList.add("overlay-active");
  });

  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("header-burger-menu-active");
    wrapper.classList.remove("overlay-active");
  });

  navList.addEventListener("click", () => {
    menu.classList.remove("header-burger-menu-active");
    wrapper.classList.remove("overlay-active");
  });

  wrapper.addEventListener("click", () => {
    menu.classList.remove("header-burger-menu-active");
    wrapper.classList.remove("overlay-active");
  });
}());
// !Burger end
