console.clear();

console.log('labas'.length);
console.log('  '.length);
console.log('\n\'\\'.length);

console.log('labas'.at(0));
console.log('labas'.at(3));

console.log('labas'.charCodeAt(0));
console.log('labas'.charCodeAt(1)); // pasako kurioj vietoj abecelej

const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));

let str3 = 'Hello';
const str4 = 'World';
str3 += ' ';
str3 += str4;
console.log(str3);

const abc = ['a', 'b', 'c', 'd'];

const start = 'Abecele: ';

let a1 = ' ';
a1 += start;
a1 += abc[0];
a1 += abc[1];
a1 += abc[2];
a1 += abc[3];
console.log(a1);


const a4 = start.concat(...abc);
console.log(a4);

console.clear();

const kopustas = 'kopustas';
console.log(kopustas.slice());
console.log(kopustas.slice(0, 2));
console.log(kopustas.slice(1, 2));
console.log(kopustas.slice(3, 5));
console.log(kopustas.slice(0, 2));
console.log(kopustas.slice(0, 3));
console.log(kopustas.slice(-3));
console.log(kopustas.slice(-2));

const pvz = 'labas rytas suraitytas vistos koja parasytas';
console.log(pvz. split('x'));
console.log(pvz. split('a'));
console.log(pvz. split(' '));

const pvz2 = 'vasara';
const pvz2PoSplit = pvz2.split('a');
console.log(pvz2PoSplit);

console.log('sasasasas'.split('a'));
console.log('sasasasas'.split('s'));

console.log(''.split('x'));
console.log('x'.split('x'));
console.log(''.split(''));
console.log('labas'.split(''));

console.clear();

console.log('Labas'.startsWith('x'));
console.log('Labas'.startsWith('l'));
console.log('Labas'.startsWith('L'));
console.log('Labas'.startsWith('La'));
console.log('Labas'.startsWith('Labs'));
console.log('Labas'.startsWith('la'));
console.log('--------------');
console.log('Vasara'.endsWith('x'));
console.log('Vasara'.endsWith('A'));
console.log('Vasara'.endsWith('a'));
console.log('Vasara'.endsWith('ra'));
console.log('Vasara'.endsWith('va'));

const pasaka = 'Ryto pasaka: Apie Jonuka ir Gretute';
const pasakaUppercase = pasaka.toUpperCase();
const pasakaLowercase = pasaka.toLowerCase();

console.log(pasakaUppercase);
console.log(pasakaLowercase);

console.clear();

const tarpai = '        labas       ';
const beTarpu = tarpai.trim();
console.log(`"${tarpai}"`);
console.log(beTarpu);
