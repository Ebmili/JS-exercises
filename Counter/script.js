var output = [];
var count = 1;

function checkNumber(count) {
  
  if (count % 3 === 0 && count % 5 === 0) {
      return "FizzBuzz";
  } else if (count % 3 === 0) {
      return "Fizz";
  } else if (count % 5 === 0) {
      return "Buzz";
  } else {
      return count;
  }
}


function generateFizzBuzz() {
  var outputList = document.getElementById("output-list");

  var rangeInput = document.getElementById("range");
  var range = parseInt(rangeInput.value);

  if ( range < 1 || range > 100) {
      alert("Please enter a valid number between 1 and 100.");
      return;
  }

  for (var i = 1; i <= range; i++) {
      var result = checkNumber(i);
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(result));
      outputList.appendChild(li);
  }
}