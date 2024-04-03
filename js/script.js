"use strict";

const shoppingList = ["fragole", "pasta", "sacchetti", "salame"];

let listElem = document.querySelector(".shopping-list");

let i = 0

while (i < shoppingList.length) {
  const curItem = shoppingList[i]; // string

  const listItemElem = document.createElement("li"); // object
  listItemElem.innerHTML = curItem;
  console.log(listItemElem);

  listItemElem.addEventListener("click", function() {
    listItemElem.classList.toggle("done");
  });

  listElem.append(listItemElem);

  i++;
}

