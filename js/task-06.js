const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onIntupBlur);

function onIntupBlur(event) {
  const inputLength = event.currentTarget.value.length;
  const validInputLength = Number(event.currentTarget.dataset.length);
  const inputClass = event.currentTarget.classList;

  if (inputLength >= validInputLength) {
    inputClass.remove('invalid');
    inputClass.add('valid');
  } else {
    inputClass.remove('valid');
    inputClass.add('invalid');
  }
}
