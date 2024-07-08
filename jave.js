document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.target.input_button.value);

    shoppingList(e.target.input_button.value);

    form.reset();
  });
});

//This function handles new items in ty

function shoppingList(toShop) {
  let list = document.createElement("li");
  let purchase = document.createElement("button");
  purchase.id = "purchase_btn";
  let remove = document.createElement("button");
  remove.id = "remove_btn";
  remove.addEventListener("click", deleteItems);
  remove.textContent = "Delete";
  list.textContent = `${toShop}`;
  list.appendChild(remove);
  list.appendChild(purchase);
  purchase.textContent = "Marked Purchase";
  purchase.addEventListener("click", markedPurchase);
  document.querySelector("#listitems").appendChild(list);
}

function deleteItems(purchaseform) {
  purchaseform.target.parentNode.remove();
}

function markedPurchase(purchase) {
  purchase.target.parentNode.style.fontFamily = "Sans Serif";
}

const clearList = document.getElementById("cancel");
const myShoppingList = document.getElementById("list");

clearList.addEventListener("click", () => {
  myShoppingList.innerHTML = "";
});
