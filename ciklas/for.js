/*
For - 'for' ciklas
bazinis is visu ciklu 
*/

console.clear();

console.log('start');

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log('pause');

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log('finish');


console.clear();

for (let f = 0; f < 10; f++) {
    console.log(f, 'labas');
}
console.clear();


//skaiciai intervale nuo 3 iki 13 imtinai yra; 3 4 5 6 7 8

const start = 5;
const finish = 14;
let numberSequence = ' ';


for (let i = start; i <= finish; i++){
    numberSequence += ' ' + i;
}

const numberLine = `skaiciai intervale nuo ${start} iki ${finish} imtinai yra:${numberSequence}`;
console.log(numberLine);

//skaiciai intervale nuo 3 iki 13 imtinai yra: 3, 4, 5, 6, 7, 8.
let numberSequence2 = '';

 const start2 = 5;
const finish2 = 8;

for (let i=start2; i < finish2; i++) {
    numberSequence2 += i + ', ';
}

numberSequence2 += finish2;
const numberLine2 = `skaiciai intervale nuo ${start2} iki ${finish2} imtinai yra:${numberSequence2}.`;
console.log(numberLine2);

for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i, "lyginis");
    } else {
        console.log(i, "ne")
    }
} 

let i = 0;
for (; i <=10;) {
    console.log(i, 'ciklas');
    i += 2;
}

console.log(i, 'uz ciklo')

console.clear();

const word = 'zodelis';

for (let i = 0; i < word.length; i++) {
    console.log(`Raide: ${word[i]}` );
}

const marks = [10, 2, 8, 4, 6];

let totalSum = 0;
const amount = marks.length;

for (let i = 0; i < marks.length; i++) {
    const mark = marks[i];
    totalSum += mark;
    console.log(`${i})`, mark, '=', totalSum);
}
const average = totalSum / amount;
console.log(marks, 'average is', average);