const sumLargestNumbers = function(data) {
  let bigOne = 0;
  let bigTwo = 0;
  for (let i = 0; i < data.length; i++){
    if (data[i] > bigOne) {
      bigTwo = bigOne;
      bigOne = data[i];
    }
  }
  return bigOne + bigTwo;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));


/*const sumLargestNumbers = function (data) {
  let bigOne = 0;
  let bigTwo = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > bigOne) {
      bigTwo = bigOne;
      bigOne = data[i];
    }
  }
  return bigOne + bigTwo;
}*/