console.clear();

const n1 = 7;
const n2 = 5;
// function declaration
function suma (a, b) {
    return a + b;
}
console.log(`${n1} + ${n2} = ${suma(n1, n2)}`);

// kintamajam priskirti anonimine funkcija
const skirtumas = function (a, b) {
    return a - b;
}
console.log(`${n1} - ${n2} = ${skirtumas(n1, n2)}`);

// arrow (rodykline) function
const sandauga = (a, b) => {
    return a * b;
}
console.log(`${n1} * ${n2} = ${sandauga(n1, n2)}`);

// arrow function
// jeigu, logikos bloke yra tik 1 procedura (statement)
// tai galime nerasyti: {return}
const dalmuo = (a, b) => a / b;
console.log(`${n1} / ${n2} = ${dalmuo(n1, n2)}`);

// arrow function
// jeigu, parametru bloke yra tik vienas parametras 
// galima nerasyti: ()
const kvadratu = a => a **2;
console.log(`${n1} ** 2 = ${kvadratu(n1)}`);
console.log(`${n2} ** 2 = ${kvadratu(n2)}`);

// funkcija gauna zodi ir grazina pirma raide
const pirmaRaide = zodis => zodis[0];

console.log(pirmaRaide(5));

const firstLetter5 = str =>  typeof str !== 'string'
    ? 'Error: to be a string'
    :str.length 
    ? str[0]
    : 'Error: non-empty string';
console.log(firstLetter5(5));
console.log(firstLetter5(''));
console.log(firstLetter5('Labas'));

const errors = {
    nonString: 'Error: to be a string',
    empty: 'Error: non-empty string'
};
const firstLetter6 = str =>  typeof str !== 'string'
    ? errors.nonString
    :str.length 
    ? str[0]
    : errors.empty;
console.log(firstLetter6(5));
console.log(firstLetter6(''));
console.log(firstLetter6('Labas'));

