try {
  function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  } 
  
  let res = sum(null);
  console.log(res);
}
catch (error) {
  if (error instanceof TypeError) {
    console.log("Type error")
  }
}
const sayName = name => {
  if (typeof name === "string") {
  console.log(name);
  } else throw new Error("Invalid name! Must be a string!")
}

try {
  sayName("Alex");
  sayName(1); 
}
catch (error) {
  console.log(error)
}

 function greet(greeting) {
   if (!greeting) {
     throw new Error("There was no greeting given.");
   }

  console.log(greeting);  
}

try {
  greet()
}
catch (error) {
  console.log("Hello World!")
}
