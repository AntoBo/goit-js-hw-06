const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', () => {
  //   console.log('input detected!');
  console.log(inputEl.textContent);

  outputEl.textContent = inputEl.textContent;
});

console.log(outputEl.textContent);
console.log(inputEl.textContent);
