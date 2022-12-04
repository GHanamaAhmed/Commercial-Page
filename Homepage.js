let usermenu = document.querySelector(".usermenu")
let acountitem = document.querySelectorAll(".navbar-nav .nav-item")
let ads_right = document.querySelector(".ads-card .fi-rr-angle-right")
let ads_left = document.querySelector(".ads-card .fi-rr-angle-left")
let card = document.querySelectorAll(".ads-card .card")
document.onclick = (e) => {
  if (e.target.className != "nav-link") {
    if (!usermenu.classList.contains("d-none")) {
      usermenu.classList.add("d-none")
    }
  }
}
acountitem[0].addEventListener("click", () => {
  if (usermenu.classList.contains("d-none")) {
    usermenu.classList.remove("d-none")
  } else {
    usermenu.classList.add("d-none")
  }
})
var swiper1 = new Swiper(".ads-card", {
  slidesPerView: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});
var swiper2 = new Swiper(".cadr2 , .cadr3", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
