function checkIt() {
  // Initialize scores
  var male = 0;
  var female = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'male') {
        male++;
      }
      else if (e.value == 'female') {
        female++;
    }
  }
}
  // Determine result
  var counts = "Male: " + male + ", " +
               "Female: " + female;

  // What is the highest value?
  var max = Math.max(male, female);

  // Form a message
  var message;

  if (max == male) {
    message ="You're so not lazy! Good Job!";
  }
  else if (max == female) {
    message = "Well, you're not the laziest person in the world so, good job.";
  }

  // Display result
  document.getElementById('result').innerHTML = counts;
  //document.getElementById('result').innerHTML = message;
}
