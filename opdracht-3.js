
//- input:
//- output:
//- stappenplan:
//- loggen:

//- 3a.
//- input: met de array-map methode de merken van alle tv's genereren.
//- output: de merken van alle tv's in een ul list zetten op de pagina.
//- stappenplan: 1. const variabele maken met array-map methode en alle brands in de array laten terug geven.
//               2. let variabele maken die de array kan koppelen aan ul op html-pagina.
//               3. de ul list maken waarin je beide variabelen in verwerkt en zichtbaar maakt op pagina.
//- loggen: console.log.
const tvBrand = inventory.map((brand)=>{
    return brand.brand;
})
console.log(tvBrand)

let list = document. getElementById( "myList" );

tvBrand.forEach((item)=>{
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
});

//- 3b.
//- input: Deze opdracht met Nova bekeken. Ik begreep niet wat de bedoeling was. Vond de opdracht omschrijving te vaag waardoor ik er niet uitkwam.
//- output:
//- stappenplan:
//- loggen: console.log
//- 3b.
function createBrands (tvArray){
    const tvBrand = tvArray.map((brand)=>{
        return brand.brand;
    })
    let list = document. getElementById( "myList" );

    tvBrand.forEach((item)=>{
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
    });
    console.log(tvArray)
}

createBrands(inventory)



