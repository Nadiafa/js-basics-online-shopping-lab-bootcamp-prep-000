    var cart = [];
    
    function getCart() {
     return cart;
    }
    
    function setCart(c) {
      cart = c;
      return cart;
    }
    
    function addToCart(item) {
      var item = newCartItem(item)
      getCart().push(item)
      return `${item.itemName} has been added to your cart.`
    }
    function newCartItem(itemName) {
      return {
        itemName: itemName,
        itemPrice: Math.floor(Math.random() * 100)
      }
    }

    function viewCart() {
      var emptyWording = "Your shopping cart is empty."
      var oneItemCart = "In your cart, you have "
      var moreItemsCart = " "
      if (getCart().length === 0) {
        return emptyWording;
      } else if (getCart().length >= 1) {
        oneItemCart += `${getCart()[0].itemName} at $${getCart()[0].itemPrice}`
        return oneItemCart;
      } else if (getCart().length >= 2) {
        for (var i=1; i<getCart().length -1; i++) {
          moreItemsCart = moreItemsCart + `, ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`
        }
        oneItemCart = oneItemCart +`${middleCartItemsDescription}, and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}`
        return `${oneItemCart}.`
      }
      
    }



function total() {
  var sum = 0
  for (var i=0; i<getCart().length; i++) {
    sum = sum + getCart()[i].itemPrice
  }
  return sum;
}


function removeFromCart(itemName) {
  var itemToRemove = searchCartForItemToRemove(itemName)
  return itemToRemove ? removeItemFromCart(itemToRemove) : notifyUserThereIsNoItemToRemove()
}
function searchCartForItemToRemove(itemName) {
  var searchResult
  for (var i=0; i<getCart().length; i++) {
    if (getCart()[i].itemName === itemName) {searchResult = getCart()[i]}
  }
  return searchResult
}
function removeItemFromCart(itemToRemove) {
  var indexOfItemToRemove = cart.indexOf(itemToRemove)
  //Array.prototype.splice()
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
  getCart().splice(indexOfItemToRemove,1)
}
function notifyUserThereIsNoItemToRemove() {
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  if (arguments[0] == undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var sumToCharge = total()
    setCart([])
    return `Your total cost is $${sumToCharge}, which will be charged to the card ${cardNumber}.`
  }
}