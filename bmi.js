const form = document.querySelector('form');
//const height = parseInt(document.querySelector('#height').value)
//empty value dibe submit er ager
form.addEventListener('submit', function (e) {
  e.preventDefault(); //server e jate na jay

  const height = parseInt(document.querySelector('#height').value);
  console.log(height);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height <= 0 || isNaN(height) || height === '') {
    results.innerHTML = 'Please give a valid height :';
  } else if (weight <= 0 || isNaN(weight) || weight === '') {
    results.innerHTML = 'Please give a valid weight :';
  } else {
    const bmi = (weight / ((height * height) / 1000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
