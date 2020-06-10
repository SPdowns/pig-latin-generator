//  Business Logic
function checkIfNumber(inputString)  {
  let finalArray = [];
  let stringArray = inputString.split("");
  const numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    console.log(stringArray)



  for (let index=0; index<=stringArray.length-1; index+=1)  {
    finalArray.push(stringArray[index]);
    for (let j=0; j<=numArray.length-1; j+=1)  {
      if (numArray[j] === stringArray[index])  {
         finalArray.push();
      };
    };
  };
  return finalArray.join("");
};
//  User Interface Logic
$(document).ready(function() {
  $("form#pig").submit(function(event) {
  event.preventDefault();
  let inputString =  $("input#word").val();
  let newString = checkIfNumber(inputString);
  $("#output").text(newString);
  })
})