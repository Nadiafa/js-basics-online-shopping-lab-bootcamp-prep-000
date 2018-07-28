var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code 
 var item = cartItems(item);
 getCart().push(item);
 return `${item.itemName} has been added to your cart.`;


}
//function for object / addToCart
function cartItems(itemName) {
    return {
      itemName: itemName,
      itemPrice: Math.floor(Math.random() * 100)
    };
}




function generateCartDescription() {
  var cartDescription = 'In your cart, you have '
  if ( getCart().length >= 1 ) {
    cartDescription += `${getCart()[0].itemName} at $${getCart()[0].itemPrice}`}
  if ( getCart().length >= 2 ) {
    var middleCartItemsDescription = ''
    for (var i=1; i<getCart().length -1; i++) {
      middleCartItemsDescription += `, ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`}
    cartDescription += `${middleCartItemsDescription}, and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}`}
  return `${cartDescription}.`}



function viewCart() { 
  // write your code here
  if (getCart().length === 0) {
    return `Your shopping cart is empty.`;
  } else if () {
      var wording = `In your cart, you have `;
      if (getCart().length = 1) {
        return wording + `${getCart()[0].itemName} at $${getCart()[0].itemPrice}`;
  } else if (getCart().length = 2) {
      var wordingForTwo = ` `;
      for (var i=1; i<getCart().length -1; i++) {
        wordingForTwo = wordingForTwo+`, ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`
      }
  wording = wording + `${middleCartItemsDescription}, and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}`


















function viewCart() {
  return getCart().length === 0 ? "Your shopping cart is empty." : generateCartDescription()
}


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
