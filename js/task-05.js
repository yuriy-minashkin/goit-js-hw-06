const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', outputChange);

function outputChange(event) {
  if (event.currentTarget.value.length === 0) {
    return nameOutputEl.textContent = 'Anonymous';
  }
  nameOutputEl.textContent = event.currentTarget.value;
}