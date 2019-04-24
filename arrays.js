var chocolateBars = ['snickers', "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  new_array = array.unshift(element)  // add element to beginning
  return new_array  // return whole array
}

addElementToBeginningOfArray(chocolateBars, 'm&m')

function destructivelyAddElementToBeginningOfArray(array, element) {
  
}