import Display from "./Display.js";

class Products extends Display {
  constructor(parent, products, cart) {
    super(parent, products);
    this.cart = cart;
  }

  showProducts() {
    this.products.forEach((product) => {
      this.createCard(product);
    });
  }
  productInfo(data) {
    const { id, name, price } = data;
    const infoJSX = `
    <div id="product-info">
    <h3>${name}</h3>
    <div>
    <span>$ ${price}</span>
    <button data-id=${id}>+</button>
    </div>
    </div>
    `;
    return infoJSX;
  }
  handleEvent() {
    const element = event.target;
    if (element.tagName === "BUTTON") {
      this.addToCart(element.dataset.id);
    }
  }
  addToCart(id) {
    const product = this.products.find((item) => item.id === +id);
    this.cart.products.push(product);
    this.cart.showProducts();
  }
}

export default Products;
