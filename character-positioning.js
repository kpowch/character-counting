function countLetters(input) {
  input = input.toLowerCase();

  var outputObject = {};

  for (var i = 0; i < input.length; i++) {
    var character = input[i];

    // ignore spaces (but keep the proper index of letters)
    if (character === ' ') {
      continue;
    }
    // if the key already exists, add to it
    else if (outputObject[character]) {
      outputObject[character].push(i);
    }
    // otherwise make the key and add the character index to the key's value
    else {
      outputObject[character] = [i];
    }

  }
  return outputObject;
};

testString = 'Lighthouse in the house';
console.log('Input length:', testString.length);
console.log(countLetters(testString));
