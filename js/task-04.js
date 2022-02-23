let counterValue = 0;
const valueEl = document.querySelector('#value');
const decrBtn = document.querySelector('[data-action="decrement"]');
const incrBtn = document.querySelector('[data-action="increment"]');

decrBtn.addEventListener('click', () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});

incrBtn.addEventListener('click', () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});
