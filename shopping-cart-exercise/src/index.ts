const productButtons: NodeList = document.querySelectorAll("button");
const shoppingCart: (string | null)[] = [];
const cart: HTMLElement | null = document.querySelector("#cart");
const openCartButton: HTMLElement | null = document.querySelector("#open-cart");
const cartNumber: HTMLElement = document.getElementById("productsInCart");

function updateCart(button): void {
  shoppingCart.push(button.parentElement.dataset.product);
  listProductsInCart(button.parentElement.dataset.product);
  cartNumber.innerHTML = shoppingCart.length.toString();
}

function addClickEvent(): void {
  // Void betyder att funktionen ej returnerar något värde
  // För att kunna använda parentElement behöver vi göra om det till ett HTMLElement istället för typen EventTarget
  productButtons.forEach((button) => {
    button.addEventListener("click", () => {
      updateCart(button);
    });
  });

  openCartButton.addEventListener("click", () => {
    document.querySelector(".cart-wrapper").classList.toggle("hide");
  });
}

function listProductsInCart(button): void {
  let list = cart.querySelector("ul");
  const product = document.createElement("li");
  product.innerHTML = button;
  list.appendChild(product);
}

addClickEvent();
