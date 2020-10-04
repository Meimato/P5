confirmation();
function confirmation() {
    let parameters = new URLSearchParams(window.location.search.substr(1));

    let firstName = document.createTextNode(parameters.get("firstname"));
    let total = document.createTextNode(parameters.get("total"));
    let orderId = document.createTextNode(parameters.get("orderid"));

    let firstNameElement = document.getElementById("userFirstname");
    let totalElement = document.getElementById("userTotal");
    let orderIdElement = document.getElementById("userOrderId");

    firstNameElement.appendChild(firstName);
    totalElement.appendChild(total);
    orderIdElement.appendChild(orderId);

    localStorage.deleteArray("AddedToCart");
}

