const card = document.querySelector(".card");

let mousePositionX = 0;
let mousePositionY = 0;
let rotationY = 0;
let rotationX = 0;
let backgroundX = 0;
let backgroundY = 0;
let flippedCard = false;
let rotationInnerY = 0;

const cardStyles = card.getBoundingClientRect();
updateMouseProperties();

card.addEventListener("mousemove", (e) => {
  mousePositionX = (e.clientX - cardStyles.left) / cardStyles.width;
  mousePositionY = (e.clientY - cardStyles.top) / cardStyles.height;

  rotationX = -(mousePositionX - 0.5) * 26;
  rotationY = (mousePositionY - 0.5) * 26;

  backgroundX = 40 + 20 * mousePositionX;
  backgroundY = 40 + 20 * mousePositionY;

  updateMouseProperties();
});

card.addEventListener("click", () => {
  flippedCard = !flippedCard;
  rotationInnerY = flippedCard ? 180 : 0;

  card.style.setProperty("--rotation-inner-x", rotationInnerY + "deg");
});

function updateMouseProperties() {
  card.style.setProperty("--x", mousePositionX * 100 + "%");
  card.style.setProperty("--y", mousePositionY * 100 + "%");
  card.style.setProperty("--rotation-x", rotationX + "deg");
  card.style.setProperty("--rotation-y", rotationY + "deg");
  document.documentElement.style.setProperty(
    "--background-x",
    backgroundX + "%"
  );
  document.documentElement.style.setProperty(
    "--background-y",
    backgroundY + "%"
  );
}
