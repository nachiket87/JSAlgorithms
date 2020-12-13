// phew this was a toughie
function getProductsOfAllIntsExceptAtIndex(intArray) {
  if (intArray.length < 2) {
    throw new Error(
      'Getting the product of numbers at other indices requires at least 2 numbers'
    );
  }
  const productsOfAllIntsExceptAtIndex = [];
  let productSoFar = 1;
  for (let i = 0; i < intArray.length; i++) {
    productsOfAllIntsExceptAtIndex[i] = productSoFar;
    productSoFar *= intArray[i];
  }
  productSoFar = 1;
  for (let j = intArray.length - 1; j >= 0; j--) {
    productsOfAllIntsExceptAtIndex[j] *= productSoFar;
    productSoFar *= intArray[j];
  }

  return productsOfAllIntsExceptAtIndex;
}
console.log(getProductsOfAllIntsExceptAtIndex([3, 1, 2, 5, 6, 4]));
