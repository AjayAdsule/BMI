const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = document.querySelector('.height').value;
  const weight = parseInt(document.querySelector('.weight').value);
  const result = document.querySelector('#result');
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `please provide height it's not valid ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please provide valid weigth it's not valid ${weight}`;
  }
  // bmi is less than 18.6 is under weight normal range is 18.6 and 24.9 and greater than 24.9 is overweight
  if (bmi < 18.6) {
    result.innerHTML = `<span>Under Weight ${bmi}</span>`;
  } else if (bmi < 24.9 || bmi >= 18.6) {
    result.innerHTML = `<span> Normal weight ${bmi} </span>`;
  } else if (bmi > 24.9) {
    result.innerHTML = `<span>overweight ${bmi}</span>`;
  }
});
