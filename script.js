function generateText() {

  var grammar = tracery.createGrammar({
    "origin": [
      "What's happening here? 👀 #story#"
    ],

    "story": [
      "Who stole the cookies from the cookie jar? #name#! 🍪 #reveal#",
      "Something suspicious is going on... #name# definitely did it. #reveal#",
      "The cookie jar is empty again. All signs point to #name#! #reveal#"
    ],

    "reveal": [
      "#name# stole the cookies from the cookie jar!",
      "It’s obvious — #name# has been sneaking around all day!",
      "#name# tried to deny it, but the crumbs say otherwise."
    ],

    "name": [
      "Bob",
      "Diana",
      "Marcus",
      "Jade",
      "Alex",
      "Sam"
    ]
  });

  grammar.addModifiers(tracery.baseEngModifiers);

  var story = grammar.flatten("#origin#");

  document.getElementById("output").innerText = story;
