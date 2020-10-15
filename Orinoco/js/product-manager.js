/**
 * Returns the array of products in localstorage with the given arrayName using the Web Storage API.
 *
 * @param {string} arrayName The string used like a search filter.
 * @return {Array} thisArray that contains a list of every product with given name.
 */
Storage.prototype.getArray = function (arrayName) {
  var thisArray = [];
  var fetchArrayObject = this.getItem(arrayName);
  if (typeof fetchArrayObject !== "undefined") {
    if (fetchArrayObject !== null) {
      thisArray = JSON.parse(fetchArrayObject);
    }
  }
  return thisArray;
};

/**
 * Create and add key/value entry to the given Storage object.
 *
 * @param {string} arrayName The name of the array passed as a key.
 * @param {object} arrayItem The product item passed as a value.
 */
Storage.prototype.pushArrayItem = function (arrayName, arrayItem) {
  var existingArray = this.getArray(arrayName);
  existingArray.push(arrayItem);
  this.setItem(arrayName, JSON.stringify(existingArray));
};

/**
 * Empties the Storage object.
 *
 * @param {string} arrayName The key/value removed from the Storage object.
 */
Storage.prototype.deleteArray = function (arrayName) {
  this.removeItem(arrayName);
};

/**
 * Removes a specific product from the Storage object.
 *
 * @param {string} arrayName The key of the Storage object.
 * @param {number} arrayItemIndex The position of the removed product.
 */
Storage.prototype.removeArrayItem = function (arrayName, arrayItemIndex) {
  var existingArray = this.getArray(arrayName);
  existingArray.splice(arrayItemIndex, 1);
  this.setItem(arrayName, JSON.stringify(existingArray));
};
