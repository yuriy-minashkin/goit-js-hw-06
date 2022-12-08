const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('#controls>input');
const outputEl = document.querySelector('#boxes');

createBtn.addEventListener('click', onCreateBtnClick);

function onCreateBtnClick() {
  createBoxes(inputEl.value);
  inputEl.value = "";
};

function createBoxes(amount) {
  onDestroyBtnClick();
  for (let i = 0; i < amount; i ++) {
    const boxEl = document.createElement('div');
    boxEl.style.width = `${30 + i*10}px`;
    boxEl.style.height = `${30 + i*10}px`;
    boxEl.style.backgroundColor = getRandomHexColor();
    outputEl.appendChild(boxEl);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

destroyBtn.addEventListener('click', onDestroyBtnClick);

function onDestroyBtnClick() {
  outputEl.innerHTML = "";
}