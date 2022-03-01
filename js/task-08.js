const formEl = document.querySelector('.login-form');

// alert('Hello');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const values = {
    email: event.currentTarget.elements.email.value,
    password: event.currentTarget.elements.password.value,
  };

  if (values.email && values.password) {
    event.currentTarget.reset();
    return console.log(values);
  } else alert('Заповніть усі поля!');
}
