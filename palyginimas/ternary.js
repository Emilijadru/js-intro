console.clear();

const amzius = 17;
const limitas = 18;

let zinute1 = '';

// jeigu pilnametis -> Uzeik!
// jeigu nepilnametis -> Sorry..

if (amzius < limitas) {
    zinute1 = 'Sorry...';
} else {
    zinute1 = 'Uzeik!';
}
console.log('>>>', zinute1);

let zinute2 = 'Uzeik!';

if (amzius < limitas) {
    zinute2 = 'Sorry...';
} 
console.log('>>>', zinute2);

const zinute3 = amzius < limitas ? 'Sorry...' : 'Uzeik!';

console.log('>>>', zinute3);

const q1 = 0 > 1 ? 2 : 3;
console.log(q1);

const q2 = 0 < 1 ? 2 : 3;
console.log(q2);

const q3 = 0 === 1 ? 2 : 3;
console.log(q3);

const q4 = 0 > 1 ? 2 ? 3 : 4 : 5;
console.log(q4);

const q5 = 0 < 1 ? 2 ? 3 : 4 : 5; // visi skaiciai pozityvus - true, iskyrus 0.
console.log(q5);