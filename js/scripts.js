// business logic
// var vowels = ["a", "e", "i", "o", "u"]
//
// var pigLatin = [];

// user logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    // set variable to collect user input and result
    var sentence = $("input#sentence").val();

    // vowels.forEach(function(vowel) {
    //   pigLatin.push("ay");
    // });
      // Create a new array out of the input sentence.
    var newSentence = sentence.split(" ");
        // Calling back newSentence and cycling through each element to append 'ay'
    newSentence.forEach(function(newSentence) {
      $("#result").append(newSentence+"ay ");
    });
    //    (index = 0; index < = vowel.length; index ++) {
    //
    //   }
    // });
    // console.log(newSentence);

    // var result = pigLatin(sentence);
    // $("#result").text(pigLatin);
  });
});
