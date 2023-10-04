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


