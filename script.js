let cart = []; // Array to store cart items

// Simulate product data (replace with your actual data)
const products = [
  { id: 1, name: 'IPHONE 13', price: 42990, image: 'image/iphone13.jpg' },
  { id: 2, name: 'IPHONE 14', price: 49900, image: 'image/iphone14.jpg' },
  { id: 3, name: 'IPHONE 15', price: 56990, image: 'image/iphone15.jpg' },
  { id: 5, name: 'SAMSUNG S22', price: 45990, image: 'image/samsung s22.jpg' },
  { id: 4, name: 'SAMSUNG S23', price: 56990, image: 'image/samsung s23.jpg' },
  { id: 6, name: 'SAMSUNG S24', price: 61990, image: 'image/samsung s24.jpg' },
];

// Function to add product to cart
function addToCart(productId) {
  const product = products.find(item => item.id === parseInt(productId)); // Find product by ID
  if (product) {
    cart.push(product); // Add product to cart array
  }
  updateCart(); // Update cart display and counter
}

// Function to update cart display and counter
function updateCart() {
  let cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = ''; // Clear existing cart items

  let cartCountEl = document.getElementById('cart-count');
  cartCountEl.textContent = cart.length; // Update cart item count

  let cartTotal = document.getElementById('cart-total');
  let total = 0;

  // Loop through cart items and display them
  for (let item of cart) {
    let cartItem = document.createElement('li');
    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      ${item.name} - ₱${item.price}
    `;
    cartItems.appendChild(cartItem);
    total += item.price;
  }

  cartTotal.textContent = total; // Update cart total
}

// Function to clear cart
function clearCart() {
  cart = []; // Empty the cart array
  updateCart(); // Update cart display and counter
}