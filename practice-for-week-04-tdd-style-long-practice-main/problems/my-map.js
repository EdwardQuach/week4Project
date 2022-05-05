function myMap(inputArray, callback) {
  let newArr = [];
  for(ele of inputArray) {
    newArr.push(callback(ele));
  }
  return newArr;
}

module.exports = { myMap };
