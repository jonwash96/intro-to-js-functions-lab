// DOM Elements (cards)
const ex1 = document.getElementById('ex1')
const ex2 = document.getElementById('ex2')
const ex3 = document.getElementById('ex3')
const ex4 = document.getElementById('ex4')
const ex5 = document.getElementById('ex5')
const ex6 = document.getElementById('ex6')
const ex7 = document.getElementById('ex7')
const ex8 = document.getElementById('ex8')
const ex9 = document.getElementById('ex9')

// EXERCISE 1 - MAX OF 2 NUMBERS TERNARY STYLE
const maxOf2Numbers = (x,y) => x>y ? x : y;
print(ex1,{title:"Max of 2 Numbers", input:"3,9", func:maxOf2Numbers(3,9), proto:maxOf2Numbers})

// EXERCISE 2
const isAdult = (age) => age>18 ? true : false;
print(ex2,{title:"Is Adult?", input:"21", func:isAdult(21), proto:isAdult})

// EXERCISE 3
function isCharAVowel(char) {
    if (char.length > 1) {console.error("ERROR! (at 3) Only 1 character expected. Got ("+char.length+")", char)};
    if (/y/.test(char)) {return "sometimes"};
    const vowels = /[aeiou]/;
    if (vowels.test(char)) {return true;
    } else {return false}
}
print(ex3,{title:"Is Character A Vowel?", input:'a', func:isCharAVowel('a'), proto:isCharAVowel});

// EXERCISE 4
const generateEmail = (uname,domain) => `${uname}@${domain}`
print(ex4,{title:"Generate Email", input:"johnsmith, example.com", func:generateEmail("johnsmith", "example.com"), proto:generateEmail});

// EXERCISE 5
const greetUser = (fname,tod) => `Good ${tod}, ${fname}`;
print(ex5,{title:"Greet User", input:"sam, morning", func:greetUser("sam", "morning"), proto:greetUser});

// EXERCISE 6
function maxOfThree() {
    if (arguments.length > 3 ) {console.warn("WARNING! (at Exercise 6) too many arguments. Only the first 3 were evaluated.")};
    return Math.max(...Object.values(arguments));
}
print(ex6,{title:"Max of 3 Numbers", input:"5,10,8", func:maxOfThree(5,10,8), proto:maxOfThree});

// EXERCISE 7
const calculateTip = (total,tip) => total * (tip/100);
print(ex7,{title:"Calculate Tip", input:"50,20", func:calculateTip(50,20), proto:calculateTip});

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
print(ex8,{title:"Convert Temperature", input:"32,c", func:convertTemperature(32,'c'), proto:convertTemperature});

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
print(ex9,{title:"Basic Calculator", input:"10,5,subtract", func:basicCalculator(10,5,'subtract'), proto:basicCalculator});


// HELPER FUNCTIONS
function print(el,obj) {
    const ex = Number(el.id.match(/\d$/g)[0]); // Number
    console.log(`Excercise ${ex} Result. ${obj.title}: `, obj.func);

    const headding = document.createElement('h2');
        headding.innerHTML = `Excercise ${ex}<br> <span>"${obj.title}"</span>`;
        headding.style.textAlign = 'center';
        el.appendChild(headding);
    const result = document.createElement('p');
        result.innerHTML = `Input: ${obj.input}<br>Result: ${obj.func}`;
        el.appendChild(result);
    const explanation = document.createElement('div');
    const explanationTitle = document.createElement('h4');
        explanationTitle.textContent = "Function Prototype:";
        explanation.appendChild(explanationTitle);
    const expanded = document.createElement('p');
        expanded.textContent = obj.proto;
        explanation.append(expanded);
        el.appendChild(explanation);
}   