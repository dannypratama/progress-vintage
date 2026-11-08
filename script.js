function btnHide() {
  var x = document.getElementById("btnHide");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// Hue acak, lightness dibatasi supaya teks putih saat hover tetap lolos kontras AA
function getColor() {
  var hue = Math.floor(Math.random() * 360);
  var sat = 60 + Math.floor(Math.random() * 40);
  var light = 15 + Math.floor(Math.random() * 18);
  return "hsl(" + hue + ", " + sat + "%, " + light + "%)";
}

function setColor() {
  document.documentElement.style.setProperty("--randomcolor", getColor());
}

// Form subscribe belum punya backend: tampilkan pesan jujur, jangan sukses palsu
function initSubscribe() {
  var form = document.querySelector(".js-subscribe");
  if (!form) return;
  var note = form.querySelector(".subscribe-note");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!note) return;
    note.textContent = "Newsletter belum aktif. Order langsung via WhatsApp atau Shopee ya.";
    note.classList.add("show");
  });
}

// Hentikan autoplay carousel saat user minta reduced motion
function initCarousel() {
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.querySelectorAll("[data-bs-ride]").forEach(function (el) {
    el.removeAttribute("data-bs-ride");
    if (window.bootstrap && window.bootstrap.Carousel) {
      var c = window.bootstrap.Carousel.getInstance(el) || window.bootstrap.Carousel.getOrCreateInstance(el);
      c.pause();
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  setColor();

  // Randomize the --randomcolor variable when hovering product/feature rows
  document.querySelectorAll(".js-color-zone").forEach(function (el) {
    el.addEventListener("mouseover", setColor);
  });

  // "Load More Product" hides itself after the first click
  var loadMoreBtn = document.getElementById("btnHide");
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", btnHide);
  }

  // Copyright year
  var year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  initSubscribe();
  initCarousel();
});
