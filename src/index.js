import createItem from "./services/itens.js"; 
import * as cartService from "./services/cart.js";

const myCart = [];
const myWishList = [];

console.log("Welcome to your Shopee Cart!");

const item1 = await createItem("Hotweels mustang", 20.99, 1);
const item2 = await createItem("Hotweels Puma", 39.99, 3);

// add two items on my cart
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// await cartService.removeItem(myCart, item2)
await cartService.removeItem(myCart, item2)

await cartService.displayCart(myCart);

// delete two items from my cart 
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);

await cartService.calculateTotal(myCart);