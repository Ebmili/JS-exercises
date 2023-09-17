function checkLeapYear() {
  var year = document.getElementById('yearInput').value;
  var resultElement = document.getElementById('result');
  var result = isLeap(year);
  resultElement.textContent = "Result: " + result;
}

function isLeap(year) {
  if (year % 4 === 0) {
      if (year % 100 === 0) {
          if (year % 400 === 0) {
              return "Leap year";
          } else {
              return "not Leap year";
          }
      } else {
          return "Leap year";
      }
  } else {
      return "Not Leap year";
  }
}