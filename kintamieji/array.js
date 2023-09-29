/* 
ARRAY - - (masyvas/ kolekcija/ sarasas / listas)
*/
console.clear();

const tuscias = [];
console.log(tuscias);

const pazymiai = [10, 2, 5 , 4, 7 ];
console.log(pazymiai,'sudaro', pazymiai.length);

const studentai = ['Jonas', 'Marte', 'Petras'];
console.log(studentai);

 const pirmasPazimys = pazymiai[0];
console.log(pirmasPazimys);

const paskutinisPazimys = pazymiai[ pazymiai.length - 1];
console.log(paskutinisPazimys);
// suskaiciuoji pazymiu vidurki ir irvesti kaip sakini;
// "studento pazymiu vidurkis yra 7"
//masyvas pazimiu

const marks = [10, 2, 8, 4, 6];
const marksSum = marks[0] + marks[1] + marks [2] + marks[3] + marks[4];
const marksCount = marks.length;
const marksAvarage = marksSum / marks.length;
const studentMarks = 'Studento pazymiu vidurkis yra ${marksAverage}.';
console.log(studentMarks);


//masyvas vietovardziu
//sudormuoti sakini: "mano aplankytos vietos: vieta1, vieta2, viet3."

const places = ['Menulis', 'Kaunas', 'Plunge', 'Klaipeda'];
const placesList = 'vieta1, vieta2, viet3';
const placesSentence = 'Mano aplankytos vietos: Menulis, Kaunas, Plunge, Klaipeda';
console.log(placesSentence);

console.clear();

const colors = ['geltona', 'zalia', 'raudona'];

console.log(colors);

let a = 5;
let x = 7;

x = x++ + a;
// x = x + ++a // 13 
// x = x++  + a // 12
// x = (x++) + a; 12; x = 8

console.log(x);

console.log(colors[1]);

colors[1] = 777;
console.log(colors);

colors[1] = 'žalia';
console.log(colors);

const name = 'Chuck';
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);
