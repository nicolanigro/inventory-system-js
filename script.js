// Product Class
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getTotalValue() {
    return this.price * this.quantity;
  }

  toString() {
    return `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`;
  }

  static applyDiscount(products, discount) {
    products.forEach(product => {
      product.price = product.price * (1 - discount);
    });
  }
}

// PerishableProduct Class
class PerishableProduct extends Product {
  constructor(name, price, quantity, expirationDate) {
    super(name, price, quantity);
    this.expirationDate = expirationDate;
  }

  toString() {
    return `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`;
  }
}

// TESTING
const milk = new PerishableProduct("Milk", 4.5, 10, "2026-04-01");
const apple = new Product("Apple", 2.5, 20);

const products = [milk, apple];

console.log("Before discount:");
products.forEach(p => console.log(p.toString()));

// Apply 10% discount
Product.applyDiscount(products, 0.10);

console.log("After discount:");
products.forEach(p => console.log(p.toString()));
