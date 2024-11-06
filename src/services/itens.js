// -> create item with right subtotal 
async function createItem(name, price, qtd) {
 const subtotal = price * qtd;
 return {
  name, 
  price,
  qtd,
  subtotal
 };
}

export default createItem;