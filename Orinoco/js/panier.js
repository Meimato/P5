var request = new XMLHttpRequest();

request.onreadystatechange = function () {
  if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
    const myCartTable = document.getElementById("panier");
    const myCart = localStorage.getArray("AddedToCart");
    let total = 0;
    for (let i = 0; i < myCart.length; i++ ) {
      let tr = document.createElement("tr");
      let td = document.createElement("td");
      let td2 = document.createElement("td");
      let productName = document.createTextNode(myCart[i].name);
      let productPrice = document.createTextNode(myCart[i].price);
      td.appendChild(productName);
      td2.appendChild(productPrice);
      tr.appendChild(td);
      tr.appendChild(td2);
      myCartTable.appendChild(tr);
      total += myCart[i].price;
    }
    console.log("The total is: " + total + "€");
  }
};

request.open("GET", "http://localhost:3000/api/cameras");
request.send();
