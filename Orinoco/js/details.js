var myTitle = document.getElementById("title");
var myDescription = document.getElementById("description");
var myPrice = document.getElementById("price");
var myQuantity = document.getElementById("quantity");
var myLenses = document.getElementById("lenses");
var myButton = document.getElementById("button");
var myImage = document.getElementById("image");

var request = new XMLHttpRequest();

request.onreadystatechange = function () {
  if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
    var response = JSON.parse(this.responseText);

    var myQuery = location.search.substr(1);

    for (let index = 0; index < response.length; index++) {
      if (response[index]._id == myQuery) {
        const element = response[index];

        const newImage = document.createElement("img");
        newImage.classList.add("card-img-top");
        newImage.setAttribute("src", element.imageUrl);
        newImage.setAttribute("alt", element.description);

        const newCardBody = document.createElement("div");
        newCardBody.classList.add("card-body");

        const newCardTitle = document.createElement("div");
        newCardTitle.classList.add("card-title");
        newCardTitle.textContent = element.name;

        const newCardDescription = document.createElement("p");
        newCardDescription.classList.add("card-text");
        newCardDescription.textContent = element.description;

        const newAddToCart = document.createElement("a");        
        newAddToCart.classList.add("btn");
        newAddToCart.classList.add("btn-outline-dark");
        newAddToCart.classList.add("rounded-borders");
        newAddToCart.textContent = "Ajouter au panier";

        const newPrice = document.createElement("p");
        newPrice.classList.add("card-text");
        newPrice.textContent = element.price / 100 + "€";

        const newSelect = document.createElement("select");
        newSelect.classList.add("custom-select");
        const newSelectLabel = document.createElement("option");
        newSelectLabel.setAttribute("selected", "Lentilles");
        newSelectLabel.textContent = "Lentilles";
        for (let i = 0; i < element.lenses.length; i++) {
          const newSelectOption = document.createElement("option");
          newSelectOption.setAttribute("value", element.lenses[i]);
          newSelectOption.textContent = element.lenses[i];
          newSelect.appendChild(newSelectOption);
          console.log(element.lenses[i]);
        }
        newSelect.appendChild(newSelectLabel);

        myTitle.appendChild(newCardTitle);
        myDescription.appendChild(newCardDescription);
        myLenses.appendChild(newSelect);
        myPrice.appendChild(newPrice);
        myButton.appendChild(newAddToCart);
        myDescription.appendChild(newCardBody);
        myImage.appendChild(newImage);

        newAddToCart.addEventListener("click", function () {
          var myProduct = {};
          myProduct.id = element._id;
          myProduct.name = element.name;
          myProduct.price = element.price / 100;
          myProduct.lenses = newSelect.options[newSelect.selectedIndex].value;
          localStorage.pushArrayItem("AddedToCart", myProduct);
          $(".toast").toast("show");
        });
      }
    }
  }
};

request.open("GET", "http://localhost:3000/api/cameras");
request.send();
