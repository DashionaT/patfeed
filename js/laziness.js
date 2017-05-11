function checkIt() {
  // Initialize scores
  var not = 0;
  var somewhat = 0;
  var very = 0;
  var dead = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'not') {
        not++;
      }
      else if (e.value == 'somewhat') {
        somewhat++;
      }
      else if (e.value == 'very') {
        very++;
      }
      else if (e.value == 'dead') {
        dead++;
      }
    }

  }

  // Determine result
  var counts = "Not: " + not + ", " +
               "Somewhat: " + somewhat  + ", " +
               "Very: " + very + "," +
               "Dead: " + dead;

  // What is the highest value?
  var max = Math.max(not, somewhat, very, dead);

  // Form a message
  var message;

  if (max == not) {
    message ="You're so not lazy! Good Job!";
  }
  else if (max == somewhat) {
    message = "Well, you're not the laziest person in the world so, good job.";
  }
  else if (max == very) {
    message = "You need to get out the house you lazy pig before you die.";
  }
  else if (max == dead) {
    message = "A dead body is more active than you...";
  }

  // Display result
  //document.getElementById('result').innerHTML = counts;
  document.getElementById('result').innerHTML = message;
}
