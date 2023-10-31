console.clear();
// vidurkis suskaiciuot

const marks = [10, 2, 'a', 8, 4, 6];
let totalSum = 0;
let count = 0;
 
for (let i = 0; i < marks.length; i++) {
    if (typeof marks[i] === 'number') {
        totalSum += marks[i];
        count++;
    }
    
}

const average = totalSum / count;
console.log(average);