// business logic
var vowels = ["a", "e", "i", "o", "u"];
//
var pigLatin = [];

// user logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    // set variable to collect user input and result
    var sentence = $("input#sentence").val();
      // Create a new array out of the input sentence.
    var newSentence = sentence.split(" ");

    // var firstLetter = newSentence.charAt(0)
    //   if (firstLetter === vowels) {
    //     $("#result").append("ay");
    //   }
            // Calling back newSentence and cycling through each element to append 'ay'
    newSentence.forEach(function(newSentence) {
        // Set variable to collect zeroth indexed letter
      var chars = newSentence.charAt(0)
          // Removed first character from new sentence
      var sliced = newSentence.slice(1);


          // Set conditional statement whereby if the first 2 letters are q and u then...
      if (newSentence.charAt(0) === "q" && newSentence.charAt(1) === "u") {
          // Remove first 2 letters, which are q and u
        var sliceQu = newSentence.slice(2);
            // Returned shortened word and addehyd q and u plus ay
        $("#result").append(sliceQu+"quay ");

      } else {
        // Called our split sentence, added to zeroth letter, added ay
        $("#result").append(sliced+chars+"ay ");
      }
    });
  });
});
