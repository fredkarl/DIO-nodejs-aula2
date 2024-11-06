// -> add item ✔️
async function addItem(userCart, item) {
  userCart.push(item);
}

// -> calculate total ✔️
async function calculateTotal(userCart) {
  const result = userCart.reduce((total, item) => total + item.subtotal, 0);
  console.log(`\nShopee Cart Total: R$${result.toFixed(2)}`);
}

// -> delete item ✔️
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if(index !== -1) {
    userCart.splice(index, 1);
  };
}

// -> display items from my cart
async function displayCart(userCart) {
  console.log("\nShopee cart list:");
  userCart.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - R$${item.price} | ${item.qtd}x | Subtotal: R$${item.subtotal}`);
  });
}

// -> remove an existent item
async function removeItem(userCart, item) {
  
  //1. found index of the item
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  // 2. in case dont found any item
  if(indexFound == -1) {
    console.log("item não encontrado");
    return;
  }

  // 3. item > 1 remove one item, item iqual one remove the item
  if(userCart[indexFound].qtd > 1) {
    userCart[indexFound].qtd -= 1;
    userCart[indexFound].subtotal = userCart[indexFound].price * userCart[indexFound].qtd;
  } else if(userCart[indexFound].qtd == 1) {
    userCart.splice(indexFound, 1);
    userCart[indexFound].subtotal = userCart[indexFound].price * userCart[indexFound].qtd;
  }
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart }


