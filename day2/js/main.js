document.querySelector('button').innerHTML = 'Click Me!'

// prepare a kid for school or life

// 1 how to say no
false; // no

// 2 how to say yes
true; // yes

// numbers
0;
1;
2;
3;

// alphabet
'abc';
firstLettersOfTheAlphabet = 'abc';
'yesenia';
myFirstName = 'yesenia';



// Data Types
// 1. string
'abc';
"yesenia";
`unique power`;
// 2. number
0;
0.3793;
// 3. boolean
true;
false;
// 4. array / list
['list of items'];
['seafood', 'fruits', 'vegetables'];
listOfFavoriteFoods = ['seafood', 'fruits', 'vegetables'];
listCanHaveDifferentTypes = [1, 'yesenia', true, ['seafood', 'fruits', 'vegetables'], {}];
// 5. object / dictionary
({
    name: 'yesenia',
    age: '29',
})
person = {
    name: 'yesenia',
    age: '29',
}

undefined; // undefined; means "i don't know" & can be used within any data type

console.log(1 + 1);
console.log(5 - 2);
console.log(3 * 4);
console.log(10 / 2);
console.log(18 % 12);

let score = 0
console.log(score + 5);
console.log(score);

// += addition assignment
score += 10;
console.log(score); // answer = 10 (0 + 10)
score += 20; 
console.log(score); // answer = 30 (0 + 10 + 20)

// -= subtraction assignment
score -= 5; 
console.log(score); // answer = 25 (30 - 5)

// /= division assignment
score /= 5;
console.log(score); // answer = 5 (25 / 5)

// *= multiplication assignment
score *= 2;
console.log(score); // answer = 10 (5 * 2)

document.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', function() {
        li.innerText = 'clicked';
        score += 10;
        document.querySelector('p').innerText = 'score' + score;
    });
})

console.log('hello' + 'world'); // answer = hello world
console.log('Hello World!'); // answer = Hello World!
console.log(5 + 'days'); // answer = 5 days

// questions
// ---conditionals
