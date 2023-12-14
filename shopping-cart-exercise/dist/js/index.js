const productButtons = document.querySelectorAll("button");
const shoppingCart = [];
const cart = document.querySelector("#cart");
const openCartButton = document.querySelector("#open-cart");
const cartNumber = document.getElementById("productsInCart");
function updateCart(button) {
    const exists = shoppingCart.find((x) => x === button.parentElement.dataset.product);
    if (exists != undefined) {
        alert("Du har redan lagt till denna produkt!");
    }
    else {
        shoppingCart.push(button.parentElement.dataset.product);
        listProductsInCart(button.parentElement.dataset.product);
        cartNumber.innerHTML = shoppingCart.length.toString();
    }
}
function addClickEvent() {
    productButtons.forEach((button) => {
        button.addEventListener("click", () => {
            updateCart(button);
        });
    });
    openCartButton.addEventListener("click", () => {
        document.querySelector(".cart-wrapper").classList.toggle("hide");
    });
}
function listProductsInCart(button) {
    let list = cart.querySelector("ul");
    const product = document.createElement("li");
    product.innerHTML = button;
    list.appendChild(product);
}
addClickEvent();
