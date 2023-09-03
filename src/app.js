const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = document.querySelector('.height').value;
  const weight = parseInt(document.querySelector('.weight').value);
  const result = document.querySelector('#result');
  console.log(height);
  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `please provide height it's not valid ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please provide valid weigth it's not valid ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `${bmi}`;
  }
});
