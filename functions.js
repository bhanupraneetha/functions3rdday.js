//adding


function add(x,y){
    var a=(x*x)+y+5;
    return a;
}
var output = add(5,7);
console.log(output);
var output2 = add(30,9);
console.log(output2);


// double array and place in its index
    

function doubleArray(arr) {
  
    for (var i = 0; i < arr.length; i++) {
      arr[i]= (arr[i] * 2);
    }
    return arr;
  }
  

  var numbers = [2,7,9];
  var doubledNumbers = doubleArray(numbers);
  console.log(doubledNumbers);




//even or not

function countEven(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        count++;
      }
    }
    return count;
  }
  
  var inputArr = [2, 7, 9];
  var countEvenNum = countEven(inputArr);
  console.log(countEvenNum);


  // multiplication in function

  function multiply(x,y){
    var z=x*y;
    return z;
  }
  var output5=multiply(9,8);
  console.log(output5);


// if even true or false

  function iseven(x){
    if(x%2===0){
      return true;
    }
    else{
        return false;
    }
  }
var numiseven=iseven(378344659);
console.log(numiseven);


//rectangle


function formulas(l,b){
  var area=l*b;
  var perimeter=2*(l+b);
  return [ area , perimeter];
 
}
var a1=formulas(15,54);
console.log(a1);



//square 

function square(x){
var areasquare=x*x;
var perimetersquare=4*x;
return [areasquare,perimetersquare];
}
var outputsquare=square(9);
console.log(outputsquare);


//factorial




function factorial(number) {
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result *= i;
  }
  return result;
}

var out=factorial(10);
console.log(out);

// celcius to farenheit

function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

console.log(celsiusToFahrenheit(0)); 
console.log(celsiusToFahrenheit(25)); 


//meters t cm


function meterstocm(m) {
  return m=m*100;
}

console.log(meterstocm(2507)); 
console.log(meterstocm(250));



//comparing 2 arrays


function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}
console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(areArraysEqual([1, 2, 3], [1, 3, 2]));
console.log(areArraysEqual([1, 2, 3], [1, 2])); 



