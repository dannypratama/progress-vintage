// Progress Vintage — page behavior

function btnHide() {
  var x = document.getElementById("btnHide");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function getColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setColor() {
  document.documentElement.style.setProperty("--randomcolor", getColor());
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
});
