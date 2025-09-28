// Toggle hamburger menu
function toggleMenu() {
  const navMenu = document.querySelector("nav ul");
  navMenu.classList.toggle("show");
}

document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", () => {
    const navMenu = document.querySelector("nav ul");
    if (navMenu.classList.contains("show")) {
      navMenu.classList.remove("show");
    }
  });
});

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


