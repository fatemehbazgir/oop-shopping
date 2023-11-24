class Cart {
  constructor(parent, price) {
    this.parent = parent;
    this.price = price;
    this.products = [];
    this.toShow = [];
  }
  showProducts() {
    this.toShow = [...new Set(this.products)];
    this.parent.innerHTML = "";
    this.toShow.forEach((product) => {
      const qty = this.products.filter((p) => p.id === product.id).length;
      this.createCart(product, qty);
    });
  }
  createCart(data, qty) {
    const cardEle = document.createElement("div");
    const imgEle = this.productImg(data);
    const infoEle = this.productInfo(data);
    const controlEle = this.productControl(data, qty);
    cardEle.innerHTML = imgEle;
    cardEle.innerHTML += infoEle;
    cardEle.innerHTML += controlEle;
    this.parent.appendChild(cardEle);
  }
  productImg(data) {
    const { image, alt } = data;
    const imgJSX = `<img src=${image} alt=${alt}>`;
    return imgJSX;
  }
  productInfo(data) {
    const { name, price } = data;
    const infoJSX = `
    <div id="cart-info">
    <h4>${name}</h4>
    <p>$ ${price}</p>
    </div>
    `;
    return infoJSX;
  }
  productControl(data, qty) {
    const { id } = data;
    const controlJSX = `
    <div id="cart-control">
    <div>
    <button data-id=${id}>-</button>
    <span>${qty}</span>
    <button data-id=${id}>+</button>
    </div>
    <button data-id=${id}>Remove</button>
    </div>
    `;
    return controlJSX;
  }
}

export default Cart;
