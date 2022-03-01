const textEl = document.querySelector('#text');
const rangeControlEl = document.querySelector('#font-size-control');

rangeControlEl.value = 18;
console.log(textEl.style.fontSize);

function onRangeChange(event) {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
}

rangeControlEl.addEventListener('input', onRangeChange);
