// Provides the range of numbers between 1 and 100

var numRange = Array.apply(null, Array(100)).map(function (_, i) {return i + 1;});

// Prints the values from the numRange variable, however, if a value is a multiple of three
// it prints fizz, if it's a multiple of five it prints buzz. If it's a multiple of both,
// it prints fizz buzz. 

for (var i = 0; i <= 100; i++){
  if (numRange[i] % 3 === 0 && numRange[i] % 5 ===0){
    console.log("fizz buzz");
  }
  else if (numRange[i] % 3 === 0){
    console.log("fizz");
  }
  else if ( numRange[i] % 5 === 0) {
    console.log("buzz");
  }
  else console.log(numRange[i]);
}
