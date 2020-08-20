class ProductManager {

    constructor() {
        var products = [];
    }

    static add( item ) {
        products.push( item );
        window.localStorage.setItem( "AddedToCart", JSON.stringify(products) );
        console.log("Added")
    }

    static remove( item ) {
        if ( products.indexOf( item ) == -1 ) {
            return "Product not found";
        } else {
            window.localStorage.removeItem( [ products.indexOf( item ) ] );
        }

    }

    static clear() {
        window.localStorage.clear();
    }

}

var myProductManager = new ProductManager();
var request = new XMLHttpRequest();
var newDetails = document.getElementById("details");

request.onreadystatechange = function () {

    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);

        var myQuery = location.search.substr(1);

        for (let index = 0; index < response.length; index++ ) {

            if ( response[index]._id == myQuery) {

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

                newCardBody.appendChild(newCardTitle);
                newCardBody.appendChild(newCardDescription);
                newCardBody.appendChild(newPrice);
                newCardBody.appendChild(newAddToCart);
                newCard.appendChild(newCardBody);
                newCard.appendChild(newImage);
                newDetails.appendChild(newCard);

                newAddToCart.addEventListener("click", function() {
                    ProductManager.add( element._id );
                });
            }

        }

    }

}

request.open("GET", "http://localhost:3000/api/cameras");
request.send();