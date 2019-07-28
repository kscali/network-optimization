//function declaration


//function expression


//what is the difference?



//problem / why? closure
function counter() {

}

const fs = counter();

fs(); // 1
fs(); // 2
fs(); // 3
fs(); //4

//scope why?

obj = {
  a: 2
}

function() {
  obj = {
    a: 1
  }
}

console.log(obj.a) //


//function calls;

const person = {
  name: "John",
  greeting: function() {"Hello, my name is" + this.name}
}

//what will person.greeting return?

const person = {
  name: "John",
  greeting: () =>  {"Hello, my name is" + this.name}
}

//what will person.greeting() return?

//What will this return?

function counter() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => console.log(i), i * 1000)
  }
}



answer = 55555 to print out 12345, use iife or use let;

//Say we have this iife. What will this function return?

(function () {
  var x = 1;

  function x() {

  }

  console.log(x);
})();

 Why?


//create a function that will retturn this behavior when it is called. 

"Hello".repeatify => "HelloHelloHello".




//create a function that when given an input array, will check if two elements in the array sum to a target number.
//Explain the time complexity. Explain the space complexity.



