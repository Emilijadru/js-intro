console.clear();
/*
duodamas vardas... ar bent jau galvojama...
ka daryti?
-reikia nustatyti, ar dave varda, ar ne?
*/

// Jonas -> true
// Maryte -> true
// 123456 -> false
// labas -> false
// Labas -> true
// Azuolas -> true
// egle -> false
function suma(a, b) {
    return a + b;
}
console.log(suma(7, 5), 12);
console.log(suma(8, 4), 12);




function looksLikeName(text) {
    // jeigu, pirma raide nera didz. graziname: false
    // 'a' .toUpperCase() -> 'A'
    // 'A' .toUpperCase() -> 'A'
 if (text[0] !== text[0].toUpperCase()) {
    return false;
 }

    
// jeigu visi kiti apart pirmo yra nemazoios raides. graziname: false
const likusiosRaides = text.slice(1);
if (likusiosRaides !== likusiosRaides.toLowerCase()){
    return false;
}
    // jeigu, yra simbolis 1, 2, 3..., graziname: false
 const neleistiniSimboliai = '0123456789';
 for (let i=0; i<neleistiniSimboliai.length; i++) {
    const simbolis = neleistiniSimboliai[i];
    if (text.includes(simbolis)) {
        return `Klaida: "${simbolis}" neleistinas`;
    }
 }
    //jeigu,neradau kaip atmesti, kodel 'text' negali buti tinkamas vardas. graziname: true

return true;
}
console.log(looksLikeName('Jonas'), true);
console.log(looksLikeName('Maryte'), true);
console.log(looksLikeName('labas'), false);
console.log(looksLikeName('MaryTe'), false);
console.log(looksLikeName('MARyte'), false);
console.log(looksLikeName('Mary6e'), false);
console.log(looksLikeName('Ma78yte'), false);
console.log(looksLikeName('m5ryte'), false);

console.clear();

function isName(name) {
    if (typeof name !== 'string') {
        return 'Klaida: netinkamas duomens tipas, privalo buti "string".';
    }
    const minNamelength = 2;
    if (name.length < minNamelength){
        return `Klaida: pertrumpas vardas, minimum ${minNamelength} simboliai.`
    }
    const maxNamelength = 20;
    if (name.length > maxNamelength) {
        return `Klaida: per ilgas vardas, max ${maxNamelength} simboliu`;
    }
    const pirmaRaide = name[0];
    if (pirmaRaide.toUpperCase() !== pirmaRaide){
        return "Klaida: pirma raide turi but didzioji";
    }
    const likusiosRaides = name.slice(1);
    if (likusiosRaides.toLowerCase() !== likusiosRaides) {
        return 'Klaida: likusios raides privalo but mazosios.';
    }
    const abc = 'qwertyuiopasdfghjklzxcvbnm';
    const nameLowercase = name.toLowerCase();

    
    for (let i=0; i <name.length; i++) {
        const raide = nameLowercase[i];
        if (abc.includes(raide)) {
            
        } else {
            return `Klaida: neleistinas simbolis varde "${raide}"`;
        }
    return 'Ok';
    }}
console.log(isName());

console.log(isName(13));

console.log(isName(NaN));
console.log(isName(true));
console.log(isName('L'));
console.log(isName('maryte'));
console.log(isName('Liiiiiiiiiiiiiiiiiiii'));
console.log(isName('MaRyte'));
console.log(isName('Mar6te'));

console.log(isName('Maryte'));
console.log(isName('Jonas'));
console.log(isName('9onas'));
