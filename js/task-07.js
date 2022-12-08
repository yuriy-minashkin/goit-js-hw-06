const slider = document.querySelector('#font-size-control');
const output = document.querySelector('#text');

output.style.fontSize = `${slider.value}px`;

slider.addEventListener('input', onSliderChange);

function onSliderChange() {
  output.style.fontSize = `${this.value}px`;
}
