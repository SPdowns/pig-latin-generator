//  Business Logic
function checkIfNumber(inputString)  {
  let finalArray = [];
  let stringArray = inputString.split("");
  const numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const vowelArray = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"];
  

    console.log(stringArray);
    stringArray.forEach(checkIfVowel(inputString))  {
  if (vowelArray.includes(inputString[0]))  {
    finalArray.push(inputString + "yay");
  } else {
    finalArray.push(stringArray);
  }
// })


//   for (let index=0; index<=stringArray.length-1; index+=1)  {
//     finalArray.push(stringArray[index]);
//     for (let j=0; j<=numArray.length-1; j+=1)  {
//       if (numArray[j] === stringArray[index])  {
//         finalArray.push();
//       } else if (stringArray[index] === )
//       };
//     };
//   };
//   return finalArray.join("");
// };

// function checkIfVowel(inputString)


//  User Interface Logic
$(document).ready(function() {
  $("form#pig").submit(function(event) {
  event.preventDefault();
  let inputString =  $("input#word").val();
  let newString = checkIfNumber(inputString);
  $("#output").text(newString);
  })
})