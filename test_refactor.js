

function sumOfSquare(number) {
  var arrayOfNumbers = [];
  var startingNumber = 0;
  //make an array of numbers 1 - number
  for(var i = 0; i < number; i++) {
    startingNumber ++;
    arrayOfNumbers.push(startingNumber);
  }
//console.log(arrayOfNumbers);

var squareRoot = arrayOfNumbers.map(function(current,index,array) {
  return Math.sqrt(current);
}).reduce(function(previous,current,index,array){
  return previous + current;
},0);

console.log(squareRoot);

//8.38233234744

}
sumOfSquare(5);
