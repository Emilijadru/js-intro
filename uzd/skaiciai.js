console.clear();
//vidurkis
const skaiciai = [10, 2, 8, 4, 6];

let suma = 0;

for ( let i = 0; i < skaiciai.length; i++) { 
    suma += skaiciai[i];
}
const vidurkis = suma/skaiciai.length;
console.log(vidurkis);

//mediana


const mediana = Math.floor(skaiciai.length/2);

console.log(mediana);