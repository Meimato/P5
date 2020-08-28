var request = new XMLHttpRequest();
var newDetails = document.getElementById("details");

request.onreadystatechange = function () {

    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);

        var myQuery = location.search.substr(1);
        
        for (let index = 0; index < response.length; index ++) {

            if (response[index]._id == myQuery) {

                const element = response[index];

                const newCard = document.createElement("div");
                newCard.classList.add("card");

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
                newAddToCart.classList.add("card-link");
                newAddToCart.textContent = "Ajouter au panier";

                const newPrice = document.createElement("p");
                newPrice.classList.add("card-text");
                newPrice.textContent = element.price / 100 + "€";

                const newSelect = document.createElement("select");
                newSelect.classList.add("custom-select");
                const newSelectLabel = document.createElement("option");
                newSelectLabel.setAttribute("selected", "Lentilles");
                newSelectLabel.textContent = "Lentilles";
                for (let i = 0; i < element.lenses.length; i++ ) {
                    const newSelectOption = document.createElement("option");
                    newSelectOption.setAttribute("value", element.lenses[i]);
                    newSelectOption.textContent = element.lenses[i];
                    newSelect.appendChild(newSelectOption);
                    console.log(element.lenses[i]);
                }
                newSelect.appendChild(newSelectLabel);

                newCardBody.appendChild(newCardTitle);
                newCardBody.appendChild(newCardDescription);
                newCardBody.appendChild(newSelect);
                newCardBody.appendChild(newPrice);
                newCardBody.appendChild(newAddToCart);
                newCard.appendChild(newCardBody);
                newCard.appendChild(newImage);
                newDetails.appendChild(newCard);

                newAddToCart.addEventListener("click", function () {
                    var myProduct = {};
                    myProduct.id = element._id;
                    myProduct.name = element.name;
                    myProduct.price = element.price / 100; 
                    localStorage.pushArrayItem("AddedToCart", myProduct);
                });
            }

        }

    }

}

request.open("GET", "http://localhost:3000/api/cameras");
request.send();
