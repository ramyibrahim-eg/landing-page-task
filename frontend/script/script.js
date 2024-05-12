let nav = document.querySelector("nav");
let navbar = document.querySelector(".navbar");
let navbar_img = navbar.querySelector("img");
let scroll_top = document.querySelector(".scroll_top");
let links = document.querySelectorAll("a[href*='#']");
let menu = document.querySelector("#menu");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    nav.classList.add("scroll");
    navbar.style.marginTop = "0";

    if (window.innerWidth < 786) {
      navbar_img.style.width = "80px";
    } else {
      navbar_img.style.width = "100px";
    }
  } else {
    nav.classList.remove("scroll");

    if (window.innerWidth > 786) {
      navbar.style.marginTop = "20px";
    } else {
      navbar_img.style.width = "100px";
    }
  }

  if (window.scrollY > 100) {
    scroll_top.style.display = "flex";
  } else {
    scroll_top.style.display = "none";
  }
});

links.forEach(function (link) {
  link.addEventListener("click", function (event) {
    menu.checked = !menu.checked;
    event.preventDefault();
    let id = link.getAttribute("href").split("#")[1];
    let targetElement = document.getElementById(id);
    if (targetElement) {
      let scrollTop = targetElement.offsetTop;
      window.scrollTo({
        top: scrollTop - 100,
        behavior: "smooth",
      });
    }
  });
});

scroll_top.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
