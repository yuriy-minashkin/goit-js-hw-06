const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const items = ingredients.map(ingredient => {
  const ingredientItem = document.createElement('li');
  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add('item');

  return ingredientItem;
});

const ingredientsEl = document.querySelector('#ingredients');
ingredientsEl.append(...items);






