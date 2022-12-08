const inputEl = document.querySelector("input");

inputEl.addEventListener('blur', onInputValidation);

function onInputValidation() {
  if (this.value.length === +this.dataset.length) {
    return this.classList.add("valid"),
    this.classList.remove("invalid");
  }
  return this.classList.add("invalid"),
  this.classList.remove("valid");
}