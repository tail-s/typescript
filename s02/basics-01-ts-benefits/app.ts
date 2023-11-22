// function add(n1: number, n2: number, showResult: boolean, phrase: string) {
//   // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
//   //   throw new Error('Incorrect input!');
//   // }
//   const result = n1 + n2;
//   if (showResult) {
//     console.log(phrase + result);
//   } else {
//     return result;
//   }
// }

// const number1 = 5;
// const number2 = 2.8;
// const printResult = true;
// const resultPhrase = 'Result is: ';

// add(number1, number2, printResult, resultPhrase);

// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
  name: 'Sojin',
  age: 28,
  hobbies: ['Sports', 'Cooking']
};

let favoriteActivites: string[];
favoriteActivites = ['Sports'];

for (const hobby of person.hobbies) {
  console.log(hobby);
}

console.log(person.name);