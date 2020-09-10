var request = new XMLHttpRequest();

request.onreadystatechange = function () {
  if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
    const myCartTable = document.getElementById("panier");
    const myCart = localStorage.getArray("AddedToCart");
    let total = 0;
    for (let i = 0; i < myCart.length; i++ ) {
      let tr = document.createElement("tr");
      let tdName = document.createElement("td");
      let tdPrice = document.createElement("td");
      let tdLenses = document.createElement("td");
      let productName = document.createTextNode(myCart[i].name);
      let productPrice = document.createTextNode(myCart[i].price);
      let productLenses = document.createTextNode(myCart[i].lenses);
      tdName.appendChild(productName);
      tdPrice.appendChild(productPrice);
      tdLenses.appendChild(productLenses);
      tr.appendChild(tdName);
      tr.appendChild(tdLenses);
      tr.appendChild(tdPrice);
      myCartTable.appendChild(tr);
      total += myCart[i].price;
    }
    let trTotal = document.createElement("tr");
    let tdTotalName = document.createElement("td");
    let tdTotalPrice = document.createElement("td");
    tdTotalName.textContent = "Total"
    tdTotalName.setAttribute("colspan", 2);
    tdTotalPrice.textContent = total;
    trTotal.appendChild(tdTotalName);
    trTotal.appendChild(tdTotalPrice);
    trTotal.classList.add("font-weight-bold");
    myCartTable.appendChild(trTotal);
  }
};

request.open("GET", "http://localhost:3000/api/cameras");
request.send();
