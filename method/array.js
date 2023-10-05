console.clear();

console.log([10, 2, 8, 4, 6]);
console.log([10, 2, 8, 4, 6].length);
console.log([10, 2, 8, 4, 6][0]);

console.log([10, 2, 8, 4, 6].at(0));
console.log([10, 2, 8, 4, 6].at(-1));

const a1 = [1, 2];
const a2 = [3, 4];
const a12 = a1.concat(a2);
console.log(a1, a2, a12);

const marks = [10, 2, 8, 4, 6];
console.log(marks.includes(10));

const students = ['Jonas', 'Maryte', 'Petras', 'Ona'];
console.log(students.includes('maryte'));
console.log(students.includes('Maryte'));

console.log(marks.indexOf(2));
console.log(marks.indexOf(10));

console.log(students.indexOf('Maryte'));

console.clear();

console.log(typeof 5);
console.log(typeof 'asd');
console.log(typeof true);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);

console.log(Array.isArray(5));
console.log(Array.isArray('asd'));
console.log(Array.isArray(true));
console.log(Array.isArray(null));
console.log(Array.isArray({}));
console.log(Array.isArray([]));

console.clear();

const abc = ['a', 'b', 'c', 'd'];
const abcJoin = abc.join();
const abcJoin2 = abc.join('-');
const abcJoin3 = abc.join(',');

console.log(abcJoin, typeof abcJoin);
console.log(abcJoin2);
console.clear();

console.clear();

const flowers = [];
console.log(flowers);

flowers.push('roze');  // prideda i sarasa
console.log(flowers);

flowers.push('tulpe');
console.log(flowers);

flowers.push('narcizas');
console.log(flowers);

flowers.pop();        // atima is saraso galo
console.log(flowers);

flowers.shift();    
console.log(flowers);

flowers.unshift('ruta');// prideda vel i sarasa
console.log(flowers);

console.clear();

console.log(flowers);
console.log(flowers.reverse());  // apvercia eiliskuma
console.log(flowers.reverse());  // apvercia eiliskuma

console.clear();

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers4 = numbers.slice(4);
const numbers45 = numbers.slice(4, 5);  // nuo kur iki kur rodo is saraso skaicius, paskutinis nerodomas 5,7 -> 5,6
const numbers46 = numbers.slice(4, 6);
console.log(numbers4);
console.log(numbers45);
console.log(numbers46);

console.log(numbers);

numbers.splice(3, 1, 11); // nuo kur iki kur istrinti is saraso pvz(3,1)->istrine 4, (3,1,11) prirase 11 vietoj 4  
console.log(numbers);

console.clear();
