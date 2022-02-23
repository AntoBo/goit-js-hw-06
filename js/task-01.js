//1
const categoriesListEl = [...document.querySelectorAll("#categories > li")];

console.log("Number of categories: " + categoriesListEl.length);

//2
const itemsTitlesEl = document.querySelectorAll("h2");
const innerListEl = document.querySelectorAll("#categories ul");

itemsTitlesEl.forEach((el, i) => {
  console.log("Category: " + el.textContent);
  console.log("Elements: " + innerListEl[i].children.length);
});
