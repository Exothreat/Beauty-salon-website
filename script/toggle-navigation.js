{
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
      header.classList.remove("header__visible");
    } else {
      header.classList.add("header__visible");
    }
  });
}
