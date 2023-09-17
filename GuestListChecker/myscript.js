var guestList = ["Angela", "Jack", "Pam", "James", "Lara"];
var guestName = document.getElementById("guestName").value;

function checkGuest() {
  if (guestList.includes(guestName)) {
      alert("Welcome!");
  } else {
      alert("Sorry, maybe next time.");
  }
}
