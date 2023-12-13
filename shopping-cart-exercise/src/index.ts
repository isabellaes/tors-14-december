const productButtons: NodeList = document.querySelectorAll('button');
const shoppingCart: (string | null)[] = [];
const cart: HTMLElement | null = document.querySelector('#cart');
const openCartButton: HTMLElement | null = document.querySelector('#open-cart');

function updateCart(): void {
    const elem: HTMLElement | null = document.querySelector('#productsInCart'); // Kan antigen vara ett HTMLElement eller null om inget element hittas

    if (elem) { // Kolla att ett element finns
        elem.textContent = shoppingCart.length.toString();
    }
}

function addClickEvent(): void { // Void betyder att funktionen ej returnerar något värde
    productButtons.forEach((productButton) => {
        productButton.addEventListener('click', (event: Event) => {
            console.log('Du klickade på en knapp', event.target);
            const clickedElem: HTMLElement = event.target as HTMLElement; // För att kunna använda parentElement behöver vi göra om det till ett HTMLElement istället för typen EventTarget

            if (clickedElem.parentElement) {
                const productTitle: string | null = clickedElem.parentElement.getAttribute('data-product');
                shoppingCart.push(productTitle);
                console.log(shoppingCart);
                
                updateCart();
            }
        });
    });
}

function listProductsInCart(): void {
    if (cart) {
        cart.innerHTML = '';

        shoppingCart.forEach((item: string | null) => {
            const elem: HTMLElement = document.createElement('li');
            
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
