
console.clear();

console.log(isFinite(5));
console.log(isFinite(3.14));
console.log(isFinite(-5));
console.log(isFinite(0));

console.log(isFinite(NaN));
console.log(isFinite(Infinity));

const a = 7;
if (isFinite(a)) {
    console.log('taip');
} else {
    console.log('ne');
}
console.clear();

console.log(Number.isInteger(5));
console.log(Number.isInteger(3.14));
console.log(Number.isInteger(-5));
console.log(Number.isInteger(NaN));
console.log(Number.isInteger(Infinity));

const b = 7;

if (isFinite(b)) {
    if (Number.isInteger(b)) {
        console.log('normalus skaicius');
} else {
    console.log('nenormalus skaicius: NaN arba infiniti');
} }

console.clear();

console.log(Number.parseInt(false));
console.log(Number.parseInt([]));
console.log(Number.parseInt(''));
console.log(Number.parseInt('123'));
console.log(Number.parseInt('asd123'));
console.log(Number.parseInt('123asd'));
console.log(Number.parseInt('123asd456'));

console.log('-----------------');
console.log(parseFloat(''));
console.log(parseFloat('789'));
console.log(parseFloat('789.101'));
console.log(parseFloat('Infinity'));

console.clear();

console.log(isNaN(5));
console.log(isNaN(3.14));
console.log(isNaN(NaN));

console.clear();

const kaina = 3.14;
console.log(kaina, '3.14', kaina.toFixed());
console.log(kaina.toFixed());
console.log(kaina.toFixed(0));
console.log(kaina.toFixed(1));
console.log(kaina.toFixed(2));

const keistasSkaicius = 0.1 + 0.2;
console.log(keistasSkaicius);

const keistasSkaicius2 = keistasSkaicius.toFixed(6);
console.log(keistasSkaicius2);