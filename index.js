//regular reg ex is case sensitive
let sentence = "The dog chased the cat.";
let regex = /the/;
console.log(regex.test(sentence));

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

console.log(result);
// the or operrator
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let results = petRegex.test(petString);
console.log(results);
// case insensitive flag (place an i after the regex ending slash)
let myStrings = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result1 = fccRegex.test(myStrings);
console.log(result1);

// match can be used to extract a part of a string
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result2 = extractStr.match(codingRegex);

console.log(result2);
// [
//     'coding',
//     index: 18,
//     input: "Extract the word 'coding' from this string.",
//     groups: undefined
//   ]

// the g flag can be used to extract a regex globally (place a g after the regex ending slash)
// flags can be stacked let starRegex = /twinkle/ig;

let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/g;
let boo = testStr.match(ourRegex);
console.log(boo);

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result3 = twinkleStar.match(starRegex);

console.log(result3);

// the period can be used as a wildcard character
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
humStr.match(huRegex); // Returns ["hum"]
hugStr.match(huRegex); // Returns ["hug"]

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result4 = unRegex.test(exampleStr);

console.log(result4);

// multi word regex can be used with  [] brackets
// or you can grab all the vowels throurgh the regex
let bgRegex = /b[aiu]g/; //multi word

let quoteSample =
    "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; //all vowel insenstive and globally
let result5 = quoteSample.match(vowelRegex);

console.log(result5);

// alphabete only regex
let quoteSamples = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result6 = quoteSamples.match(alphabetRegex);

console.log(result6);
// number only regex
let quoteSamples1 = "Blueberry 3.141592653s are delicious.";
let egex = /[0-9]/;
let result7 = myRegex;

console.log(result7);

// alphanumeric only regex

let quoteSamples2 = "The quick brown fox jumps over 5 lazy dogs and 1 fence.";
let alphanumericRegex = /[a-z0-9]/gi;
let result8 = quoteSamples2.match(alphanumericRegex);

console.log(result8);

//negated character set
let quoteSample3 = "3 blind mice.";
let myRegex1 = /[^0-9aeiou]/; //negates 0-9 and all vowels
let result9 = myRegex;

console.log(result9);

// controls when a character appers multiple times in the string
let difficultSpelling = "Mississippi";
let myRegex2 = /s+/g;
let result10 = difficultSpelling.match(myRegex);

console.log(result10);
