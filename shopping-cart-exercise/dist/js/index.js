const productButtons = document.querySelectorAll('button');
const shoppingCart = [];
const cart = document.querySelector('#cart');
const openCartButton = document.querySelector('#open-cart');
function updateCart() {
    const elem = document.querySelector('#productsInCart'); // Kan antigen vara ett HTMLElement eller null om inget element hittas
    if (elem) { // Kolla att ett element finns
        elem.textContent = shoppingCart.length.toString();
    }
}
function addClickEvent() {
    productButtons.forEach((productButton) => {
        productButton.addEventListener('click', (event) => {
            console.log('Du klickade på en knapp', event.target);
            const clickedElem = event.target; // För att kunna använda parentElement behöver vi göra om det till ett HTMLElement istället för typen EventTarget
            if (clickedElem.parentElement) {
                const productTitle = clickedElem.parentElement.getAttribute('data-product');
                shoppingCart.push(productTitle);
                console.log(shoppingCart);
                updateCart();
            }
        });
    });
}
function listProductsInCart() {
    if (cart) {
        cart.innerHTML = '';
        shoppingCart.forEach((item) => {
            const elem = document.createElement('li');
            if (item) {
                elem.innerText = item;
                elem.classList.add('product-title');
                cart.append(elem);
            }
        });
    }
}
if (openCartButton) {
    openCartButton.addEventListener('click', () => {
        if (cart) {
            cart.classList.toggle('hide');
            listProductsInCart();
        }
    });
}
addClickEvent();
