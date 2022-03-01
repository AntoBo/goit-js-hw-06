const boxesEl = document.querySelector('#boxes');

const createBtn = document.querySelector('button[data-create]');
createBtn.addEventListener('click', createBoxes);

const destroyBtn = document.querySelector('button[data-destroy]');
destroyBtn.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  destroyBoxes();

  amount = document.querySelector('input[type="number"]').value;
  let injectHTML = '';
  let boxSize = 30;

  for (let i = 0; i < amount; i += 1) {
    injectHTML += `<div style='width:${boxSize}px; height:${boxSize}px; margin:10px; background-color:${getRandomHexColor()}'></div>`;
    boxSize += 10;
  }
  boxesEl.insertAdjacentHTML('beforeend', injectHTML);
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
}
