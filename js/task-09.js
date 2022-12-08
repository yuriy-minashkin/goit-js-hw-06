const bodyEl = document.body;
const buttonEl = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');

buttonEl.addEventListener('click', onBtnClick);

function onBtnClick() {
  let randomHexColor = getRandomHexColor();
  
  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

  colorEl.textContent = randomHexColor;
  bodyEl.style.backgroundColor = randomHexColor;
}


