confirmation(window.location.search.substr(1));

function confirmation(url) {
    let { firstName, total, orderId } = getData(url);

    let firstNameElement = document.getElementById("userFirstname");
    let totalElement = document.getElementById("userTotal");
    let orderIdElement = document.getElementById("userOrderId");

    firstNameElement.appendChild(firstName);
    totalElement.appendChild(total);
    orderIdElement.appendChild(orderId);

    localStorage.deleteArray("AddedToCart");
}

function getData(url) {
    let parameters = new URLSearchParams(url);

    let firstName = document.createTextNode(parameters.get("firstname"));
    let total = document.createTextNode(parameters.get("total"));
    let orderId = document.createTextNode(parameters.get("orderid"));
    
    return { firstName, total, orderId };
}

