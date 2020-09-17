var request = new XMLHttpRequest();

request.onreadystatechange = function () {
  if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
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

    function validate(e) {
      var value = e.target.value;
      if (/^[A-Za-z]*$/.test(value)) {
        console.log("Good Input");
      } else {
        console.log("Please insert a valid input");
      }
    }

    let myInputName = document.getElementById("inputName");
    myInputName.addEventListener("input", validate);

    let myInputFirstName = document.getElementById("inputFirstName");
    myInputFirstName.addEventListener( "input", validate);

    let myInputAddress = document.getElementById("inputAddress");
    myInputAddress.addEventListener("input", function (e) {
      var value = e.target.value;
      if (/^[A-Za-z0-9\s,-.]*$/.test(value)) {
        console.log("Good Address");
      } else {
        console.log("Please insert a valid input");
      }
    });

    let myInputCity = document.getElementById("inputCity");
    myInputCity.addEventListener("input", validate);

    function validateForm() {
      alert("not working");
      return false;
    }
  }
};

request.open("GET", "http://localhost:3000/api/cameras");
request.send();
