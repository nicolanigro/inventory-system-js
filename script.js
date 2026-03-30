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
    return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
  }

  static applyDiscount(products, discount) {
    products.forEach(product => {
      product.price = product.price * (1 - discount);
    });
  }
}

class PerishableProduct extends Product {
  constructor(name, price, quantity, expirationDate) {
    super(name, price, quantity);
    this.expirationDate = expirationDate;
  }

  toString() {
    return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`;
  }
}

// Store Class
class Store {
  constructor() {
    this.inventory = [];
  }

  addProduct(product) {
    this.inventory.push(product);
  }

  getInventoryValue() {
    return this.inventory.reduce((total, product) => {
      return total + product.getTotalValue();
    }, 0);
  }

  findProductByName(name) {
    const found = this.inventory.find(product => product.name === name);
    return found || null;
  }
}

// TESTING STORE
const store = new Store();

const p1 = new Product("Apple", 2.5, 50);
const p2 = new Product("Bread", 3, 20);
const p3 = new Product("Rice", 10, 15);
const p4 = new PerishableProduct("Milk", 4.5, 10, "2026-04-01");
const p5 = new PerishableProduct("Cheese", 6, 8, "2026-04-10");

store.addProduct(p1);
store.addProduct(p2);
store.addProduct(p3);
store.addProduct(p4);
store.addProduct(p5);

console.log("Inventory Value:", store.getInventoryValue());

const found = store.findProductByName("Milk");
console.log(found ? found.toString() : "Not found");
