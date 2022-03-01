const bodyEl = document.querySelector('body');
const colorSpanEl = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');
btnChangeColor.addEventListener('click', onBtnClick);

function onBtnClick() {
  const newColor = getRandomHexColor();
  bodyEl.style.backgroundColor = newColor;
  colorSpanEl.textContent = newColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
