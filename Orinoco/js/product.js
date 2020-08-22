// This class contains the minimum information we need to code the cart page
class Product {

    // Every time we create a product we pass the ID, the name and its price.
    constructor(item) {
        this.id = item._id;
        this.name = item.name;
        this.price = item.price;
    }

    // These are convenient functions we can call to retrieve the values
    getPrice() {
        return this.price;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

}
