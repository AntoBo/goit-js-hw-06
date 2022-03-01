const numberEl = document.querySelector('#controls input[type="number"]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
