const form = document.getElementById("myForm");
const ProductCatalogue = document.getElementById("catalogue");
const UserFirstName = document.getElementById("user-firstname").value;
const UserLastName = document.getElementById("user-lastname").value;
const UserAddress = document.getElementById("user-address").value;
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

