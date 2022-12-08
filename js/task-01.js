const itemsEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemsEl.length}`);

console.log(`Category: ${itemsEl[0].firstElementChild.textContent}`);
console.log(`Elements: ${itemsEl[0].lastElementChild.children.length}`);

console.log(`Category: ${itemsEl[1].firstElementChild.textContent}`);
console.log(`Elements: ${itemsEl[1].lastElementChild.children.length}`);

console.log(`Category: ${itemsEl[2].firstElementChild.textContent}`);
console.log(`Elements: ${itemsEl[2].lastElementChild.children.length}`);