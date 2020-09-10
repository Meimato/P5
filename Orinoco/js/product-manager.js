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

Storage.prototype.pushArrayItem = function (arrayName, arrayItem) {
  var existingArray = this.getArray(arrayName);
  existingArray.push(arrayItem);
  this.setItem(arrayName, JSON.stringify(existingArray));
};

Storage.prototype.popArrayItem = function (arrayName) {
  var arrayItem = {};
  var existingArray = this.getArray(arrayName);
  if (existingArray.length > 0) {
    arrayItem = existingArray.pop();
    this.setItem(arrayName, JSON.stringify(existingArray));
  }
  return arrayItem;
};

Storage.prototype.shiftArrayItem = function (arrayName) {
  var arrayItem = {};
  var existingArray = this.getArray(arrayName);
  if (existingArray.length > 0) {
    arrayItem = existingArray.shift();
    this.setItem(arrayName, JSON.stringify(existingArray));
  }
  return arrayItem;
};

Storage.prototype.unshiftArrayItem = function (arrayName, arrayItem) {
  var existingArray = this.getArray(arrayName);
  existingArray.unshift(arrayItem);
  this.setItem(arrayName, JSON.stringify(existingArray));
};

Storage.prototype.deleteArray = function (arrayName) {
  this.removeItem(arrayName);
};

Storage.prototype.removeArrayItem = function (arrayName, arrayItemIndex) {
  var existingArray = this.getArray(arrayName);
  existingArray.splice(arrayItemIndex, 1);
  this.setItem(arrayName, JSON.stringify(existingArray));
};