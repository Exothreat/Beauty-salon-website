{
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
      header.style.backgroundColor = "transparent";
    } else {
      header.style.backgroundColor = "#181818";
    }
  });
}
