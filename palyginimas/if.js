/*
IF - palyginimo sakinys//salyga
palyginimo operatoriai:
- visi: >, <, ==, ===, >=, <=, !=, !==

kodo sablonai:
if () {}
if () {} else {}
if () {} else if () {}
if () {} ... else if () {} ... else {}
*/
console.clear()

if (4 > 2) {
    console.log('4 yra daugiau uz 2');
}

if (5 < 0) {
    console.log('5 yra maziau uz 0');
}

if (true) {
    console.log(true);
}

if (false) {
    console.log(false);
}

const a = 7;
const b = 55;
if (a > b) {
    console.log('A daugiau uz B');
} else {
    console.log('A nera daugau uz B')
}

const day = 1;

if (day % 7 == 1) {
    console.log('pirmadienis');
} else if (day % 7 == 2) {
    console.log('antradienis');
} else if (day % 7 == 3) {
    console.log('treciadienis');
} else if (day % 7 == 4) {
    console.log('ketvirtadienis');
} else if (day % 7 == 5) {
    console.log('penktadienis');
} else if (day % 7 == 6) {
    console.log('sestadienis');
} else if (day % 7 == 0) {
    console.log('sekmadienis');
} else {
    console.log('tokia diena neegzistuoja');
}
console.clear();
// Kodo  nestinimas

const diena = 3;
if (diena ===1 ) {
    console.log('pirmadienis');
} else 
    if (diena === 2) {
    console.log('antradienis');
} else 
    if (diena === 3) {
    console.log('treciadienis');
} else {
    if (diena === 4) {
    console.log('ketvirtadienis');
    }
}
/*
Gali buti:
- diena/naktis
-lyja/nelyja
*/
 const parosMetas = 'naktis';
 const arLyja = false;
 const temp = 25;
 const kadaSilta = 20;

 if (parosMetas === 'diena') {
    if (arLyja) {
        if (temp >= kadaSilta) 
    console.log('sokti lietuj');
 } else {
    console.log('diena rojoje');
 } 
} else {
    if (arLyja) {
        console.log('sedim namie');
    } else {
        console.log('ziures zvaigzdes');
    }
}

console.clear();

const g = 7;
const h = 5;
 
if (g != h) {
    console.log('ne lygu');
} else {
    console.log('lygu')
}