/*
duodamas tektas.
jame yra tarpai.
ka reikia padaryti?
-pradzioje nebutu tarpu;
-pabaigoje nebutu tarpu;
-jei tarp zodziu eina daugiau nei vienas tarpas, turi likti tik vienas;
*/
console.clear();
const str1 = '    labas   ';
const ats1 =  'labas';


const str2 = '           labas             rytas            ';
const ats2 = 'labas rytas';

const str3 = 'ka  tu?  ka  vakare?';
const ats3 = 'ka tu? ka vakare?';

function isvalymas(text) {
let ats = text.trim();
ats = ats.replaceAll('  ', ' ');
 return ats; 
}
console.log(isvalymas(str1), ats1);
console.log(isvalymas(str2), ats2);
console.log(isvalymas(str3), ats3);
