/*  BOOLEAN - logine reiksme
galimos reiksmes: true (1) / false (0);
operacijos:
 && (and; visi turi buti true, jog gauti true);
 || (or; bent vienas turi buti true, jog gauti true); 
*/
console.clear();

const arPilnametis = true;
const arLyja = false;

const isSunnyday = true;
const isNight = false;

 console.log(isSunnyday);
 console.log(isNight);

 const count = false + false + true;
 console.log('>>>', count);

const count2 = (false + true + true) * (true + true + true);
console.log(count2);

const a = true && true;
console.log(a);

const b = true || true;
console.log(b);

const c = true || false;
console.log(c);

const d = true && false;
console.log(d);

const e = true && (false || true);
console.log(e);

const f = true && false || true;
console.log(f);
