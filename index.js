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

// character matches 0 or more times
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Change this line
let result11 = chewieQuote.match(chewieRegex);

console.log(result11);

// greedy vs lazy matches (match can be made lazxy by placing a ? mark after optional regex part)
let string = "titanic";
let regexs = /t[a-z]*?i/;
string.match(regex);

let text = "<h1>Winter is coming</h1>";
let myRegexs = /<.*>/;
let results1 = text.match(myRegexs);

console.log(results1);

// a caret not withing [] sqaure brackets can be made to match a part of a string at the beginning of the string
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let resultr = calRegex.test(rickyAndCal);
console.log(resultr);

// a dollar sign can be used to match a part of the regex at the last part of the string
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let cabooseResult = lastRegex.test(caboose);
console.log(cabooseResult);

// short hands character classes
let quoteSample5 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // returns letters both cases, numbers and underscores
let alphabetRegexV2Result = quoteSample5.match(alphabetRegexV2).length;
console.log(alphabetRegexV2Result);

let quoteSample6 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // return every thing besides letters, numbers and underscores
let results2 = quoteSample6.match(nonAlphabetRegex).length;
console.log(results2);

let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g; // returns all numbers
let results3 = numString.match(numRegex);
console.log(results3);

/*
1) If there are numbers, they must be at the end.
2) Letters can be lowercase and uppercase.
3) At least two characters long. Two-letter names can't have numbers.
*/

let username = "JackOfAllTrades";
let userCheck = /^[A-Za-z]{2,}\d*$/; // Change this line
let resultUser = userCheck.test(username);

console.log(resultUser);

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // white space
let resultWhite = sample.match(countWhiteSpace);
console.log(resultWhite);

// password verifier regex

let password = "Your sandwich will be $5.00";
let digitRegex = /\d/g; // returns all numbers
let lowerCaseRegex = /[a-z]/g; // returns all lowercase letters
let upperCaseRegex = /[A-Z]/g; // returns all uppercase letters
let symbolRegex = /[!@#$%^&*]/g; // returns all symbols
let passwordResults = password.match(numRegex).length >= 1;

console.log(passwordResults);
// uppercase D or W or S makes it the opposite digits, letters, spaces
// quatity specifiers {} means the regex must have a certain number of occurances,
// f{3,6} means the f must have at least 3 and at most 6 occurances or you can leave the 6 blank to represent
// an unlimited number of occurances. You can also have a specific number of occurances by putting one amount
// in between curly braces {2}

let quit = "qu";
let noquit = "qt";
let quRegex = /q(?=u)/; // a q with an u. positive look ahead
let qRegex = /q(?!t)/; // a q without a t. negative look ahead
quit.match(quRegex); // Returns ["q"]
noquit.match(qRegex); // Returns ["q"]
