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

  // STATIC METHOD
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

// Existing test
const milk = new PerishableProduct("Milk", 4.5, 10, "2026-04-01");

console.log(milk.toString());
console.log("Total value:", milk.getTotalValue());
