var chocolateBars = ['snickers', "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  new_array = [element, ...array]  // add element to beginning
  return new_array  // return new array. do not modify the orig.
}


function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)  //returnw whole. modifying the original
  return array
}

function addElementToEndOfArray(array, element) {
  new_array = [element, ...array]
  return new_array
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}