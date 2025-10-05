

// Toggle hamburger menu
function toggleMenu() {
  const navMenu = document.querySelector("nav ul");
  navMenu.classList.toggle("show");
}

// CART SIDEBAR -----------------

// Open Cart Sidebar
document.querySelector('a[href="cart.html"]').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('cartSidebar').classList.add('active');
  document.getElementById('cartOverlay').classList.add('active');
});

// Close Cart Sidebar
function closeCart() {
  document.getElementById('cartSidebar').classList.remove('active');
  document.getElementById('cartOverlay').classList.remove('active');
}

// CART LOGIC -------------------------

// Get cart from localStorage or empty array
function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

// Save cart to localStorage
function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Add item to cart
function addToCart(productName, price) {
  let cart = getCart();
  const existingItem = cart.find(item => item.name === productName);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name: productName, price: price, quantity: 1 });
  }

  saveCart(cart);
  renderCart();

  document.getElementById('cartSidebar').classList.add('active');
  if (document.getElementById('cartOverlay')) {
    document.getElementById('cartOverlay').classList.add('active');
  }
}

// Increase quantity
function increaseQuantity(index) {
  let cart = getCart();
  cart[index].quantity += 1;
  saveCart(cart);
  renderCart();
}

// Decrease quantity
function decreaseQuantity(index) {
  let cart = getCart();
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
  } else {
    cart.splice(index, 1);
  }
  saveCart(cart);
  renderCart();
}

// Remove item from cart
function removeFromCart(index) {
  let cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  renderCart();
}

// Render cart items
function renderCart() {
  const cartItemsContainer = document.querySelector("#cartSidebar .cart-items");
  cartItemsContainer.innerHTML = '';

  const cart = getCart();
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cart.forEach((item, index) => {
      const div = document.createElement("div");
      div.className = "cart-item d-flex justify-content-between align-items-center p-2 mb-2 rounded shadow-sm";

      div.innerHTML = `
        <div>
          <span class="fw-bold">${item.name}</span>
          <span class="text-muted ms-2">฿${item.price}</span>
        </div>
        <div class="d-flex align-items-center">
          <button class="btn btn-sm btn-outline-secondary me-2" onclick="decreaseQuantity(${index})">−</button>
          <span>${item.quantity}</span>
          <button class="btn btn-sm btn-outline-secondary ms-2" onclick="increaseQuantity(${index})">+</button>
          <button class="btn btn-sm btn-danger ms-3" onclick="removeFromCart(${index})">Remove</button>
        </div>
      `;

      cartItemsContainer.appendChild(div);
    });
  }
}

// Render cart on page load
document.addEventListener('DOMContentLoaded', function() {
  renderCart();
});

function goToCheckout() {
  window.location.href = 'checkout.html';
}

function renderCheckout() {
  const container = document.getElementById('checkoutItems');
  const totalDisplay = document.getElementById('checkoutTotal');
  const cart = getCart();
  let total = 0;

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    totalDisplay.textContent = "0";
    return;
  }

  container.innerHTML = '<h5 class="mb-3">Your Flavors</h5>';
  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const div = document.createElement('div');
    div.className = "d-flex justify-content-between align-items-center p-2 mb-2 border rounded";
    div.innerHTML = `
      <div>
        <span class="fw-bold text-primary">Flavor: ${item.name}</span>
        <span class="text-muted ms-2">฿${item.price} × ${item.quantity}</span>
      </div>
      <div><strong>฿${itemTotal}</strong></div>
    `;
    container.appendChild(div);
  });

  totalDisplay.textContent = total;
}

// Link to Sign Up page

window.onload=function (){
  var signupButton = document.getElementById("signupButton");

function updateButton(){

  var user = localStorage.getItem("user");
    

  if(user){
     
    signupButton.textContent = user + " (Sign Out)";
    signupButton.removeAttribute("href");
    signupButton.onclick = function(e){
    e.preventDefault();
    localStorage.removeItem("user");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    updateButton();
       
};
      
     
  }else {
    signupButton.textContent = "Sign Up";
    signupButton.href = "signup.html";
    signupButton.onclick = null;
}
    }
    updateButton();
    
  }


function newsletter(){
  let emailInput = document.getElementById("footer-email").value.trim();

  if (emailInput === "") {
    alert("Please enter your email.");
  }

  if (!emailInput.includes("@")) {
    alert("Please enter a valid email address.");
  }

  alert("For subscribing to our newsletter,\nyou get a free drink with your next order!");
}


