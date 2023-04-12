// define an array of image urls
const images = [
  "https://picsum.photos/id/100/100",
  "https://picsum.photos/id/200/100",
  "https://picsum.photos/id/300/100",
  "https://picsum.photos/id/400/100",
  "https://picsum.photos/id/500/100"
];

// shuffle the images array
function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// randomly choose an image to repeat
function chooseRepeatImage() {
  return Math.floor(Math.random() * 5) + 1;
}

// render the images with shuffled class names
function renderImages() {
  const shuffledImages = shuffle(images);
  const repeatImageIndex = chooseRepeatImage();
  const imagesContainer = document.getElementById("images-container");
  for (let i = 1; i <= 5; i++) {
    const img = imagesContainer.querySelector(`.img${i}`);
    img.setAttribute("src", shuffledImages[i - 1]);
    img.classList.remove("repeat");
    if (i === repeatImageIndex) {
      img.classList.add("repeat");
    }
  }
}

// add event listeners to the images
function addEventListeners() {
  const imagesContainer = document.getElementById("images-container");
  imagesContainer.addEventListener("click", handleImageClick);
}

// remove event listeners from the images
function removeEventListeners() {
  const imagesContainer = document.getElementById("images-container");
  imagesContainer.removeEventListener("click", handleImageClick);
}

// reset the state to initial state
function reset() {
  document.getElementById("h").textContent = "Please click on the identical tiles to verify that you are not a robot.";
  document.getElementById("reset").style.display = "none";
  document

