// grab elements

const searchInput = document.getElementById('search-input');

const buttons = document.querySelectorAll('.btns');
const foodLists = document.querySelector('.food-lists');
const orderBtn = document.querySelector('#order-page');
const orderPage = document.querySelector('.orderpage');

orderBtn.addEventListener('click', () => {
    orderPage.classList.toggle('active')
})


// foods
let foods = [
    {
        id: 1,
        name: "Burger",
        category: "fast-food",
        price: 5
    },
    {
        id: 2,
        name: "Pizza",
        category: "fast-food",
        price: 7
    },
    {
        id: 3,
        name: "Pancake",
        category: "breakfast",
        price: 4
    },
    {
        id: 4,
        name: "Juice",
        category: "drinks",
        price: 2
    }
];

// render food into page

function renderFoods(array) {
    foodLists.innerHTML = "";
    array.forEach(food => {
        const foodCard = document.createElement('div');
        // add class
        foodCard.classList.add("card")
        foodCard.innerHTML = `
        <h2>${food.name}</h2>
        <p>$${food.price}</p>
         <button  class="order-btn" data-id="${food.id}">Add to cart</button>
        
        `;
        foodLists.appendChild(foodCard);
        // order buttons
        const orderButton = foodCard.querySelector('.order-btn');
        orderButton.addEventListener('click', foodOrders)
    });
};
renderFoods(foods);

// search foods

searchInput.addEventListener('input', searchFood)
function searchFood() {
    const search = searchInput.value.trim();
    const matchingFoods = foods.filter(food =>
        food.name.toLowerCase().includes(search.toLowerCase()));
    renderFoods(matchingFoods);
}


// categories
buttons.forEach(button => {
    button.addEventListener('click', foodCategory)
})
function foodCategory(event) {
    const filterFood = event.target.dataset.category;

    if (filterFood === "all") {
        renderFoods(foods)
    }

    else {
        const foodCtegories = foods.filter(food => food.category === filterFood)
        renderFoods(foodCtegories)
    }

    // console.log(foodCtegories)
}

// orders page

let orders = [];

const orderItems = document.querySelector('.orderItems');
const totalOrders = document.querySelector('#total-orders');

// render orders


function foodOrders(event) {
    const orderId = event.target.dataset.id;
    const foodOrdered = foods.find(food => food.id == orderId);
    // exist order
    const existOrder = orders.find(food => food.id == orderId);
    if (existOrder) {
        alert('already exists this item')
        return

    }
    orders.push(foodOrdered)



    // create orders element
    const orderElement = document.createElement('div');
    // add class
    orderElement.classList.add("order");
    //display orders
    orderElement.innerHTML = `
         <h3>${foodOrdered.name}</h3>
         <p>$${foodOrdered.price}</p>
         <button class="delete-btn" data-id="${foodOrdered.id}">X</button>

    `;
    orderItems.appendChild(orderElement);


    // total-orders
    totalOrders.textContent = `Total Orders: ${orders.length}`;
    // delete
    const deleteBtn = document.querySelectorAll('.delete-btn');
    deleteBtn.forEach(deletebtn => {
        deletebtn.addEventListener('click', deleteOrder)
    });
}

// delete item from the cart

function deleteOrder(event) {
    const orderId = Number(event.target.dataset.id);
    orders = orders.filter(food => food.id !== orderId);
    // reomve
    const parent = event.target.parentElement;
    parent.remove();
    // total-orders
    totalOrders.textContent = `Total Orders: ${orders.length}`;
}