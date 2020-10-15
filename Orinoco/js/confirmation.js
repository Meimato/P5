confirmation(window.location.search.substr(1));

/**
 * Shows the confirmation to the user.
 *
 * This function inserts in the DOM:
 * - the user's first name;
 * - the total price;
 * - the order id.
 *
 * @param {string} url The string to process.
 */
function confirmation(url) {
  let { firstName, total, orderId } = getData(url);

  let firstNameElement = document.getElementById("userFirstname");
  let totalElement = document.getElementById("userTotal");
  let orderIdElement = document.getElementById("userOrderId");

  firstNameElement.appendChild(firstName);
  totalElement.appendChild(total);
  orderIdElement.appendChild(orderId);

  localStorage.deleteArray("AddedToCart");
}

/**
 * Returns an object that contains the first name, the total price and the order ID.
 *
 * @param {string} url The string that will be turned into a key/value pairs.
 * @return {object} containing user's order informations.
 */
function getData(url) {
  let parameters = new URLSearchParams(url);

  let firstName = document.createTextNode(parameters.get("firstname"));
  let total = document.createTextNode(parameters.get("total"));
  let orderId = document.createTextNode(parameters.get("orderid"));

  return { firstName, total, orderId };
}
