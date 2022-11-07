let menu = {
  drinks: ["Water", "Tea", "Sweet Tea", "Coke", "Dr. Pepper", "Sprite"],
  entrees: [
    "Hamburger w/ Fries",
    "Grilled Cheese w/ Tater Tots",
    "Grilled Chicken w/ Veggies",
    "Chicken Fried Steak w/ Mashed Potatoes",
    "Fried Shrimp w/ Coleslaw",
    "Veggie Plate",
  ],
  desserts: ["Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"],
};

const fullMenuDrop = document.querySelector("#foodMenu");
const categoryMenuDrop = document.querySelector("#categoryItems");
const categories = Object.keys(menu);
let fullMenuLength = categories.length;

// fullMenuDrop.onfullscreenchange();

//pop first html select list
for (let i = 0; i < fullMenuLength; i++) {
  let theOption = new Option();
  fullMenuDrop.appendChild(theOption);
}

//need to find select option chosen and grab it's list items

//pop second html select list
/*   for (let i = 0; i < menu.categories[i].length; i++) {
    let theOption = new Option(menu.categories[i]);
    categoryMenuDrop.appendChild(theOption);
  } */

//Removing options
/*   for (let i = 0; i < numberOfOptionNodes; i++) {
    if (itemToDelete == selectOptions[i].value) {
      selectMenu.remove(i);
      break;
    }
  } */