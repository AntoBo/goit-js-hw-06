const textEl = document.querySelector('#text');
const rangeControlEl = document.querySelector('#font-size-control');

function onRangeChange(event) {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
}

rangeControlEl.addEventListener('input', onRangeChange);
