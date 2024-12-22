document.addEventListener("DOMContentLoaded", () => {
    console.log("Page fully loaded and scripts ready!");
  });
  
  document.querySelector('.subscribe-btn').addEventListener('click', function () {
    const email = document.querySelector('.email-input').value;
    if (email === '') {
      alert('Por favor, ingresa tu correo electrónico.');
    } else {
      alert('¡Gracias por suscribirte!');
    }
  });
  

  // Redireccionar al enlace de WhatsApp
document.getElementById('whatsapp-btn').addEventListener('click', () => {
  const phoneNumber = '3123304140';  // Número WhatsApp Business en formato internacional
  const url = `https://wa.me/${phoneNumber}`;
  window.open(url, '_blank');  // Abre en una nueva pestaña
});

// Función para actualizar el contador del carrito
function updateCartCount(count) {
  const cartCountElement = document.querySelector('.cart-count');
  cartCountElement.textContent = count; // Actualiza el número de productos
}

// Simulando agregar productos al carrito
let cartItems = 3; // Ejemplo de cantidad de productos en el carrito
updateCartCount(cartItems);

// Puedes actualizar el contador según la interacción con el carrito
// Por ejemplo, incrementando cuando el usuario agrega un producto
cartItems++;
updateCartCount(cartItems);  // Esto actualizaría el contador a 4


// Carrito de compras

// Función para añadir productos al carrito
function addToCart(productName, productPrice) {
  // Crear un objeto de producto
  const product = {
    name: productName,
    price: productPrice
  };

  cart.push(product); // Agregar el producto al carrito
  updateCartCount(cart.length); // Actualizar el contador en el icono del carrito
  updateCartPopup(); // Actualizar el popup del carrito
}

// Función para actualizar el contador del carrito
function updateCartCount(count) {
  const cartCountElement = document.querySelector('.cart-count');
  cartCountElement.textContent = count;
}

// Función para mostrar el carrito emergente
function toggleCart() {
  const cartPopup = document.getElementById('cart-popup');
  cartPopup.classList.toggle('show'); // Mostrar u ocultar el popup
}

// Función para actualizar el popup con los productos del carrito
function updateCartPopup() {
  const cartItemsList = document.querySelector('.cart-items-list');
  const cartTotal = document.querySelector('.cart-total');

  cartItemsList.innerHTML = ''; // Limpiar la lista de productos

  let total = 0;
  cart.forEach(product => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="product-name">${product.name}</span>
      <span class="product-price">$${product.price.toFixed(2)}</span>
    `;
    cartItemsList.appendChild(li);
    total += product.price;
  });

  cartTotal.textContent = total.toFixed(2); // Mostrar el total del carrito
}

// Función para proceder al pago
function checkout() {
  alert('Procediendo al pago...');
  cart = []; // Vaciar el carrito
  updateCartCount(0); // Resetear el contador
  updateCartPopup(); // Limpiar el popup
  toggleCart(); // Cerrar el popup
}

// Carrito de compras
let cart = [];

// Función para añadir productos al carrito
function addToCart(productName, productPrice) {
  const product = {
    name: productName,
    price: productPrice
  };

  cart.push(product); // Agregar el producto al carrito
  updateCartCount(cart.length); // Actualizar el contador en el icono del carrito
  updateCartPopup(); // Actualizar el popup del carrito
}

// Función para actualizar el contador del carrito
function updateCartCount(count) {
  const cartCountElement = document.querySelector('.cart-count');
  cartCountElement.textContent = count;
}

// Función para mostrar el carrito emergente
function toggleCart() {
  const cartPopup = document.getElementById('cart-popup');
  cartPopup.classList.toggle('show'); // Mostrar u ocultar el popup
}

// Función para actualizar el popup con los productos del carrito
function updateCartPopup() {
  const cartItemsList = document.querySelector('.cart-items-list');
  const cartTotal = document.querySelector('.cart-total span');

  cartItemsList.innerHTML = ''; // Limpiar la lista de productos

  let total = 0;
  cart.forEach(product => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="product-name">${product.name}</span>
      <span class="product-price">$${product.price.toFixed(2)}</span>
    `;
    cartItemsList.appendChild(li);
    total += product.price;
  });

  cartTotal.textContent = total.toFixed(2); // Mostrar el total del carrito
}

// Función para proceder al pago
function checkout() {
  alert('Procediendo al pago...');
  cart = []; // Vaciar el carrito
  updateCartCount(0); // Resetear el contador
  updateCartPopup(); // Limpiar el popup
  toggleCart(); // Cerrar el popup
}

// Función para vaciar el carrito
function clearCart() {
  cart = []; // Vaciar el carrito
  updateCartCount(0); // Resetear el contador
  updateCartPopup(); // Limpiar el popup
  toggleCart(); // Cerrar el popup
}
