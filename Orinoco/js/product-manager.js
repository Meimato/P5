const productManager = { 
    
    products: [],

    displayProducts: function() {
        return JSON.parse(localStorage.getItem("AddedToCart"));
    },

    addProduct: function(item) {
        // Pushing its ID into an array
        this.products.push(item._id);
        console.log(item._id);
        // Setting the localStorage with the array of products
        localStorage.setItem("AddedToCart", JSON.stringify(this.products) );
        console.log("Added")
    },

    removeProduct: function(item) {
        localStorage.removeItem(item);
    },

    clearStorage: function() {
        localStorage.clear();
    }

};