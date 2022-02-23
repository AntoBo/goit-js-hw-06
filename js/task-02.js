const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector("#ingredients");
const itemsArray = [];

for (const ing of ingredients) {
  const itemEl = document.createElement("li");
  itemEl.textContent = ing;
  itemEl.classList.add("item");
  itemsArray.push(itemEl);
}
ingredientsListEl.append(...itemsArray);
