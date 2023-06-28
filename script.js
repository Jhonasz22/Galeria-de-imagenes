const sliderContainer = document.querySelector(".slider-container");
const galleryContainer = document.querySelector(".gallery-container");
const toggleButton = document.querySelector(".toggleButton");

toggleButton.addEventListener("click", function () {
  if (sliderContainer.style.display === "none") {
    sliderContainer.style.display = "block";
    galleryContainer.style.display = "none";
    toggleButton.textContent = "Ver  galería de imágenes";
  } else {
    sliderContainer.style.display = "none";
    galleryContainer.style.display = "flex";
    toggleButton.textContent = "Ver deslizador de imágenes";
  }
});

const images = ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg", "imagen4.jpg"];
let currentImageIndex = 0;

const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const imgElements = document.querySelectorAll(".img");

prevButton.addEventListener("click", function () {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateImage();
});

nextButton.addEventListener("click", function () {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateImage();
});

function updateImage() {
  imgElements.forEach(function (imgElement, index) {
    if (index === currentImageIndex) {
      imgElement.style.display = "block";
    } else {
      imgElement.style.display = "none";
    }
  });
}
