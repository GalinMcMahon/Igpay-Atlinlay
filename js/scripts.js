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

    $("#result").text(sentence);



    // vowels.forEach(function(vowel) {
    //   pigLatin.push("ay");
    // });
      // Create a new array out of the input sentence.
    // var newSentence = sentence.split(" ");
    // $(newSentence).forEach(function(newSentence)){
    //    (index = 0; index <= vowel.length; index ++) {
    //
    //   }
    // });
    // console.log(newSentence);

    // var result = pigLatin(sentence);
    // $("#result").text(pigLatin);
  });
});
