const expandButton = document.getElementById("expandButton");
const rectangle = document.querySelector(".rectangle");
const text = document.getElementById("text1");
const rnav = document.querySelector(".rectangle-navbar");
expandButton.addEventListener("click", function() {
  rectangle.classList.toggle("expanded");
  expandButton.classList.toggle('btn-after');
  text.style.display = text.style.display === "block" ? "none" : "block";
  rnav.classList.toggle("nav-expanded");
});