var chocolateBars = ['snickers', "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  new_array = [element, ...array]  // add element to beginning
  return new_array  // return new array. do not modify the orig.
}

addElementToBeginningOfArray(chocolateBars, 'm&m')

function destructivelyAddElementToBeginningOfArray(array, element) {
  console.log('hello')
  console.log(array.unshift(element))  // return whole array by modifying the original
}