module.exports = function reverseString(string){
 
  // Your code here

  let word = "";

  for(let i = string.length-1; i >= 0; i--) {
    let letter = string[i];

    word+=letter
  }

  // console.log(string);

return word


};

// console.log(reverseString("fun"));





