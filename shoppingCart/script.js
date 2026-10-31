// DOM ELEMENTS SELECTING.
const cartIcon=document.querySelector('.cart-icon');
const cartSection=document.querySelector('.cart-section');
const productsSection=document.querySelector('#products-section');





// PRODUCTS DATA

let products=[
{
 id:1,
 name:'nice-1',
 image:'images/nice1.jpg',
 price:8,
 quantity:1
},
{
 id:2,
 name:'nice-2',
 image:'images/nice2.jpg',
 price:12,
 quantity:1
},
{
 id:3,
 name:'nice-3',
 image:'images/nice3.jpg',
 price:11,
 quantity:1
}

]
// CART DATA
let cart=[];
let totalPrice=0;
const isExist=false;
let quantity=1;

//CART ICON TOGLING
cartIcon.addEventListener('click',()=>{
    cartSection.classList.toggle('active');

});

// GENERATE / RENDER PRODUCTS ON THE PAGE USING JS.
/*
1. remove old data
2. loop products
3.create a product card
4.append to the products section

*/
function renderProducts(){
    //clear old data
    productsSection.innerHTML='';
    //loop products
    products.forEach(product=>{
        //create product card
        const productCard=document.createElement("div");
        //add to classname
        productCard.classList.add("item-one");
        productCard.innerHTML=`
                <img src="${product.image}" alt="NIKE-1">
                    <h3 class="name">${product.name}</h3> 
                <div class="price">
                    <h2 id="price"> $${product.price}</h2>
                </div>
                
                <div class="cart-btn">
                    <button class="add-cart-btn">Add to cart</button>
                </div>
        `;
     //append the product card
        productsSection.appendChild(productCard);
    });
     

}
renderProducts();