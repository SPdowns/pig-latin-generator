//  Business Logic
function pigLatin(input)  {
  let finalArray = []; 
  let inputArray = input.toLowerCase().split("");
  const numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const vowelArray = ["a", "e", "i", "o", "u", "y"];
  
  inputArray.forEach(function(vowelCheck) {
    console.log(inputArray, vowelArray);
  if (vowelArray.includes(inputArray[0]))  {
    finalArray.push(inputArray + "yay");
  } else if (vowelArray.includes(inputArray)) {
    
  } else {
    finalArray.push(inputArray);
  }
  });
  return finalArray.join();
  
};
// const finalArray = (inputArray.map(pigLatin(input) {
//    return input * 2;
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

//


//  User Interface Logic
$(document).ready(function() {
  $("form#pig").submit(function(event) {
  event.preventDefault();
  let input = $("input#word").val();
  let output = pigLatin(vowelCheck)
  $("#output").text(output);
  })
})