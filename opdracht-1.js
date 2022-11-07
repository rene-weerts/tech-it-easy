//- input:
//- output:
//- stappenplan:
//- loggen:

//- 1a
//- input: een methode die een nieuwe array maakt.
//- output: en van iedere entry/object de waarde "name" terug geeft.
//- stappenplan: een const variabele met array-methode-map die als functie een specifieke waarde terug geeft van ieder entry met de naam "name".
//- loggen: console.log.
//- 1a
const tvTypeNames = inventory.map ((tv) => {
    return tv.name;
})
console.log(tvTypeNames);

//- 1b
//- input: een methode die een nieuwe array maakt op basis van een gestelde conditie (true or false).
//- output: geeft een nieuwe array terug met het hele object als conditie true bevonden wordt.
//- stappenplan: een const variabele met array-methode-filter die als functie indien true het hele object teruggeeft in een nieuwe array.
//- loggen: console.log.
//- 1b
const soldOut = inventory.filter((tv)=>{
    return  tv.originalStock === tv.sold;
});
console.log(soldOut)

//- 1c
//- input: een methode die een nieuwe array maakt op basis van een gestelde conditie (true or false).
//- output: die een waarde (het hele object) terug geeft als hij true vind bij de conditie "AmBiLight"
//- stappenplan: een const variabele met array-methode-filter die als functie indien true het hele object teruggeeft in een nieuwe array.
//- loggen: console.log
//- 1c
const tvAmBiLight = inventory.filter((tv1)=>{
    return  tv1.options.ambiLight;
});
console.log(tvAmBiLight)

//- 1d
//- input: Array met alle tv-prijzen.
//- output: Array met alle tv-prijzen van laagste naar hoogste prijs.
//- stappenplan: variabele met array methode .sort met een call-back functie waarbij we de parameters a en b voorzien van argument price en deze van elkaar aftrekken zodat de waarde van laag naar hoog loopt.
//- loggen: console.log.
const pricesUp = inventory.sort((a,b)=>a.price - b.price);
console.log(pricesUp)
















