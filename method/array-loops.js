console.clear();

const marks = [10, 2, 8, 4, 6];

const doubleMarksFor = [];

for (let i = 0; i < marks.length; i++) {
    const mark = marks[i];
    const doubleMark = mark * 2;
    doubleMarksFor.push(doubleMark);
}

console.log(doubleMarksFor);

const doubleMarksForOf = [];

for (const mark of marks) {
    doubleMarksForOf.push(mark * 2);
}

console.log(doubleMarksForOf);

function doubleOrNothing(number) {
    return number *2;
}

const doubleMarkMap = marks.map(doubleOrNothing);

console.log('MAP:', doubleMarkMap);


const doubleOrNothing2 = n => n *2;

const doubleMarkMap2 = marks.map(doubleOrNothing2);

console.log('MAP2:', doubleMarkMap2);


const doubleMarkMap3 = marks.map(n => n * 2);

console.log('MAP3:', doubleMarkMap3);

console.clear();

const badMarks = [10, 2, -6, -14, 8, 4, 0, NaN, 3.14, Math.PI, 'Blogas pazymys'];

function arSkaicius (number) {
    if (typeof number === 'string') {
        return false;
    }

    if (number <= 0) {
        return false;
    }

    if (isNaN(number)) {
        return false;
    }

    if (number % 1 !== 0) {
        return false;
    }
    return true;
}

const goodMarksOnly = badMarks.filter(arSkaicius);

console.log(goodMarksOnly);

const goodMarksOnly2 = badMarks
.filter(n => typeof n === 'number')
.filter(n => isFinite(n))
.filter(n => n > 0)
.filter(n => Number.isInteger(n));

console.log(goodMarksOnly2);

console.clear();

const stringList = ['a', 'A', 'b', 'B', 'ab', 'AB', 'labas', 'rytas'];
console.log(stringList);

stringList.sort();
console.log(stringList);

const numberList = [10, 2, 8, 4, 20, 28];
console.log(numberList);

numberList.sort();
console.log(numberList);

numberList.sort((a, b) => a - b);
console.log(numberList);

console.clear();

const family = [
    {name: 'Jonas', age: 99},
    {name: 'Maryte', age: 88},
    {name: 'Ona', age: 66},
    {name: 'Petras', age: 77},
];
console.log(family);

family.sort();
console.log(family);

family.sort((a, b) => a.age - b.age);
console.log(family);

const names = [];

for (const user of family) {
    names.push(user.name);
}

console.log(names);

const familyString = names.join(',') + '.';
console.log(familyString);

console.clear();

const pazymiai = [10, 2, 8, 4, 6];
console.log(pazymiai);

let pazymiuSuma = 0;
for (const pazymys of pazymiai) {
    pazymiuSuma += pazymys;
}

const vidurkis = pazymiuSuma / pazymiai.length;

console.log('Vidurkis', vidurkis);


function redFunc(total, number) {
    return total + number;
}

const reducedSuma = pazymiai.reduce(redFunc);
console.log(reducedSuma);

const reducedSuma2 = pazymiai.reduce((total, number) => total + number);
console.log(reducedSuma2);