function calculateTotal() {
  // Retrieve input values
  const product1 = document.getElementById('product1').value;
  const product2 = document.getElementById('product2').value;
  const product3 = document.getElementById('product3').value;
  const product4 = document.getElementById('product4').value;
  const product5 = document.getElementById('product5').value;
  const points = document.getElementById('points').value;
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const address = document.getElementById('address').value.trim();

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validating compulsory fields
  if (!name || !email || !address) {
    alert('Please fill in all compulsory fields (Name, Email, Address) before placing your order.');
    return;
  }

  // Validate email format
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Validate points input
  if (isNaN(points) || points < 0 || points > 100) {
    alert('Points must be a number between 0 and 100.');
    return;
  }

  // Product details and calculations
  const products = [
    { name: 'Ethereal Elegance Theme', price: 1500, quantity: parseInt(product1) || 0 },
    { name: 'Modern Minimalism Theme', price: 2000, quantity: parseInt(product2) || 0 },
    { name: 'Vintage Vibes Theme', price: 3500, quantity: parseInt(product3) || 0 },
    { name: "Nature's Serenity Theme", price: 4000, quantity: parseInt(product4) || 0 },
    { name: 'Urban Chic Theme', price: 5500, quantity: parseInt(product5) || 0 }
  ];

  let total = 0;
  let summary = `Dear ${name}, you have ordered: `;
  let orderedItems = [];

  products.forEach(product => {
    if (product.quantity > 0) {
      const cost = product.price * product.quantity;
      total += cost;
      orderedItems.push(`${product.quantity} ${product.name}(s) at a cost of Rs. ${cost}`);
    }
  });

  // Calculate discount
  const discount = total * (points / 100);
  total -= discount;

  if (orderedItems.length > 0) {
    summary += orderedItems.join(', ');
    summary += `. Your total bill is Rs. ${total.toFixed(2)}.`;
  } else {
    summary = 'You have not selected any products to order.';
  }

  // Display summary and total price
  alert(summary);
  document.getElementById('totalPrice').innerText = `Total Price: Rs. ${total.toFixed(2)}`;
}
