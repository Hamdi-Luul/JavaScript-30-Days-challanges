// DOM ELEMENTS SELECTING.
const cartIcon = document.querySelector('.cart-icon');
const cartSection = document.querySelector('.cart-section');
const productsSection = document.querySelector('#products-section');
const massage = document.querySelector(".massage");
const cartCount = document.getElementById("cart-count");





// PRODUCTS DATA

let products = [
    {
        id: 1,
        name: 'nike-1',
        image: 'images/nice1.jpg',
        price: 8,
        quantity: 1
    },
    {
        id: 2,
        name: 'nike-2',
        image: 'images/nice2.jpg',
        price: 12,
        quantity: 1
    },
    {
        id: 3,
        name: 'nike-3',
        image: 'images/nice3.jpg',
        price: 11,
        quantity: 1
    }

]
// CART DATA
let cart = [];
let totalPrice = 0.00;


//CART ICON TOGLING
cartIcon.addEventListener('click', () => {
    cartSection.classList.toggle('active');

});

// GENERATE / RENDER PRODUCTS ON THE PAGE USING JS.
/*
1. remove old data
2. loop products
3.create a product card
4.append to the products section

*/
function renderProducts() {
    //clear old data
    productsSection.innerHTML = '';
    //loop products
    products.forEach(product => {
        //create product card
        const productCard = document.createElement("div");
        //add to classname
        productCard.classList.add("item-one");
        productCard.innerHTML = `
                <img src="${product.image}" alt="NIKE-1">
                    <h3 class="name">${product.name}</h3> 
                <div class="price">
                    <h2 id="price"> $${product.price.toFixed(2)}</h2>
                </div>
                
                <div class="cart-btn">
                    <button class="add-cart-btn" data-id="${product.id}">Add to cart</button>
                </div>
        `;
        //append the product card
        productsSection.appendChild(productCard);
    });


}
renderProducts();





//ADD ITEM INTO CART.

function addToCart() {
    productsSection.addEventListener('click', (event) => {

        if (event.target.classList.contains("add-cart-btn")) {
            //get the id the product was clicked.
            const itemId = Number(event.target.dataset.id);
            const selectedProduct = products.find(product => product.id === itemId);
            const existingItem = cart.find(item => item.id === itemId);
            /*if selecte product exist inrease it quantity
             else add to the cart array.
            */
            if (existingItem) {
                existingItem.quantity++;


            } else {
                cart.push({
                    id: selectedProduct.id,
                    name: selectedProduct.name,
                    image: selectedProduct.image,
                    price: selectedProduct.price,
                    quantity: 1
                });
                massage.textContent = "New item was added";
                massage.style.color = "green";

            }
            //call here cart render function
            displayCartIems();
            calculateTotalPrice();
            //CALL COUNT CART ITEMS FUNCTION HERE.
            countCartIems();

        };

    });
};
addToCart();

// COUNT ITEMS IN THE CART
function countCartIems() {
    cartCount.textContent = cart.reduce((total, item) => {
        return total + item.quantity;

    }, 0)
}

//GENERATE / RENDER CART ITEMS IN THE CART PAGE.
/*
1. remove old data
2. loop cart items
3.create a cart item card
4.append to the cart section

*/
function displayCartIems() {
    //clear old data
    cartSection.innerHTML = '';
    //loop items
    cart.forEach(item => {
        //create item card
        const itemCard = document.createElement("div");
        itemCard.classList.add("cart-item");
        itemCard.innerHTML = `
         
                <img src="${item.image}" alt="NIKE-1">

                <h3 class="name">${item.name}</h3>
               
                <div class="price">
                    <h2 id="price"> ${item.price}</h2>
                </div>
                <div class="quantity-control">
                    <button class="quantity-decrease">&minus;</button>
                    <h4 class="quantity">${item.quantity}</h4>
                    <button class="quantity-increase" data-id="${item.id}">&plus;</button>
                </div>
           
                <div class="remove-button">
                    <button id="remove-btn">&times;</button>
                </div>
                
        `;

        //apend items on the page
        cartSection.appendChild(itemCard);
        //  console.log(cartSection)


    });
    const totalPrice = document.createElement("div");
    totalPrice.classList.add("total-price");
    totalPrice.innerHTML = `<h3 class="total">Total:0</h3>`;
    cartSection.appendChild(totalPrice);
    //increaseQuantity();
};


//CALCULATE THE TOTAL PRICE OF THE ITEMS.

function calculateTotalPrice() {
    const total = document.querySelector('.total');
    totalPrice = cart.reduce((total, item) => {
        return total + (item.quantity * item.price)
    }, 0)
    //    console.log(totalPrice)
    total.textContent = `Total:$${totalPrice.toFixed(2)}`;
}

//INCREASE QUIANTITY OF THE ITEM

function increaseQuantity() {
    cartSection.addEventListener('click', (event) => {
        if (event.target.classList.contains("quantity-increase")) {
            //get the item was clicked
            const itemId = Number(event.target.dataset.id);
            const getItem = cart.find(item => item.id === itemId);
            const cartItem = event.target.closest(".cart-item");
            //console.log(cartItem)
            const quantityDisplay = cartItem.querySelector(".quantity");
            //console.log(quantityDisplay)
            quantityDisplay.textContent = ++getItem.quantity;
            calculateTotalPrice();
            countCartIems();

        };
    });
};

 increaseQuantity();




