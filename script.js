let cart = [];
let cartCount = 0;

function updateCartCount() {
    const cartLink = document.querySelector('a[href="#cart"]');
    cartLink.textContent = `Cart (${cartCount})`;
}

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    cartCount++;
    updateCartCount();
    alert(`${productName} added to cart! Total items: ${cartCount}`);
    console.log('Cart:', cart);
}

updateCartCount();