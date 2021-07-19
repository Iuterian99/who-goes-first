var elForm = document.querySelector('.site-form');
var elFormInput = elForm.querySelector('.form-input');
var elWalkerResult = document.querySelector('.result-box-walker');
var elBikeResult = document.querySelector('.result-box-bike');
var elCarResult = document.querySelector('.result-box-car');
var elPlaneResult = document.querySelector('.result-box-plane');
var speedPedesterian = 3.6;
var speedBike = 20.1;
var speedCar = 70;
var speedPlane = 800;

function calculateTime(distance, speed) {
  var hour = Math.floor(distance / speed);
  var min = Math.floor((distance / speed - hour) * 60);
  var sec = Math.floor(((distance / speed - hour) * 60 - min) * 60);
  return hour + ' hour ' + min + ' minutes ' + "\n" + sec + ' seconds ';
}

elForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  var formInput = Number(elFormInput.value.trim());

  if (formInput <= 0 || isNaN(formInput)) {
    elFormInput.classList.add('alert-input');
    return;
  } else {
    elFormInput.classList.remove('alert-input')
  }

  elWalkerResult.textContent = calculateTime(formInput, speedPedesterian);
  elBikeResult.textContent = calculateTime(formInput, speedBike);
  elCarResult.textContent = calculateTime(formInput, speedCar);
  elPlaneResult.textContent = calculateTime(formInput, speedPlane);
})