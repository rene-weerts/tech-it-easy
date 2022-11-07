//- input:
//- output:
//- stappenplan:
//- loggen:

//- 2a.
//- input: Het aantal sold tv's van ieder object in de array.
//- output: Het aantal sold tv's van ieder object in de array bij elkaar opgeteld.
//- stappenplan: 1. Let Variabele met een nieuwe array gecreëerd met een for loop.
//               2. Const variabele met functie die de array value's (nummers/getallen) bijelkaar optelt.
//- loggen: console.log.
//- 2a.
let soldTv = [];
for (let i = 0; i<inventory.length; i++){
    soldTv.push(inventory[i].sold);
}
console.log(soldTv);
const totalTvSold = soldTv.reduce(( a, b)=> a + b );
console.log(totalTvSold);

//- 2b
//- input: span element met id-tag met daarin const variabele tvSold.
//- output: in styles-css d.m.v. class-tag deze groen maken met color green.
//- stappenplan: 1. const variabele met document.getElementById.
//               2. voorzien van inhoud d.m.v. textContent.
//               3. met inhoud totalTvSold.
//- loggen: console.log.
//- 2b.
const tvSold= document.getElementById("tvSold");
console.log(tvSold);
tvSold.textContent = totalTvSold;

//- 2c.
//- input: het aantal ingekochte tv's.
//- output: het aantal ingekochte tv's van ieder object in de array.
//- stappenplan: 1. Let Variabele met een nieuwe array gecreëerd met een for loop.
//               2. Const variabele met functie die de array value's (nummers/getallen) bijelkaar optelt.
//- loggen: console.log.
//- 2c.
let boughtTv = [];
for(let i = 0; i <inventory.length; i++){
    boughtTv.push(inventory[i].originalStock)
}
console.log(boughtTv);
const totalBoughtTv = boughtTv.reduce(( a, b)=> a + b );
console.log(totalBoughtTv);

//- 2d.
//- input: span element met id-tag met daarin const variabele tvBought.
//- output: in styles-css d.m.v. class-tag deze groen maken met color green.
//- stappenplan: 1. const variabele met document.getElementById.
//               2. voorzien van inhoud d.m.v. textContent.
//               3. met inhoud tvBought.
//- loggen: console.log.
//- 2d.
const tvBought= document.getElementById("tvBought");
console.log(tvBought);
tvBought.textContent = totalBoughtTv;


//- 2e.
//- input: het aantal nog te verkopen tv's.
//- output: het aantal nog te verkopen tv's van ieder object in de array.
//- stappenplan:  1. for-loop met array methode-length van het aantal tv's in stock minus het aantal tv's sold per object.
//                2. let variabele gecreëerd vanuit for-loop met push.
//                3. de array met reduce-methode optellen en een const variabele met daarin het totaal genereren.
//                4. const variabele met document.getElementById.
//                5. voorzien van inhoud d.m.v. textContent.
//                6. met inhoud tvBought.
//- loggen: console.log.
//- 2e.
let toSell = [];
for(let i = 0; i <inventory.length; i++){
    toSell.push(inventory[i].originalStock-inventory[i].sold);
}
console.log(toSell);
const totalToSell = toSell.reduce((a,b)=> a + b);
console.log(totalToSell);
const tvToSell = document.getElementById("toSell");
console.log(tvToSell);
tvToSell.textContent=totalToSell;


