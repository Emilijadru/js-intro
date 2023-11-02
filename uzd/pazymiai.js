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


 /* Evenas nori sukurti labai paprastą arbatpinigių skaičiuotuvą, kai jis eina valgyti į 
restoraną. Jo šalyje įprasta duoti 15 % arbatpinigių, jei sąskaitos vertė yra nuo 50 iki
300. 
Jei vertė skiriasi, arbatpinigiai yra 20%.

Jūsų užduotys:

Apskaičiuokite arbatpinigių, priklausomai nuo sąskaitos vertės. Sukurkite kintamąjį pavadinimu „Tip“.
Neleidžiama naudoti if/else teiginio  (Jei jums taip lengviau, galite
pradėti nuo if/else teiginio, tada pabandykite jį konvertuoti į ternery
operator!)

Į konsole atspausdinkite eilutę, kurioje yra sąskaitos vertė, arbatpinigiai ir galutinė vertė

(sąskaita + arbatpinigiai). Pavyzdys: „Sąskaita buvo 275, arbatpinigiai 41,25, o bendra vertė
316,25"

Bandymo duomenys:
§ 1 duomenys: patikrinkite sąskaitos reikšmes 275, 40 ir 430 */

let sasks = 430;

if ( 50 < sasks < 300) {
    const proc = 15; 
     tip = (sasks * proc) / 100;
}   if ( 50 > sasks) {
        const proc = 20;
         tip = (sasks * proc) / 100;
    } else if (sasks > 300) {
        const proc = 20;
         tip = (sasks * proc) / 100;
    }
   const bendraVerte = sasks + tip; 
console.log(`Saskaita buvo ${sasks}, arbatpinigiai ${tip}, o bendra verte ${bendraVerte}.`);
 console.clear();

 /* 1. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis).
  Atspausdinti trumpesnį stringą.

 2. Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). 
 Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".

3. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus.
 Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.

4. Sukurti kintamąjį su stringu: “Once upon a time in hollywood”. Jame visas “o” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.
  Rezultatą atspausdinti.

5. Sukurkite keturis kintamuosius kuriems sugeneruokite atsitiktines reikšmes nuo 0 iki 2.
 Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. 

6. Pasinaudokite atsitiktinio skaičiaus generavimo funkcija.
 Sukurkite du kintamuosius ir naudodamiesi funkcija jiems priskirkite atsitiktines reikšmes nuo 0 iki 4.
  Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.

7. Naudokite funkciją ir sukurkite tris kintamuosius kuriems priskirkite atsitiktines reikšmes nuo 0 iki 25.
 Raskite ir atspausdinkite vidurinę reikšmę.

8. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus.
 Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių.
  Jį atspausdinti.

9.Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių. Stringo ilgis 3 simboliai.

*/


/* 1. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis).
  Atspausdinti trumpesnį stringą. */

const name = 'Nina';
const lastName = 'Dobrev';

console.log(name, name.length);
console.log(lastName, lastName.length);

/* 2. Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). 
 Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(ų)". */

const name1 = 'Emilija';
const lastName1 = 'Drungilaite';
const bornYear = 2002;
const thisYear = 2023;

function sentence() {
    return `As esu ${name1} ${lastName1}. Man yra ${thisYear - bornYear} metai(u).`;
}
console.log(sentence());

/*3. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus.
 Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti. */

 const name2 = 'Nina';
 const lastName2 = 'Dobrev';
 const mix = name2.slice(-3) + lastName2.slice(-3);

 console.log(mix);

 /* 4. Sukurti kintamąjį su stringu: “Once upon a time in hollywood”. Jame visas “o” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.
  Rezultatą atspausdinti. */

  const str = 'Once upon a time in hollywood';

  function replace(text) {
    let str = text.trim();
     str = str.replaceAll('o','*').replaceAll('O','*');
    return str
  }
  console.log(replace(str));

 /* 5. Sukurkite keturis kintamuosius kuriems sugeneruokite atsitiktines reikšmes nuo 0 iki 2.
 Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. */


 /*8. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus.
 Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių.
  Jį atspausdinti. */

  const name3 = 'Nina';
  const lastName3 = 'Dobrev';
  const mix2 = name3[0] + lastName3[0];

  console.log(mix2);