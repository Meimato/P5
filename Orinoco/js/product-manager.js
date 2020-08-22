let products;

class ProductManager { 
    
    constructor(products) {
        this.products = new Array();
    }

    displayProducts() {
        return JSON.parse(localStorage.getItem("AddedToCart"));
    }

    addProduct(item) {
        // Creating a product
        let newProd = new Product(item);
        console.log(newProd);
        // Pushing its ID into an array
        this.products.push(newProd.getId());
        console.log(newProd.getId());
        // Setting the localStorage with the array of products
        localStorage.setItem("AddedToCart", JSON.stringify(this.products) );
        console.log("Added")
    }

    removeProduct(item) {
        localStorage.removeItem(item);
    }

    clearStorage() {
        localStorage.clear();
    }

}

// Create the ProductManager (I wanted a singleton but static values do not exist.)
var myProductManager = new ProductManager(products);