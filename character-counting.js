function countLetters(input) {
  var inputString = input.split(" ").join("").toLowerCase();  // spaces shouldn't be counted

  var outputObject = {};

  for (var i = 0; i < inputString.length; i++) {
    character = inputString[i];

    if (outputObject[character]) { // if there's a number there
      outputObject[character] += 1;
    } else {
      outputObject[character] = 1;
    }

  }
  return outputObject;
}

console.log(countLetters("Lighthouse in the house"));
