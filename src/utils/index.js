/**
 *This function calculates the total price of the cart
 * @param {Array} products cartProducts: Array of objects
 * @returns {number} Total price of the cart
 */

export const totalPrice = (products) => {
  let sum = 0
  products.forEach((product) => (sum += product.price))
  return sum.toFixed(2)
}
