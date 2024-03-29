/* 
Function - funkcijos
perpaunaudojamos logikos blokas
*/

console.clear();

function tuscia() {
    // tuscias logikos blokas
    // return undifined
}

const a = tuscia();
console.log(a);

const b = tuscia();
console.log(b);

function tuscia2() {
    return undefined;
}

console.log(tuscia());

function duokPenkis(){
    //graziname penkis
    return 5;
}

console.log(duokPenkis());

function arVedes() {
    return true;
}

console.log(arVedes());
console.log(arVedes());
console.log(arVedes());

// 1) .....

const userName1 = 'Jonas';
const userAge1 = 99;

// Jonas turejo 9 jubiliejus!

const user1Jub = (userAge1 - userAge1 % 10) / 10;
const user1Str = `${userName1} turejo ${user1Jub} jubiliejus!`;
console.log(user1Str);

// 2).....

const userName2 = 'Maryte';
const userAge2 = 88;

// Maryte turejo 8 jubiliejus!

const user2Jub = (userAge2 - userAge2 % 10) / 10;
const user2Str = `${userName2} turejo ${user2Jub} jubiliejus!`;
console.log(user2Str);

// 3) ....
const userName3 = 'Petras';
const userAge3 = 55;

const user3Jub = (userAge3 - userAge3 % 10) / 10;
const user3Str = `${userName3} turejo ${user3Jub} jubiliejus!`;
console.log(user3Str);

//Petras turejo 5 jubiliejus!

//3)....
const userName4 = 'Ona';
const userAge4 = 44;

// Ona turejo 4 jubiliejus!

const user4Jub = (userAge4 - userAge4 % 10) / 10;
const user4Str = `${userName4} turejo ${user4Jub} jubiliejus!`;
console.log(user4Str);

console.clear();

function jubiliejai(username, age) {
    const count = (age - age % 10) /10;
    return `${username} turejo ${count} jubiliejus!`;
}

console.log(jubiliejai('Jonas', 99));
console.log(jubiliejai('Maryte', 88));
console.log(jubiliejai('Petras', 55));
console.log(jubiliejai('Ona', 44));

console.log(jubiliejai(666, 'Demon'));

console.clear();

function studentAverage(name, marks) {
    let totalSum = 0;
    let index = 0;
    totalSum += marks[index++];
    totalSum += marks[index++];
    totalSum += marks[index++];
    totalSum += marks[index++];
    totalSum += marks[index++];
    const average = totalSum / marks.length;
    return `${name}: pazymiu vidurkis yra ${average}.`
}

console.log(studentAverage('Jonas', [10, 2, 8, 4, 6]));
console.log(studentAverage('Maryte', [10, 9, 8, 7, 6]));
console.log(studentAverage('Petras', [5, 6, 7, 8, 9]));
console.log(studentAverage('Ona', [9, 9, 9, 9, 9]));