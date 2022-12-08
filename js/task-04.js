let counterValue = 0;
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const counterEl = document.querySelector('#value');

function decrement () {
  counterValue -= 1;
  counterEl.textContent = counterValue;
}
function increment () {
  counterValue += 1;
  counterEl.textContent = counterValue;
}

btnDecrement.addEventListener('click', decrement)
btnIncrement.addEventListener('click', increment)