$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
})

window.addEventListener("load", () => {
  const item = document.querySelector(".menu-icon")
  const menuResponsive = document.querySelector(".menu-responsive")
  menuResponsive.style.display = "none"
  item.innerHTML = "menu"
});

function handlemenu() {
  const item = document.querySelector(".menu-icon")
  const menuResponsive = document.querySelector(".menu-responsive")


  if (item.innerHTML === "menu") {
    item.innerHTML = "close"
    menuResponsive.style.display = "flex"
    menuResponsive.style.flexDirection = "column"

  } else {
    item.innerHTML = "menu"
    menuResponsive.style.display = "none"
  }
}

