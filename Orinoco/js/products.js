var request = new XMLHttpRequest();
var productsElement = document.getElementById("products");

request.onreadystatechange = function () {
  if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
    var response = JSON.parse(this.responseText);

    for (let index = 0; index < response.length; index++) {
      const element = response[index];

      const newId = document.createElement("a");
      newId.classList.add("card-link");
      const newQuery = "./pages/produit-details.html?" + element._id;
      newId.textContent = "Détails";
      newId.setAttribute("href", newQuery);

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

      const newPrice = document.createElement("p");
      newPrice.classList.add("card-text");
      newPrice.textContent = element.price / 100 + "€";

      newCardBody.appendChild(newCardTitle);
      newCardBody.appendChild(newCardDescription);
      newCard.appendChild(newCardBody);
      newCard.appendChild(newImage);
      newCard.appendChild(newPrice);
      newCard.appendChild(newId);
      productsElement.appendChild(newCard);
    }
  }
};

request.open("GET", "http://localhost:3000/api/cameras");
request.send();
