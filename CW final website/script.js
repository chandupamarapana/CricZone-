if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()// If the DOM is already loaded, execute the 'ready' function immediately
}
// This function sets up event listeners and actions when the DOM is ready
function ready() {
    // Get all elements with class 'btn-danger' and attach 'removeCartItem' function to their click event
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
    // Get all elements with class 'cart-quantity-input' and attach 'quantityChanged' function to their change event
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
    // Get all elements with class 'item_button' and attach 'addToCartClicked' function to their click event
    var addToCartButtons = document.getElementsByClassName('item_button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    // Attach 'purchaseClicked' function to the click event of the element with class 'btn-purchase'
    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}
// Function to handle the purchase button click event
function purchaseClicked() {
    // Show an alert to thank the user for the purchase
    alert('Thank you for your purchase')
    // Remove all items from the cart by emptying the 'cart-items' container
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    // Update the cart total price
    updateCartTotal()
}
// Function to remove a cart item when the 'REMOVE' button is clicked
function removeCartItem(event) {
    var buttonClicked = event.target
    // Remove the entire row (parent of parent of the button) containing the 'REMOVE' button
    buttonClicked.parentElement.parentElement.remove()
    // Update the cart total price after removing the item
    updateCartTotal()
}

// Function to handle changes in the quantity input of an item
function quantityChanged(event) {
    var input = event.target
    // If the input value is not a number or is less than or equal to 0, set it to 1
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    // Update the cart total price after the quantity change
    updateCartTotal()
}
// Function to handle adding an item to the cart when the 'ADD TO CART' button is clicked
function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    // Extract the item details from the shop item
    var title = shopItem.getElementsByClassName('item_title')[0].innerText
    var price = shopItem.getElementsByClassName('item_price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('item_image')[0].src
    // Add the item to the cart
    addItemToCart(title, price, imageSrc)
    // Update the cart total price after adding the item
     updateCartTotal()
}
// Function to add an item to the cart
function addItemToCart(title, price, imageSrc) {
    // Create a new cart row element
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    // Get the cart items container
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    // Check if the item is already in the cart; if so, show an alert and return
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    // Create the contents of the cart row using the provided item details
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    // Set the inner HTML of the cart row to the generated contents
    cartRow.innerHTML = cartRowContents
    // Append the cart row to the cart items container
    cartItems.append(cartRow)
    // Attach event listeners for the new cart row: removeCartItem for 'REMOVE' button and quantityChanged for quantity input
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}
// Function to update the total price of the cart
function updateCartTotal() {
    // Get the cart items container and all cart rows
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    // Initialize the total price to 0
    var total = 0
     // Loop through each cart row to calculate the total price
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        // Extract the price and quantity of the item
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        // Calculate the total price for this item and add it to the overall total
        total = total + (price * quantity)
    }
    // Round the total to two decimal places
    total = Math.round(total * 100) / 100
    // Update the displayed cart total price
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

  
  