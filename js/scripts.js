//  Business Logic
function pigLatin(input)  {
  let finalArray = [];
  let inputArray = input.toLowerCase().split(" ");
  const numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const vowelArray = ["a", "e", "i", "o", "u", "y"];
  

    console.log(stringArray);

  inputArray.forEach(function(vowelCheck) {
    console.log(inputArray, vowelArray);
  if (inputArray.includes(vowelArray))  {
    finalArray.push(inputArray + "yay");
  } else {
    finalArray.push(inputArray);
  }
  });
  return finalArray;
  console.log(finalArray)
  
};


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

// function vowelCheck(input)


//  User Interface Logic
$(document).ready(function() {
  $("form#pig").submit(function(event) {
  event.preventDefault();
  let input = $("input#word").val();
  let output = pigLatin(input);
  $("#output").text(output);
  })
})