// EXERCISE 1 MAX OF 2 NUMBERS TERNARY STYLE
const maxOf2Numbers = (x,y) => x>y ? x : y;
console.log("Exercise 1 Result. Max of 2 numbers: ", maxOf2Numbers(3,9));

// EXERCISE 2
const isAdult = (age) => age>18 ? true : false;
console.log("Exercise 2 Result. Is Adult? ", isAdult(21));

// EXERCISE 3
function isCharAVowel(char) {
    if (char.length > 1) {console.error("ERROR! (at 3) Only 1 character expected. Got ("+char.length+")", char)};
    if (/y/.test(char)) {return "sometimes"};
    const vowels = /[aeiou]/;
    if (vowels.test(char)) {return true;
    } else {return false}
}
console.log("Exercise 3 Result. Is the character a vowel? ", isCharAVowel('a'));

// EXERCISE 4
const generateEmail = (uname,domain) => `${uname}@${domain}`
console.log("Exercise 4 Result. Email Generate an Email: ", generateEmail("johnsmith", "example.com"));

// EXERCISE 5
const greetUser = (fname,tod) => `Good ${tod}, ${fname}`;
console.log("Exercise 5 Result. Greet User: ", greetUser("sam", "morning"));

// EXERCISE 6
function maxOfThree(a,b,c) {
    if (arguments.length > 3 ) {console.warn("WARNING! (at Exercise 6) too many argumen ss. Only the first 3 were evaluated.")};
    return Math.max(a,b,c);
}
console.log("Exercise 6 Result. Max of 3 numbers ", maxOfThree(5,10,8));

// EXERCISE 7
const calculateTip = (total,tip) => total * (tip/100);
console.log("Exercise 7 Result. Calculate tip ", calculateTip(50,20));

// EXERCISE 8
function convertTemperature(num,unit) {
    switch (unit) {
        case 'f':
        case 'F': {return num * (9/5) + 32};
        break;
        case 'c':
        case 'C': {return (num - 32) * (9/5)}
        break;
        default: {return console.error("ERROR! (at Exercise 8) unit must be 'c' or 'f', case insensitive. Got ",unit)};
    }
}
console.log("Exerceise 8 Result. Convert Temperature: ",convertTemperature(32,'c'));

// EXERCISE 9
function basicCalculator(a,b,operator) {
    switch (operator) {
        case 'add': {return a + b}; break;
        case 'subtract': {return a - b}; break;
        case 'multiply': {return a * b}; break;
        case 'divide': {return a / b}; break;
        default: {return console.error("ERROR! (at Exercise 9). Operator must be one of 'add|subtract|multiply|divide'. Got ",operator)}
    }
}
console.log("Exercise 9 Result. Basic Calculator: ", basicCalculator(10,5,'subtract'));

