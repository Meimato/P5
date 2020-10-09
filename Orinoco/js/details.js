loadDetails((product) => {
  showProductDetails(product);
});

function loadDetails(callback) {
  fetch("http://localhost:3000/api/cameras/" + location.search.substr(1))
    .then((response) => response.json())
    .then(callback);
}

function showProductDetails(product) {
  const myTitle = document.getElementById("title");
  const myDescription = document.getElementById("description");
  const myPrice = document.getElementById("price");
  const myLenses = document.getElementById("lenses");
  const myButton = document.getElementById("button");
  const myImage = document.getElementById("image");

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

  const newAddToCart = document.createElement("a");
  newAddToCart.classList.add("btn");
  newAddToCart.classList.add("btn-outline-dark");
  newAddToCart.classList.add("rounded-borders");
  newAddToCart.textContent = "Ajouter au panier";

  const newPrice = document.createElement("p");
  newPrice.classList.add("card-text");
  newPrice.textContent = centToEuro(product.price) + "€";

  const newSelect = document.createElement("select");
  newSelect.classList.add("custom-select");
  const newSelectLabel = document.createElement("option");
  newSelectLabel.setAttribute("selected", "Lentilles");
  newSelectLabel.textContent = "Lentilles";
  for (let i = 0; i < product.lenses.length; i++) {
    const newSelectOption = document.createElement("option");
    newSelectOption.setAttribute("value", product.lenses[i]);
    newSelectOption.textContent = product.lenses[i];
    newSelect.appendChild(newSelectOption);
    console.log(product.lenses[i]);
  }
  newSelect.appendChild(newSelectLabel);

  myTitle.appendChild(newCardTitle);
  myDescription.appendChild(newCardDescription);
  myLenses.appendChild(newSelect);
  myPrice.appendChild(newPrice);
  myButton.appendChild(newAddToCart);
  myDescription.appendChild(newCardBody);
  myImage.appendChild(newImage);

  newAddToCart.addEventListener("click", addProductToCart(product, newSelect));
}

function addProductToCart(product, newSelect) {
  return function () {
    var myProduct = {};
    myProduct.id = product._id;
    myProduct.name = product.name;
    myProduct.price = centToEuro(product.price);
    myProduct.lenses = newSelect.options[newSelect.selectedIndex].value;
    localStorage.pushArrayItem("AddedToCart", myProduct);
    $(".toast").toast("show");
  };
}
