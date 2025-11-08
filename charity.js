    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const icon = menuBtn.querySelector("i");

    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-times");
    });

    //  Hide mobile menu when switching to desktop view
    window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
    mobileMenu.classList.add("hidden");
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-times");
  }
});