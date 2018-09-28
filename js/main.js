const form = document.getElementById("myForm");
const ProductCatalogue = document.getElementById("catalogue");
let UserFirstName = document.getElementById("user-firstname").value;
let UserLastName = document.getElementById("user-lastname").value;
let UserAddress = document.getElementById("user-address").value;
const products = [
    {
        name: 'RTX 2080',
        price: 1000
    },
    {
        name: 'RTX 2070',
        price: 890
    },
    {
        name: 'RTX 2080TI',
        price: 1500
    }
]

function loadLocalStorage() {
    localStorage.setItem("catalogue", JSON.stringify(products));
};

function resetFields() {
    UserFirstName = '';
    UserLastName = '';
    UserAddress = '';
    ProductCatalogue.innerHTML = "";
}


form.addEventListener("submit", e => {
    e.preventDefault();
    var Products = JSON.parse(localStorage.getItem("catalogue"))
    ProductCatalogue.innerHTML = "";
    if(UserFirstName !== null && UserLastName !== null && UserAddress !== null) {
        for(var i=0; i < Products.length; i++) {
            ProductName = Products[i].name;
            ProductPrice = Products[i].price;
            ProductCatalogue.innerHTML += '<h1>I am dep zai</h1>'
        }
    }

});


// form.addEventListener("reset", e => {
//     e.preventDefault();
//     ProductCatalogue.innerHTML = "";
//     UserFirstName = '';
//     UserLastName = '';
//     UserAddress = '';
// });
