// script.js

// Function to add items to the cart
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`Added ${name} to the cart!`);
}

// Function to display cart items on the cart page
function displayCartItems() {
  const cartItemsList = document.getElementById('cart-items');
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Clear existing cart items
  cartItemsList.innerHTML = '';

  // Add cart items to the list
  cart.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - $${item.price}`;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      removeFromCart(index);
    });

    listItem.appendChild(removeButton);
    cartItemsList.appendChild(listItem);
  });

  // Calculate and display the total price
  const totalPrice = calculateTotalPrice(cart);
  displayTotalPrice(totalPrice);
}

// Function to remove an item from the cart
function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCartItems();
}

// Function to calculate the total price of the items in the cart
function calculateTotalPrice(cart) {
  let total = 0;
  cart.forEach((item) => {
    total += item.price;
  });
  return total;
}

// Function to display the total price
function displayTotalPrice(totalPrice) {
  const totalElement = document.getElementById('total-price');
  totalElement.textContent = `$${totalPrice}`;
}

// Function to handle the checkout process
function checkout() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cart.length === 0) {
    alert('Your cart is empty. Please add items before checking out.');
  } else {
    window.location.href = 'checkout.html';
  }
}

// Function to display products on the products page
function displayProducts() {
  const productsList = document.getElementById('products');
  products.forEach((product) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${product.name} - $${product.price}`;

    const addButton = document.createElement('button');
    addButton.textContent = 'Add to Cart';
    addButton.addEventListener('click', () => {
      addToCart(product.name, product.price);
    });

    listItem.appendChild(addButton);
    productsList.appendChild(listItem);
  });
}

// Function to handle placing the order
function placeOrder() {
  event.preventDefault(); // Prevent form submission

  // Process the order and any other necessary operations
  // ...

  // Display thank you message and hide the form
  document.getElementById('checkout-form').style.display = 'none';
  document.getElementById('thank-you-message').style.display = 'block';
}



// List of products (you can add more products here)
const products = [
  { name: 'Product 1', price: 10 },
  { name: 'Product 2', price: 20 },
  { name: 'Product 3', price: 30 },
  // Add more products if needed
];

// Call functions to display cart items and products when the page loads
displayCartItems();
displayProducts();

