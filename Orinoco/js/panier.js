const myCartTable = document.getElementById("panier");
const myCart = localStorage.getArray("AddedToCart");
let total = 0;
const removeItemIcon = '<i class="fa fa-trash"></i>';
for (let i = 0; i < myCart.length; i++) {
    let tr = document.createElement("tr");
    let tdName = document.createElement("td");
    let tdPrice = document.createElement("td");
    let tdLenses = document.createElement("td");
    let tdRemoveItem = document.createElement("td");
    let productName = document.createTextNode(myCart[i].name);
    let productPrice = document.createTextNode(myCart[i].price);
    let productLenses = document.createTextNode(myCart[i].lenses);
    tdRemoveItem.innerHTML = removeItemIcon;
    tdRemoveItem.classList.add("minimum-size");
    tdName.appendChild(productName);
    tdPrice.appendChild(productPrice);
    tdLenses.appendChild(productLenses);
    tr.appendChild(tdName);
    tr.appendChild(tdLenses);
    tr.appendChild(tdPrice);
    tr.appendChild(tdRemoveItem);
    myCartTable.appendChild(tr);
    total += myCart[i].price;
    tdRemoveItem.addEventListener("click", function () {
        console.log("removed: " + myCart[i].id + " @index: " + i);
        localStorage.removeArrayItem("AddedToCart", i);
        location.reload();
    });
}
let trTotal = document.createElement("tr");
let tdTotalName = document.createElement("td");
let tdTotalPrice = document.createElement("td");
tdTotalName.textContent = "Total";
tdTotalName.setAttribute("colspan", 2);
tdTotalPrice.textContent = total;
tdTotalPrice.setAttribute("colspan", 2);
trTotal.appendChild(tdTotalName);
trTotal.appendChild(tdTotalPrice);
trTotal.classList.add("font-weight-bold");
myCartTable.appendChild(trTotal);

let myEmptyCart = document.getElementById("empty-cart");
myEmptyCart.addEventListener("click", function () {
    console.log("The cart is now empty!");
    localStorage.deleteArray("AddedToCart");
    location.reload();
});

let myFormValidation = document.getElementById("myForm");
myFormValidation.addEventListener("submit", function (event) {
    event.preventDefault();

    let tmp = localStorage.getArray("AddedToCart");
    let products = [];
    for (let i = 0; i < tmp.length; i++) {
        products.push(tmp[i].id);
    }

    let myOrder = {
        contact: {
            firstName: myFormValidation["firstName"].value,
            lastName: myFormValidation["lastName"].value,
            address: myFormValidation["address"].value,
            city: myFormValidation["city"].value,
            email: myFormValidation["email"].value
        },

        products: products
    };
    console.log(myOrder);

    var request = new XMLHttpRequest();
    request.open("POST", "http://localhost:3000/api/cameras/order");
    request.setRequestHeader("Content-Type", "application/json;charset=utf-8");
    request.responseType = "json";
    request.send(JSON.stringify(myOrder));
    request.onload = () => { // if (this.readyState == XMLHttpRequest.DONE && this.status == 201) { Should I write this line of code?!
        alert(request.response.orderId);
        const newQuery = "./confirmation-commande.html?orderid=" + request.response.orderId + "&firstname=" + myFormValidation["firstName"].value + "&total=" + total;
        window.location.href = newQuery;
    };
});
