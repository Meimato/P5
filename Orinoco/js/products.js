loadProducts((products) => {
  products.forEach(createProduct);
});

function loadProducts(callback) {
  fetch("http://localhost:3000/api/cameras")
    .then((response) => response.json())
    .then(callback);
}

function unitToEuro(unit) {
  return unit / 100 + "€";
}

function createProduct(product) {
  const productsElement = document.getElementById("products");

  const newId = document.createElement("a");
  newId.classList.add("btn");
  newId.classList.add("btn-outline-dark");
  newId.classList.add("rounded-borders");
  const newQuery = "./pages/produit-details.html?" + product._id;
  newId.textContent = "En savoir plus";
  newId.setAttribute("href", newQuery);

  const newCard = document.createElement("div");
  newCard.classList.add("card");

  const newImage = document.createElement("img");
  newImage.classList.add("card-img-top");
  newImage.setAttribute("src", product.imageUrl);
  newImage.setAttribute("alt", product.description);

  const newCardBody = document.createElement("div");
  newCardBody.classList.add("card-body");

  const newCardTitle = document.createElement("div");
  newCardTitle.classList.add("card-title");
  newCardTitle.textContent = product.name;

  const newCardDescription = document.createElement("p");
  newCardDescription.classList.add("card-text");
  newCardDescription.textContent = product.description;

  const newPrice = document.createElement("p");
  newPrice.classList.add("card-text");
  newPrice.textContent = unitToEuro(product.price);

  newCardBody.appendChild(newCardTitle);
  newCardBody.appendChild(newCardDescription);
  newCard.appendChild(newCardBody);
  newCard.appendChild(newImage);
  newCard.appendChild(newPrice);
  newCard.appendChild(newId);
  productsElement.appendChild(newCard);
}
