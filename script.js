//
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
setColor();
