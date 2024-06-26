// This is JavaScript code here.
function greetMe() {
  const inHours = document.getElementById("hours").value;
  let answer = "Good ";

  // if 8 < 12     "Good " > "Good " + "morning".  Good morning.
  if (inHours < 12) {
    answer = answer + "morning.";
  } else if (inHours < 18) {
    answer = answer + "afternoon.";
  } else {
    answer = answer + "evening.";
  }

  // Input Validation - check if entered hours are correct
  if (inHours < 0 || inHours > 23) {
    answer = "You entered incorrect hours!";
    document.getElementById("hours").value = 0;
  }

  document.getElementById("greet").innerHTML = answer;
}
