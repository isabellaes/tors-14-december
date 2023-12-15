const productButtons: NodeList = document.querySelectorAll("button");
let shoppingCart: (string | null)[] = [];
const cart: HTMLElement | null = document.querySelector("#cart");
const openCartButton: HTMLElement | null = document.querySelector("#open-cart");
const cartNumber: HTMLElement = document.getElementById("productsInCart");
const buttons = cart.querySelectorAll("button");

function updateCartIcon(): void {
  cartNumber.innerHTML = shoppingCart.length.toString();
}

function removeFromCart(product): void {
  console.log(shoppingCart.length);
  shoppingCart = shoppingCart.filter((element) => element != product);
  let list = cart.querySelector("ul");
  for (let index = 0; index < list.children.length; index++) {
    console.log(list.children.item(index));
    if (product === list.children.item(index).firstChild.textContent) {
      list.children.item(index).remove();
    }
  }
  updateCartIcon();
}

function addToCart(product): void {
  const exists = shoppingCart.find(
    (x) => x === product.parentElement.dataset.product
  );
  if (exists != undefined) {
    alert("Du har redan lagt till denna produkt!");
  } else {
    shoppingCart.push(product.parentElement.dataset.product);
    createCartElement(product.parentElement.dataset.product);
  }
}

function addClickEvent(): void {
  productButtons.forEach((button) => {
    button.addEventListener("click", () => {
      addToCart(button);
      updateCartIcon();
    });
  });

  openCartButton.addEventListener("click", () => {
    document.querySelector(".cart-wrapper").classList.toggle("hide");
  });
}

function createCartElement(product): void {
  let list = cart.querySelector("ul");
  const element = product;
  const product1 = document.createElement("li");
  product1.innerHTML = element;
  const removeButton = document.createElement("button");
  removeButton.style.backgroundColor = "red";
  removeButton.innerHTML = "Radera";
  removeButton.addEventListener("click", () => {
    removeFromCart(product);
  });
  product1.appendChild(removeButton);
  list.appendChild(product1);
}

addClickEvent();
