const form = document.getElementById("myForm");
const ProductCatalogue = document.getElementById("catalogue");
let UserFirstName = document.getElementById("user-firstname");
let UserLastName = document.getElementById("user-lastname");
let UserAddress = document.getElementById("user-address");
let totalPrice = 0;
const products = [
    {
        name: 'RTX 2080',
        price: 1000,
        stock: 5
    },
    {
        name: 'RTX 2070',
        price: 890,
        stock: 3
    },
    {
        name: 'RTX 2080TI',
        price: 1500,
        stock: 1
    }
]

function loadLocalStorage() {
    localStorage.setItem("catalogue", JSON.stringify(products));
}

function resetFields() {
    UserFirstName.value = '';
    UserLastName.value = '';
    UserAddress.value = '';
    ProductCatalogue.innerHTML = "";
    inputsEditable();
}

function inputsReadOnly() {
    UserFirstName.readOnly = true;
    UserLastName.readOnly = true;
    UserAddress.readOnly = true;
}

function inputsEditable() {
    UserFirstName.readOnly = false;
    UserLastName.readOnly = false;
    UserAddress.readOnly = false;
}


form.addEventListener("submit", e => {
    e.preventDefault();
    var Products = JSON.parse(localStorage.getItem("catalogue"))
    ProductCatalogue.innerHTML = "";
    if(UserFirstName.value !== null && UserLastName.value !== null && UserAddress.value !== null) {
        inputsReadOnly();
        for(var i=0; i < Products.length; i++) {
            ProductName = Products[i].name;
            ProductPrice = Products[i].price;
            ProductInStock = Products[i].stock;
            totalPrice += ProductPrice;
            ProductCatalogue.innerHTML += '<p>You bought '+ProductName+' for '+ProductPrice+' euros</p>'
        }
        ProductCatalogue.innerHTML += '<p>Total price is '+totalPrice+' euros</p>'
    }
});


// form.addEventListener("reset", e => {
//     e.preventDefault();
//     ProductCatalogue.innerHTML = "";
//     UserFirstName = '';
//     UserLastName = '';
//     UserAddress = '';
// });
